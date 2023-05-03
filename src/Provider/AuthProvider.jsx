import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    
    const googleProviderSingIn=new GoogleAuthProvider()
const gitProviderSingIn= new GithubAuthProvider()
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const singIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const googleProvider=()=>{
    return signInWithPopup(auth,googleProviderSingIn)
}
const gitProvider=()=>{
    return signInWithPopup(auth,gitProviderSingIn)
}
const logOut=()=>{
return signOut(auth)
}


useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
        console.log('logged in user inside auth state observe', loggedUser);
        setUser(loggedUser)
    })
    return()=>{
        unsubscribe();
    }
},[])


    const authInfo = {
        user,
        createUser,
        singIn,
        googleProvider,
        gitProvider,
        logOut,

    }


    return (
        <>

            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>

        </>
    );
};

export default AuthProvider;