import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebaseConfig";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    //create users
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const AllValues = {
        createUser
    }

    return (
        <AuthContext.Provider value={AllValues}>
           {children}
        
        </AuthContext.Provider>
    );
};

export default AuthProvider;