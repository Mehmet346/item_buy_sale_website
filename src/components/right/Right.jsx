import React from 'react'
import banner from '../../assets/rk_image.gif'

const Right = () => {
  return (
    <>
    <div className="max-h-screen hidden lg:block inset-0 w-[50%] overflow-y-scroll">
      <div className="p-4 border rounded-lg text-center border-[#e8e8e8] bg-[#f8f8f8]">
        <img className="my-1 object-fill" src={banner} alt='' />
        <img className="my-1 object-cover" src={banner} alt='' />
        <img className="my-1 object-cover" src={banner} alt='' />
        <img className="my-1 object-cover" src={banner} alt='' />
        <img className="my-1 object-cover" src={banner} alt='' />
      </div>
    </div>
  </>
  )
}

export default Right