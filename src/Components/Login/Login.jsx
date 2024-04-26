import Header from "../Header/Header";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";



const Login = () => {

    return (
        <div>
            <Header></Header>
            <div className="w-96 mx-auto my-14">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning text-white text-xl">Login</button>
        </div>
        <p className="text-center">Dont have an Account 
           <Link className="text-[blue]" to={'/register'}> Register</Link></p>        
        <hr className="mt-2 bg-[#2d2d2d]"/>
        <div className="flex items-center justify-center gap-2">           
        <IoLogoGoogleplus className="text-4xl"/>
        <FaGithub className="text-3xl"/>
        <FaFacebook className="text-3xl" />
        </div>
      </form>
    </div>
            </div>
            
        </div>
    );
};

export default Login;