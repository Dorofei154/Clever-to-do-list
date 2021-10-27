
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc,  doc, getDoc } from "firebase/firestore"







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
export const auth = getAuth();

export async function addTodo(e){
  const res = e.target.value
  const docRef = await addDoc(collection(db, "activities"), {
    res,
    index: '1234'
  });
 
}
export function signup(email, password){
    
    return createUserWithEmailAndPassword(auth, email, password);
}
export async function login(email, password){
  const docRef = doc(db, "cities", "LA");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
    return signInWithEmailAndPassword(auth, email, password);
}
export function logout(){
    return signOut(auth)
}


export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
        })
        return unsub;
    }, [])
    return currentUser
}