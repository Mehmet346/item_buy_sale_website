import React, { useContext } from 'react'
import { UserPanel, SearchBar, ServerList, Login, UserInformation } from '../'
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from '@mui/material';
import { Store } from '../../app/store';

function Left() {

  const { auth, logout } = useContext(Store)
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

  }, [loading]);

  return (
    <div className="hidden max-h-screen lg:block px-2 py-5 overflow-y-scroll ">
      <div className="w-[300px] justify-center flex flex-col">
        {!user ? <Login /> :
          <Button onClick={logout} variant="outlined">Logout</Button>
        }
      </div>

      <nav id="nav" className="lg:text-sm lg:leading-6 relative ">
        {user && <UserInformation />}
        {user && <UserPanel />}
        <SearchBar />
        <ServerList />
      </nav>
    </div>
  )
}

export default Left