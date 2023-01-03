import React, { useContext } from "react";
import Avatar from '@mui/material/Avatar';
import { db } from "../../dbconnection/firebase"
import { updateDoc, doc } from "firebase/firestore";
import { BsWallet2, BsTelephone } from 'react-icons/bs';
import { FiPlusSquare } from 'react-icons/fi';
import { TbActivityHeartbeat, TbCameraPlus, TbCurrencyDollar } from 'react-icons/tb';
import { IoMailOutline } from 'react-icons/io5';
import DePayWidgets from '@depay/widgets';
import { Store } from '../../app/store';

function UserInformation() {
  const { user, userName, phone, amount, collectionId, AddCurrentAmount, setAmount, picture, activeTime } = useContext(Store);
  
  function cryptoPayment() {
    DePayWidgets.Donation({
      accept: [
        {
          "blockchain": "bsc",
          "token": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "receiver": "0xf2A9655f6F9d4d9e142AFC9908d4e2228f4d1FB8"
        }, {
          "blockchain": "bsc",
          "token": "0x55d398326f99059fF775485246999027B3197955",
          "receiver": "0xf2A9655f6F9d4d9e142AFC9908d4e2228f4d1FB8"
        }],
      succeeded: (transaction) => {
        console.log(transaction);
        setAmount(amount + AddCurrentAmount)
        const currentAmount = (amount + AddCurrentAmount);
        const q = doc(db, "users", collectionId);
        updateDoc(q, {
          amount: currentAmount
        });
      }
    });
  }

  return (
    <div>
      <div className="mt-5 justify-center items-center flex">
        <TbCameraPlus className="absolute opacity-80 items-center justify-center w-6 h-6 cursor-pointer" />
        <Avatar
          className="hover:opacity-40 cursor-pointer border-gray-800 border"
          src={picture}
          name={userName}
          sx={{ width: 72, height: 72 }}
        />
      </div>

      <span className="mt-2 flex justify-center">{userName}</span>
      <span className="flex items-center justify-center gap-2"><IoMailOutline className="w-4 h-4" />{user?.email}</span>

      <div className="flex flex-col items-center mt-2 p-2 mx-10 shadow-sm shadow-slate-300 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]">
        <span className="flex items-center gap-1 "><BsWallet2 />Amount : {amount}<TbCurrencyDollar /><FiPlusSquare onClick={() => { cryptoPayment() }} className="h-4 w-4 cursor-pointer hover:text-sky-700" /></span>
        {phone ? <span><BsTelephone />Phone : {phone}</span> : <span className="items-center gap-1 flex"><BsTelephone />Phone : <span className="text-red-700">(Not Verified)</span><FiPlusSquare className="h-4 w-4 cursor-pointer hover:text-sky-700" /></span>}
        <span className="flex items-center gap-2"><TbActivityHeartbeat className="w-5 h-5" />{activeTime}</span>
      </div>
    </div>
  )
}

export default UserInformation