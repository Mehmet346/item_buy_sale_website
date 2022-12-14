import React, {useState} from "react";
import {addDoc, collection } from 'firebase/firestore'
import { auth,db } from "../../../firebase"
import "./AddProduct.css"

 function AddProduct(){
     const [title, setTitle] = useState([]);
     const [category, setCategory] = useState([]);
     const [price, setPrice] = useState([]);

    function handleSubmit(e){
        e.preventDefault()
        if(title == '' || category == '' || price == ''){
            return
        }

        const user = auth.currentUser;
        const useruid = user.uid;
        const useremail = user.email;
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();
        
        var e = document.getElementById("Addcategory");
        var category = e.value;

        const ProductCollRef = collection(db,'product')
        addDoc(ProductCollRef, {useruid, useremail, title, category, price, date })
        .then(response =>{
            console.log(response.id)
            window.location.reload(false);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

     return(
         <div className="AddProduct">
           <div className="row product">
              <form onSubmit={handleSubmit}>
              <div className="col-md-8 product-detail">
                  <label htmlFor="AddTitle" >Başlık Giriniz: </label>
                  <input id="AddTitle" type="text" value={title}
                  onChange={e =>setTitle(e.target.value)}></input>
                <br></br>
                  <label htmlFor="AddCategory" >Kategori Giriniz: </label>
                <select id="Addcategory" onChange={e =>setCategory(e.target.value)}>
                  <option value="Metin2 Bonusmt2" >Metin2 Bonusmt2</option>
                  <option value="Metin2 Marmara" >Metin2 Marmara</option>
                  <option value="Metin2 Herakles" >Metin2 Herakles</option>
                  <option value="Metin2 Ruby" >Metin2 Ruby</option>
                  <option value="Metin2 Ege" >Metin2 Ege</option>
                  <option value="Metin2 Azyrah" >Metin2 Azyrah</option>
               </select>
                <br></br>
              </div>
                  <label htmlFor="AddPrice" >Fiyat Giriniz: </label>
                  <input id="AddPrice" type="number" value={price}
                  onChange={e =>setPrice(e.target.value)}></input>
                <br></br>
                  <button className="AddProduct__btn" type="submit">ilan Yükle</button>
              </form>
            </div>
         </div>     
     );         
}

export default AddProduct;