import React, { useEffect, useState } from 'react'
import { db } from "../dbconnection/firebase"
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard({ name }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct()
  }, [product])

  async function getProduct() {

    const productCollectionRef = query(collection(db, "product"), where("category", "==", name));
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

  return (
    <div className="overflow-y-auto">
      {product.map((product) => (
        <div className='mt-10 px-20 my-5 p-4 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]' key={product.id} >
          {product.data.title}
        </div>
      ))}

    </div>
  )
}

export default Dashboard