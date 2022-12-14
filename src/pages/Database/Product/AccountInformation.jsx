import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AccountInformation.css";
import { auth, db } from "../../../firebase"
import { query, collection, getDocs, where } from "firebase/firestore";

import Product from "./getProduct";

function AccountInformation() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [amount, SetAmount] = useState([]);
  const [picture, setPicture] = useState([]);
  const [activeTime, setActivetime] = useState([]);


  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      SetAmount(data.amount);
      setName(data.name);
      setPhone(data.phone);
      setPicture(data.picture);
      setActivetime(user.metadata.lastSignInTime)
      
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, [user, loading]);


  return(
  <div className="AccountInformation">
    <div className="AccountInformation__container">
       <div>Name: {name}</div>
        <div>Amount: {amount} TL</div>
        <div>Account: {user?.email}</div>
        <div>Phone: {phone}</div>
        <div><img style={{ borderRadius: '50%',width: "50%", height: "50%"}} src={picture} alt=""/></div>
        {<div>Son Giriş: {activeTime}</div>}
      </div>
  </div>
  );
}

export default AccountInformation;
