import React from 'react'
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

function UserNavBar({ Icon, text, router }) {
  return (
    <>
      <Link to={router} className='text-black no-underline'>
        <div className='flex items-center gap-5 cursor-pointer hover:bg-gray-200 rounded-lg'>
          <IconButton color="primary" aria-label="upload picture" size="large" component="label">{Icon}</IconButton>
          {text}
        </div>
      </Link>
    </>
  )
}

export default UserNavBar