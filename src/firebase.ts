
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";
import { getFirestore, collection, setDoc,  doc, getDocs } from "firebase/firestore"







const firebaseConfig = {
  apiKey: "AIzaSyCI6MezVMUr-iHEIpCJgGLPz7BdZ-Cwezs",
  authDomain: "tods-5806c.firebaseapp.com",
  projectId: "tods-5806c",
  storageBucket: "tods-5806c.appspot.com",
  messagingSenderId: "275074014613",
  appId: "1:275074014613:web:cf5defa5970090a2556a9c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);

export async function addTodo(e:any, email:any, date: any, setArrtodo1:any, arrPush:any){
  const res = e.target.value;
  const dateRes = new Date(date);
  
  await setDoc(doc(db, email, String(Date.now())), {
    res,
    month: dateRes.getMonth(),
    date: dateRes.getDate()
  });
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

export async function getTodo(email:any, arrPush:any, setArrtodo1:any){
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

export function signup(email:any, password:any){
    return createUserWithEmailAndPassword(auth, email, password);
}
export async function login(email:any, password:any){
    return signInWithEmailAndPassword(auth, email, password);
}
export function logout(){
    return signOut(auth)
}


export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, (user:any)=>{
            setCurrentUser(user)
        })
        return unsub;
    }, [])
    return currentUser
}