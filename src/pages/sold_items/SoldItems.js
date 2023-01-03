import React, { useContext } from "react";
import { Store } from '../../app/store';
import SoldImage from '../../assets/sold.png'

function SoldItems() {
  const { soldItem } = useContext(Store);

  return (

    <div className="overflow-y-scroll h-screen grow ">
      <div className="mx-10 px-auto">
        {soldItem.map((soldItem) => (
          <div className='md:flex space-y-5 relative justify-between mt-10 px-auto my-5 p-4 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]' key={soldItem.id} >
            <div className="flex">
              <div className="ml-10 text-left w-full">
                <span className="absolute h-24 w-24 -left-6 -top-4"><img src={SoldImage} /></span>
                <span className="right-2 top-2 p-2 absolute text-xs text-gray-400">{soldItem.data.category}</span>
                <p>Title : {soldItem.data.title} </p>
                <p>Price : {soldItem.data.price}$ </p>
                <p>Date : {soldItem.data.date}</p>
                <p>Description : {soldItem.data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SoldItems