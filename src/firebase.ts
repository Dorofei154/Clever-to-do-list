import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

const deleteTodo = async (e: string, email: string) => {
  return deleteDoc(doc(db, email, e));
};

const addTodo = async (
  text: string,
  email: string,
  date: string,
  header: string,
  index: string
) => {
  const dateRes = new Date(date);
  await setDoc(doc(db, email, index), {
    header,
    res: text,
    done: false,
    month: dateRes.getMonth(),
    date: dateRes.getDate(),
  });
};

const changeTodo = async (email: string, index: string, done: boolean) => {
  await updateDoc(doc(db, email, index), {
    done: !done,
  });
};

const getTodo = async (email: string) => {
  const querySnapshot: any = await getDocs(collection(db, email));
  const arr: {
    id: string;
    data: {
      id: string;
      text: string;
      header: string;
      date: moment.Moment | number;
      done: boolean;
      month: moment.Moment | number;
    };
  }[] = [];
  querySnapshot.forEach((doc: any) => {
    arr.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return arr;
};

const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const logout = () => {
  return signOut(auth);
};

export {
  deleteTodo,
  auth,
  getTodo,
  logout,
  signup,
  login,
  addTodo,
  changeTodo,
};
