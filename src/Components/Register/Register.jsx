import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    
    return (
        <div>
            <Header></Header>
            <div className="w-96 mx-auto my-4">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            <h2 className="text-3xl text-center">Please Register</h2>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your Name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />           
            </div>
            <div className="form-control mt-2">
            <button className="btn btn-warning text-xl text-white">Register</button>
            </div>  
            <p className="text-center my-3">Already have an Account? <Link className="text-[blue] font-bold" to="/Login"> Log In</Link></p>           
      </form>
   
    </div>
        </div>
    
        </div>
    );
};

export default Register;