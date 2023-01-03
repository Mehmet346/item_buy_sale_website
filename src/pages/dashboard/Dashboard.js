import React, { useContext } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { Store } from '../../app/store';

function Dashboard() {
  const { user, userName, phone, amount, picture, activeTime, email } = useContext(Store);
  return (
    <div className='grow mx-auto'>
      <div className='py-10 flex justify-center gap-8 shadow-sm shadow-b'>
        <div className='hover:bg-gray-200 shadow-md rounded-lg p-4 cursor-pointer flex items-center flex-col'>
          <AiOutlineUser
            className='w-8 h-8 text-gray-500'
          />
          Personal Information
        </div>
        <div className='hover:bg-gray-200 shadow-md rounded-lg p-4 cursor-pointer flex items-center flex-col'>
          <RiLockPasswordLine
            className='w-8 h-8 text-gray-500'
          />
          Account Details
        </div>
        <div className='hover:bg-gray-200 shadow-md rounded-lg p-4 cursor-pointer flex items-center flex-col'>
          <MdPayment
            className='w-8 h-8 text-gray-500'
          />
          Payment Details
        </div>
        {/* 
        <div className='hover:bg-gray-200 shadow-md rounded-lg p-4 cursor-pointer flex items-center flex-col'>
          <SiGooglemessages
            className='w-8 h-8 text-gray-500'
          />
          Messages
        </div>
        **/}
      </div>
      <div className='space-y-8 shadow-md p-5'>
        <span className="p-4 border-b text-gray-500 text-md font-semibold top-0 left-0 flex">Personal Information</span>
        <div className="flex justify-between">
          <div className="space-y-3">
            <p className="p-2">Email</p>
            <p className="p-2">Name</p>
            <p className="p-2">Phone</p>
          </div>
          <div className="space-y-3">
            <p className="p-2 border">{email}</p>
            <p className="p-2 border">{userName}</p>
            <p className={phone ? 'p-2 border' : 'p-2 border text-red-600'} > {phone ? phone : 'Not Verified !'}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard