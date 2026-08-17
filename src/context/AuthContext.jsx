import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
const Context=createContext(null)
export function AuthProvider({children}){const[user,setUser]=useState(null),[profile,setProfile]=useState(null),[loading,setLoading]=useState(true);useEffect(()=>onAuthStateChanged(auth,async u=>{setUser(u);try{setProfile(u?(await getDoc(doc(db,'users',u.uid))).data():null)}catch{setProfile(null)}finally{setLoading(false)}}),[]);return <Context.Provider value={{user,profile,loading}}>{children}</Context.Provider>};export const useAuth=()=>useContext(Context)
