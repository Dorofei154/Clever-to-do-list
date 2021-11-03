
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";
import { getFirestore, collection, setDoc,  doc, getDocs, deleteDoc } from "firebase/firestore"







const firebaseConfig = {
  apiKey: "AIzaSyAlUPAIInl5St5K3LJb6iP-CaMOqls2SA8",
  authDomain: "todos-c7419.firebaseapp.com",
  projectId: "todos-c7419",
  storageBucket: "todos-c7419.appspot.com",
  messagingSenderId: "1086643426861",
  appId: "1:1086643426861:web:25954a896ae20144e74aa4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);




const deleteTodo = async (e:any, email:any) =>{
  return deleteDoc(doc(db, email, e));
}


const addTodo = async (text:any, email:any, date: any, header: any, dateTodo:any) => {
  const dateRes = new Date(date);
  await setDoc(doc(db, email, String(Date.now())), {
    header,
    res: text,
    month: dateRes.getMonth(),
    date: dateRes.getDate()
  });
}

const getTodo = async (email:any, arrPush:any, setArrtodo1:any) => {
  const querySnapshot:any = await getDocs(collection(db, email));
  const arr:any = []
  querySnapshot.forEach((doc:any) => {
    arr.push({
       index:doc.id,
       data: doc.data()
     })
   });  
   setArrtodo1(arr)

  return arrPush;
  
}

const signup = (email:any, password:any) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}
const login = async (email:any, password:any) => {
    return signInWithEmailAndPassword(auth, email, password);
}
const logout = () =>{
    return signOut(auth)
}


const useAuth = () =>{
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, (user:any)=>{
            setCurrentUser(user)
        })
        return unsub;
    }, [])
    return currentUser
}

export {deleteTodo, auth, useAuth, getTodo, logout, signup, login, addTodo}