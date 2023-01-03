import React, { useEffect, useState, useContext } from 'react'
import { db } from "../../dbconnection/firebase"
import { query, collection, deleteDoc, getDocs, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { Store } from '../../app/store';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';

function ServerCategories({ name }) {
  const { user, userName, phone, amount, setAmount ,collectionId, picture, setPicture, activeTime, serverList, setServerList, email, setEmail, soldItem, setSoldItem, received ,setReceived, uid, setUid} = useContext(Store);

  const [modalData, setModalData] = useState(null)
  const [show, setShow] = useState(false);

  const [product, setProduct] = useState([]);

  const handleClose = () => setShow(false);
  console.log(name)
  console.log(amount)

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    const productCollectionRef = query(collection(db, "product"), where("category", "==", name));
    getDocs(productCollectionRef)
      .then((res) => {
        const product = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setProduct(product)
        console.log(product)

      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const buyButton = async (id, title, category, selleremail, selleruid, price, description) => {
    setShow(false);

    console.log('Bakiyeniz : ', amount)
    console.log("Item's Price : ", price)

    if (price > amount) {
      alert("bakiyeniz yetersizdir");
    }
    else {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();

      const receivedUid = uid;
      const receivedName = userName;
      const receivedPhone = phone;
      const receivedEmail = email;

      const ReceivedCollRef = collection(db, 'receivedItem')
      addDoc(ReceivedCollRef, { id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail, description })
        .then(response => {
          console.log(response.id)
        })
        .catch(error => {
          console.log(error.message);
        })

      const SoldCollRef = collection(db, 'soldItem')
      addDoc(SoldCollRef, { id, title, category, price, date, selleremail, selleruid, receivedUid, receivedName, receivedPhone, receivedEmail, description })
        .then(response => {
          console.log(response.id)
        })
        .catch(error => {
          console.log(error.message);
        })

      const currentAmount = (amount - price);
      const q = doc(db, "users", collectionId);
      updateDoc(q, {
        amount: currentAmount
      });
      setAmount(currentAmount);

      async function DeleteSubmit(id) {
        await deleteDoc(doc(db, "product", id));
        window.location.reload();
      }
      DeleteSubmit(id);
    }
  }

  return (
    <div className="overflow-y-scroll h-screen grow ">
      <div className="mx-10 px-auto">
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
                <Button variant="primary" onClick={() => { buyButton(modalData.id, modalData.data.title, modalData.data.category, modalData.data.useremail, modalData.data.useruid, modalData.data.price, modalData.data.description) }}>
                  Satın Al
                </Button>
              </Modal.Footer>
            </Modal>
          </>}
        {product.map((product) => (
          <div className='md:flex space-y-5 relative justify-between mt-10 px-auto my-5 p-4 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]' key={product.id} >
            <div className="flex">
              <div className="ml-10 text-left w-full">
                <p className='text-sky-600 font-semibold'>{product.data.title}</p>
                <p>Server : {product.data.category}</p>
                <p>Price : {product.data.price}$</p>
                <p>Adding Date : {product.data.date}</p>
                <p>Description : {product.data.description}</p>
              </div>
            </div>
            <p className='flex items-center justify-center'>
              <Button
                disabled={!user}
                onClick={() => { setModalData(product); setShow(true); }}
                variant="contained" color="success" size='large'>
                Buy
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServerCategories