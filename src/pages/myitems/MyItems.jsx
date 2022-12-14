import React, {useEffect} from 'react'
import { auth, db } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";

import CurrentProduct from '../Database/Product/getCurrentProduct'
import AddProduct from "../Database/Product/AddProduct"

const MyItems = () => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user){
    }
    }, [user, loading]);

  return (
      <div>{(user != null) &&
        <div> 
          <CurrentProduct></CurrentProduct>
          <AddProduct></AddProduct>
        </div>
       }
      </div>
  )
}

export default MyItems