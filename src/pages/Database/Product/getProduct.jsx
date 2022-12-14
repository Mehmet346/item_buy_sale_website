import React, { useEffect, useState } from "react";
import "../Product/getProduct.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs,doc, where, addDoc, updateDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { auth, db } from "../../../firebase"
import sampleImage from "../../../assets/kafa.png"

function Product() {
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [modalData, setModalData] = useState(null)
  const [show, setShow] = useState(false);

  const [collectionid, setId] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [amount, SetAmount] = useState([]);
  const [email, setEmail] = useState([]);
  const [uid, setUid] = useState([]);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getProduct();
  }, [user, loading]);


  function getProduct() {
    const productCollectionRef = collection(db, 'product')
    getDocs(productCollectionRef)
      .then((res) => {
        const product = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setProduct(product)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const sales = async (id, title, category, selleremail, selleruid, price) =>  {
    setShow(false);

    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      const collectionid = doc.docs[0].id;

      
      setId(collectionid);
      setName(data.name);
      setPhone(data.phone);
      SetAmount(data.amount);
      setEmail(data.email);
      setUid(data.uid);
  
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }

    if(amount < price){
      alert("bakiyeniz yetersizdir");
    }
    else {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();
        
        const receivedUid = uid;
        const receivedName = name;
        const receivedPhone = phone;
        const receivedEmail = email;

        const ReceivedCollRef = collection(db,'receivedItem')
        addDoc(ReceivedCollRef, {id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail})
        .then(response =>{
            console.log(response.id)
        })
        .catch(error => {
            console.log(error.message);
        })

        const SoldCollRef = collection(db,'soldItem')
        addDoc(SoldCollRef, {id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail})
        .then(response =>{
            console.log(response.id)
        })
        .catch(error => {
            console.log(error.message);
        })
        
        const currentAmount = (amount - price);
        const q = doc(db, "users", collectionid);
        updateDoc(q, {
         amount: currentAmount
        });
    }
  }

  return (

    <div className="getProduct">
      {(modalData != null) &&
        <>
          <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Bu ürünü satın almak üzeresiniz</Modal.Title>
            </Modal.Header>
            <Modal.Body>Onayladığınız takdirde {modalData.data.title} ürününü {modalData.data.price} TL'ye satın alacaksınız?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Kapat
              </Button>
              <Button variant="primary" onClick={() => { sales(modalData.id, modalData.data.title, modalData.data.category, modalData.data.useremail, modalData.data.useruid, modalData.data.price) }}>
                Satın Al
              </Button>
            </Modal.Footer>
          </Modal>
        </>}
      <ul>
        <h1>Güncel ilanlar</h1>
        {product.map(product => (
          <li key={product.id}><br></br>
            <div className="row product">
              <div className="col-md-2">
                <img src={sampleImage} alt="Sample Image" height="150" />
              </div>
              <div className="col-md-8 product-detail">
                <h4>{product.data.title}</h4>
                <p>Kategori: {product.data.category}</p>
              </div>
              <div className="col-md-2 product-price">
                {product.data.price} TL
              </div>
              <div className="row-md-5">
                <p>Yüklenme Tarihi: {product.data.date}</p>
              </div>
              <div className="row-md-5">
                <h6>Satıcı: {product.data.useremail}</h6>
              </div>
              {(product.data.useruid != auth.currentUser.uid) &&
                <div className="col-md-2 product-price">
                  <button onClick={() => { setModalData(product); setShow(true); }}>Satın al</button>
                </div>
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
