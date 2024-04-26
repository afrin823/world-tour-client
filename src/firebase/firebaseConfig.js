import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAj9YqkCcwiemtqTRVU3ZvpP4IWnzqcuw",
  authDomain: "full-stact-projct.firebaseapp.com",
  projectId: "full-stact-projct",
  storageBucket: "full-stact-projct.appspot.com",
  messagingSenderId: "759642502726",
  appId: "1:759642502726:web:a658eddf3a3ff5e1ae3c47"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;