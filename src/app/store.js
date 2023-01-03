import React, { useEffect, createContext, useState } from "react";
import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './darkModeReducer'
import { db, auth, logout } from "../dbconnection/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { query, collection, getDocs, where } from "firebase/firestore";

export const store = configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
  },
})

export const Store = createContext();

export function StoreProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  const [uid, setUid] = useState([]);
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [amount, setAmount] = useState([]);
  const [picture, setPicture] = useState([]);
  const [collectionId, setCollectionId] = useState([]);
  const [serverList, setServerList] = useState([]);
  const [searchBar, setSearchBar] = useState([]);
  const [activeTime, setActivetime] = useState([]);
  const [product, setProduct] = useState([]);
  const [soldItem, setSoldItem] = useState([]);
  const [received, setReceived] = useState([]);
  const [show, setShow] = useState(false);
  const AddCurrentAmount = 1

  async function getSold() {
    const user = auth.currentUser;
    const useruid = user.uid;
    console.log(useruid)

    const productCollectionRef = query(collection(db, "soldItem"), where("selleruid", "==", useruid));
    getDocs(productCollectionRef)
      .then((res) => {
        const soldItem = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setSoldItem(soldItem)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  async function getReceived() {
    const user = auth.currentUser;
    const useruid = user.uid;
    console.log(useruid)

    const productCollectionRef = query(collection(db, "receivedItem"), where("receivedUid", "==", useruid));
    getDocs(productCollectionRef)
      .then((res) => {
        const received = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setReceived(received)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      const collectionid = doc.docs[0].id;
      const uid = user.uid;

      setUid(uid);
      setCollectionId(collectionid)
      setAmount(data.amount);
      setUserName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setPicture(data.picture);
      setActivetime(user.metadata.lastSignInTime)

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserName();
    getServerList();
    getProduct();
    getSold();
    getReceived();
    getSearchBar();
  }, [user, loading]);

  function getServerList() {
    const serverCollectionRef = collection(db, 'serverList')
    getDocs(serverCollectionRef)
      .then((res) => {
        const serverList = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setServerList(serverList)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  async function getProduct() {
    const user = auth.currentUser;
    const useruid = user.uid;
    console.log(useruid)

    const productCollectionRef = query(collection(db, "product"), where("useruid", "==", useruid));
    getDocs(productCollectionRef)
      .then((res) => {
        const product = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setProduct(product)

      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  function getSearchBar() {
    const serverCollectionRef = collection(db, 'product')
    getDocs(serverCollectionRef)
      .then((res) => {
        const getSearchBar = res.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setSearchBar(getSearchBar)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const value = { user, loading, auth, logout, userName, phone, setPhone, searchBar, serverList, amount, setAmount, AddCurrentAmount ,collectionId, picture, setPicture, activeTime, serverList, setServerList, email, setEmail, product, setProduct, soldItem, setSoldItem, received ,setReceived, uid, setUid, show, setShow }
  return <Store.Provider value={value}>{children}</Store.Provider>
}