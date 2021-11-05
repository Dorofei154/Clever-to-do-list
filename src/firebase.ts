import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  User, 
} from "firebase/auth";
import {  useEffect, useState } from "react";
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

const deleteTodo = async (e: string, email: string) => {
  return deleteDoc(doc(db, email, e));
};

const addTodo = async (
  text:string, email:string, date: string, header: string, index:string
) => {

  const dateRes = new Date(date);
  await setDoc(doc(db, email, index), {
    header,
    res: text,
    done:false,
    month: dateRes.getMonth(),
    date: dateRes.getDate(),
  });
};

const changeTodo = async (email:string,index:string, done:boolean) =>{
  await updateDoc(doc(db, email, index), {
    boolean: !done,
  });
}

const getTodo = async (email: string) => {
  const querySnapshot: any = await getDocs(collection(db, email));
  const arr:  { id: string; data: { id: string; text: string; header: string; date:moment.Moment | number; done:boolean; month :moment.Moment | number }; }[] = [];
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

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};

export { deleteTodo, auth, useAuth, getTodo, logout, signup, login, addTodo, changeTodo };
