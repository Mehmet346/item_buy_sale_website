import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { db } from "./dbconnection/firebase"
import { collection, getDocs } from "firebase/firestore";
import { Navbar, Left, Right, ServerCategories } from "./components";
import { MyItems, Profile, Dashboard, AddItems, SoldItems, BoughtItems } from "./pages"

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    const productCollectionRef = collection(db, 'serverList')
    getDocs(productCollectionRef)
      .then((res) => {
        const product = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setProduct(product)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-between">
        <Left />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my_items" element={<MyItems />} />
          <Route path="/add_items" element={<AddItems />} />
          <Route path="/bought_items" element={<BoughtItems />} />
          <Route path="/sold_items" element={<SoldItems />} />
          {product.map((server) => (
            <Route key={server.id} exact path={`/${server.data.name}`} element={<ServerCategories name={server.data.name} />} />
          ))}
        </Routes>
        <Right />
      </div>
    </>
  );
}

export default App;