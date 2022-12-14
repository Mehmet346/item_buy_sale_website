import React from 'react'

function LogRegBtn() {

  return (
      <div className="flex justify-center gap-5 w-full">
          <button className='px-5 py-2 inline-block dark:bg-blue-600 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg dark:focus:bg-blue-700 focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out' type="button" placeholder='Password' >
              Login
          </button>
          <button className='px-5 py-2 inline-block dark:bg-blue-600 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg dark:focus:bg-blue-700 focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out' type="button" placeholder='Password'>
              Register
          </button>
      </div>
  )
}

export default LogRegBtn