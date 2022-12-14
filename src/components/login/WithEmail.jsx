import React from 'react'

const WithEmail = () => {
    return (
        <>
                <p/><input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="email" placeholder='E-Mail' />
                <p/><input className='my-1 p-2 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 ' type="password" placeholder='Password' />
                <p/><button className='mt-2 px-5 py-2 dark:bg-blue-600 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-blue-700 hover:bg-slate-700 hover:shadow-lg dark:focus:bg-blue-700 focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-blue-800 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out' type="button">
                    Login
                </button>
        </>
    )
}

export default WithEmail