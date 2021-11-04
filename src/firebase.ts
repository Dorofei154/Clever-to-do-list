import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0ezzhrIKRD7z7xewYofp5_dirK8kvix4",
  authDomain: "todo-a31ee.firebaseapp.com",
  projectId: "todo-a31ee",
  storageBucket: "todo-a31ee.appspot.com",
  messagingSenderId: "1093155579406",
  appId: "1:1093155579406:web:3621831daff5bd914b3e5f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

const deleteTodo = async (e: any, email: any) => {
  return deleteDoc(doc(db, email, e));
};

const addTodo = async (
  text: string,
  email: string,
  date: any,
  header: string,
  index: any
) => {
  const dateRes = new Date(date);
  await setDoc(doc(db, email, index), {
    header,
    res: text,
    month: dateRes.getMonth(),
    date: dateRes.getDate(),
  });
};

const getTodo = async (email: string) => {
  const querySnapshot: any = await getDocs(collection(db, email));
  const arr: { index: string; data: { id: string; text: string } }[] = [];
  querySnapshot.forEach((doc: any) => {
    arr.push({
      index: doc.id,
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

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};

export { deleteTodo, auth, useAuth, getTodo, logout, signup, login, addTodo };
