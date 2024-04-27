import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebaseConfig";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    
    //create users
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
     //sign in user
     const signInUser = (email, password) => {
       return  signInWithEmailAndPassword(auth, email, password)
     }
    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            }
          });
    }, [])

    const AllValues = {
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={AllValues}>
           {children}
        
        </AuthContext.Provider>
    );
};

export default AuthProvider;