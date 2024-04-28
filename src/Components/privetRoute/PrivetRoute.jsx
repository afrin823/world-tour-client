import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";




const PrivetRoute = ({ children }) => {
    const {user} = useAuth();
    const location = useLocation();


    if(!user){
        
        return <div>
               
            <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
          
        </div>
      
    
    }
    return (
        <div>
        
        
            { children }
           
           
        </div>
    );
};

export default PrivetRoute;