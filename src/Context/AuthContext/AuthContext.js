import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../firebase.config'
export const AuthProvider = createContext()

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const registerEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUserEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            return () => {
                return unsubcribe()
            }
        })
    }, [auth])

    const authInfo = {
        registerEmailPassword,
        signInUserEmailPassword,
        googleLogin,
        user,
        signout,
        updateUserName,
        loading
    }

    return (
        <AuthProvider.Provider value={authInfo} >
            {children}
        </AuthProvider.Provider>
    )
}
