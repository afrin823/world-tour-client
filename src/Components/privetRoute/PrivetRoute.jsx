import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";




const PrivetRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <h1 className="text-2xl text-red-600">Loading</h1>
    }


    if(user){
        
    return children
      
    
    }


    return  <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
  
};
export default PrivetRoute;