
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
export const auth = getAuth(app);



export async function deleteTodo(e:any, email:any){
  console.log(email, e)
  return deleteDoc(doc(db, email, e));
}


export async function addTodo(e:any, email:any, date: any, setArrtodo1:any, arrPush:any){
  const res = e.target.value;
  const dateRes = new Date(date);
  console.log(db, email)
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
  return arrPush
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