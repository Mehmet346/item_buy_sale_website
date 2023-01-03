import React, { useState, useContext, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoMailOutline } from 'react-icons/io5'
import { logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../../dbconnection/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Store } from '../../app/store';

function Login() {
  var [register, setRegister] = useState("");
  var [loginwith, setLogin] = useState("");
  var [withemail, setWithEmail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function f_login() {
    setRegister(register = false)
    setWithEmail(withemail = false)
  }

  function f_register() {
    setLogin(loginwith = false)
    setWithEmail(withemail = false)
  }
  const { auth } = useContext(Store)
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate([]);

  useEffect(() => {
    if (loading) return;

  }, [user, loading]);

  const setData = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div className="text-center flex items-center justify-center ">
      <div className='my-3 ml-0.5 p-3 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]'>
        {!user &&
          <div className="flex gap-3 items-center justify-center">
            <button onClick={() => { f_login(); setLogin(!loginwith); }} 
            className='p-2 px-3 text-xs focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out bg-slate-900 text-white leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg'
            type="button" placeholder='Password' >
              Login
            </button>
            <button onClick={() => { f_register(); setRegister(!register) }} 
            className='p-2 px-3 text-xs focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out bg-slate-900 text-white leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg'
            type="button" placeholder='Password'>
              Register
            </button>
          </div>}

        {loginwith &&
          <div className="w-full my-3 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]">
            <div className="flex my-3 visible justify-center gap-20 hover:gap-12 duration-500">
              <IoMailOutline onClick={() => setWithEmail(!withemail)} className="text-gray-400 active:h-8 active:w-8 duration-150 active:text-sky-500 h-7 w-7 cursor-pointer" />
              <FcGoogle onClick={signInWithGoogle} className="active:h-8 active:w-8 duration-150 active:filter-none grayscale h-7 w-7 cursor-pointer " />
            </div>
          </div>}

        {withemail &&
          <div className='text-xs'>
            <p /><input onChange={(e) => setEmail(e.target.value)} className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='E-Mail' />
            <p /><input onChange={(e) => setPassword(e.target.value)} className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Password' />
            <p /><button onClick={() => logInWithEmailAndPassword(email, password)} className='mt-2 px-5 py-2 dark:bg-blue-600 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg dark:focus:bg-blue-700 focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out' type="button">
              Login
            </button>
          </div>}

        {register &&
          <div className="mt-4">
            <div className="text-center text-xs">
              <input onChange={(e) => setName(e.target.value)} className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="text" placeholder='Full Name' />
              <input onChange={(e) => setEmail(e.target.value)} className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='E-Mail' />
              <input onChange={(e) => setPassword(e.target.value)} className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Password' />
              <input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Re-Password' />

              <div className="flex space-x-2 mt-3 mb-1 justify-center">
                <button
                  onClick={setData}
                  type="button"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Submit</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Login