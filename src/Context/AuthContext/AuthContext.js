import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { createContext } from 'react'
import { app } from '../../firebase.config'
export const AuthProvider = createContext()

export const AuthContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const registerEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUserEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        registerEmailPassword,
        signInUserEmailPassword,
        googleLogin
    }

    return (
        <AuthProvider.Provider value={authInfo} >
            {children}
        </AuthProvider.Provider>
    )
}
