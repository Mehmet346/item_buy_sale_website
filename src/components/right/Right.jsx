import React from 'react'
import banner from '../../assets/rk_image.gif'

const Right = () => {
  return (
    <div className="border-l hidden max-h-screen lg:block px-2 py-5 overflow-auto ">
        <img src={banner} alt='banner' className='h-[850px] w-[500px] object-cover' />
    </div>
  )
}

export default Right