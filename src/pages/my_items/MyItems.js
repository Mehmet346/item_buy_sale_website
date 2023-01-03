import React, { useContext } from "react";
import sampleImage from "../../assets/kafa.png"
import Button from '@mui/material/Button';
import { Store } from '../../app/store';
import { BsCaretRightSquare } from "react-icons/bs";
import { db } from "../../dbconnection/firebase";
import { doc, deleteDoc } from "firebase/firestore";

const MyItems = () => {
  const { product } = useContext(Store);

  async function DeleteSubmit(key) {
    await deleteDoc(doc(db, "product", key));
    window.location.reload();
  }

  return (
    <div className="overflow-y-scroll h-screen grow ">
      <div className="mx-10 px-auto">
        {product.map((product) => (
          <div key={product.id} className=' relative justify-between mt-10 px-auto my-5 p-4 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]' >
            <span className="right-2 top-2 p-2 absolute text-xs text-gray-400">{product.data.category}</span>
            <div className="flex">
              <img src={sampleImage} alt="avatar" className='h-32 hidden md:block' />
              <div className="ml-10 text-left w-full">
                <p className='text-sky-600 font-semibold'>{product.data.title}</p>
                <p>Price : {product.data.price}$</p>
                <p>Adding Date : {product.data.date}</p>
                <p>Description : {product.data.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <p>
                <Button variant="outlined" color="warning">
                  Replace
                </Button>
              </p>
              <p>
                <Button
                  onClick={() => DeleteSubmit(product.id)}
                  variant="outlined" color="error">
                  Delete
                </Button>
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MyItems