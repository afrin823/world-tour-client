import { GoogleAuthProvider, GithubAuthProvider,TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebaseConfig";



export const AuthContext = createContext(null);
//social auth providers

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();


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
     //google log in
     const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
     }
     //Github log in
     const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
     }
     //Twitter log in
     const twitterLogIn = () => {
        return signInWithPopup(auth, twitterProvider)
     }
     
     // sign out
     const logOut = () => {
        setUser(null)
        signOut(auth)
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
        signInUser,
        googleLogIn,
        githubLogIn,
        logOut,
        user,
        twitterLogIn
    }

    return (
        <AuthContext.Provider value={AllValues}>
           {children}
        
        </AuthContext.Provider>
    );
};

export default AuthProvider;