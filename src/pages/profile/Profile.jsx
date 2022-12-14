import React from 'react'


import Product from '../Database/Product/getProduct'

const Profile = () => {
  return (
    <div className=' w-full py-10 px-10 '>
      <div className="bg-sky-400 w-full">
       <Product></Product>
      </div>
    </div>
  )
}

export default Profile