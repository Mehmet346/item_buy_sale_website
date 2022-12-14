import React from 'react'
import { LogRegBtn, LoginWith, WithEmail, Register, UserPanel, SearchBar, ServerList } from '../'

function Left() {
  const IsLogged = (false);

  let amount = 5;

  return (
    <div className="w-[35%] hidden inset-0 max-h-screen lg:block px-5 py-5 overflow-y-scroll ">
      <div className="flex w-full inset-0 items-center justify-center">
        <div className="my-3 ml-0.5 p-3 w-[80%] border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]">
          {IsLogged === false ? <LogRegBtn /> : null}
          <LoginWith 
          amount = {amount}
          />
          <WithEmail />
          <Register />
        </div>
      </div>

      <nav id="nav" className="lg:text-sm lg:leading-6 relative ">
        <ul className="ml-5">
          <UserPanel />
          <SearchBar />
          <ServerList />
        </ul>
      </nav>
    </div>
  )
}

export default Left