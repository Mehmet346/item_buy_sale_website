import React from 'react'

const Register = () => {
    return (

        <div className="mt-4 text-center text-xs items-center justify-center">
            <div className="flex justify-center gap-2 w-full rounded-lg my-1 ">
                <input className='p-2 w-[5.5rem] bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='Name' />
                <input className='p-2 w-[4.2rem] bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='Surname' />
            </div>
            <p/><input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='E-Mail' />
            <p/><input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Password' />
            <p/><input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Re-Password' />
            <div className="flex space-x-2 mt-3 mb-1 justify-center">
                <p/><button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Submit
                    </button>
            </div>
        </div>

    )
}

export default Register