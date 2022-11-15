import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

const createUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
return signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
return signOut(auth);
};

const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
}

useEffect(() => {
const unsubscibe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
});
 return () => unsubscibe();
}, []);

    const authInfo = {createUser, signIn, user, logOut, updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;