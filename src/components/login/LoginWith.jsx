import React, {useState} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoMailOutline } from 'react-icons/io5'
import { signInWithGoogle } from '../../firebase';

function LoginWith() {
var [loginwith, setLogin] = useState("");
var [withemail, setWithEmail] = useState("");

  return (
   
      <div className="w-full my-3 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]">
          <div className="flex my-3 visible justify-center gap-20 hover:gap-12 duration-500">
              <IoMailOutline className="text-gray-400 active:h-8 active:w-8 duration-150 active:text-sky-500 h-7 w-7 cursor-pointer"onClick={() => setLogin(!loginwith)} />
              <FcGoogle className="active:h-8 active:w-8 duration-150 active:filter-none grayscale h-7 w-7 cursor-pointer " onClick={signInWithGoogle}/>
          </div>
      </div>
  )
}

export default LoginWith