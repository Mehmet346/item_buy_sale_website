import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./getProduct.css";
import { collection, getDocs,doc,updateDoc,deleteDoc,query,where} from "firebase/firestore";
import { db,auth } from "../../../firebase";
import sampleImage from "../../../assets/kafa.png"
import 'bootstrap/dist/css/bootstrap.css';

function CurrentProduct() {
  const [user, loading] = useAuthState(auth);
  const [title, setTitle] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");

 useEffect(() => {
  if(user){
   
  }
  getProduct();
  }, [user, loading]);
   
   
  async function getProduct() {
    const user = auth.currentUser;
    const useruid = user.uid;
    console.log(useruid)

    const productCollectionRef =  query(collection(db, "product"), where("useruid", "==", useruid));
    getDocs(productCollectionRef)
    .then((res) => {
            const product = res.docs.map(doc =>({
               data: doc.data(),
               id: doc.id,
            }))
            setProduct(product)
            
    })
    .catch((error) => {
            console.log(error.message);
    })
  }
  function DeleteSubmit(key) {
    console.log(key + " Başarıyla silindi");
    deleteDoc(doc(db, "product", key));

  }

   function EditSubmit(e){
    e.preventDefault()
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();

      var e = document.getElementById("SetCategory");
      var value = e.value;

    const productRef = doc(db, "product", id);
    updateDoc(productRef, {
      title: title,
      category: value,
      price: price,
      date: date,
    });
  }
  
  return (
    <div className="bg-sky-400 w-full">
          <ul>
              <h1>Yüklediğim ilanlar</h1><br></br>
              {product.map((product) =>(
                  <li key={product.id} >
                    <form >
                      <div className="row product">
                        <div className="col-md-2">
                          <img src={sampleImage} alt="Sample Image" height="150" />
                        </div>
                        <div className="col-md-8 product-detail">
                            <label htmlFor="key" >{product.id}</label><br></br>
                            <input  type="text" id={product.id} placeholder={"keyi yapıştırınız"}
                              onChange={e => setId(e.target.value)}></input>
                          <br></br>
                            <label htmlFor="AddTitle" >Başlık Giriniz: </label>
                            <input  type="text"  placeholder={product.data.title}
                              onChange={e =>setTitle(e.target.value)}></input>
                          <br></br>
                            <label htmlFor="AddCategory" >Kategori Giriniz: </label><br></br>
                            <select id="SetCategory" onChange={e =>setCategory(e.target.value)}>
                                <option value="Metin2 Bonusmt2" >Metin2 Bonusmt2</option>
                                <option value="Metin2 Marmara" >Metin2 Marmara</option>
                                <option value="Metin2 Herakles" >Metin2 Herakles</option>
                                <option value="Metin2 Ruby" >Metin2 Ruby</option>
                                <option value="Metin2 Ege" >Metin2 Ege</option>
                                <option value="Metin2 Azyrah" >Metin2 Azyrah</option>
                            </select>
                          <br></br>
                        </div>
                          <div className="col-md-2 product-price">
                            <label htmlFor="AddPrice" >Fiyat Giriniz: </label>
                            <input  type="number"  placeholder={product.data.price}
                            onChange={e =>setPrice(e.target.value)}></input>
                          <br></br>
                        </div>
                        <button  type="button" onClick={(e) => EditSubmit(e)}>Edit</button><br></br>
                        <button  type="button" onClick={() => DeleteSubmit(product.id)}>Delete</button>
                    <br></br>
                </div>
                    </form>
                  </li>
              ))}  
          </ul>
    </div>
  );
}
export default CurrentProduct;


