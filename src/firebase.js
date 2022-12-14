import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpH6KRbU8VY6HMchnY51Pd_NMMKuRMWfI",
  authDomain: "login-e1fe8.firebaseapp.com",
  projectId: "login-e1fe8",
  storageBucket: "login-e1fe8.appspot.com",
  messagingSenderId: "568919810340",
  appId: "1:568919810340:web:d657d3405fe6c1b30d13b1",
  measurementId: "G-ZQL0993JWR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        phone: user.phoneNumber,
        amount: 0,
        picture: user.photoURL,
        emailVerify: user.emailVerified,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, phone) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, phone);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      amount: 0,
      picture: null,
      emailVerify: false,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  return sendPasswordResetEmail(auth, email).then((a) => {
    alert("Password reset email sent")
  })
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  onAuthStateChanged,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendSignInLinkToEmail,
  logout,
};
