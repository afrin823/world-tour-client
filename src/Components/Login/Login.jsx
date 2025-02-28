import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import SocialLogIn from "../Register/SocialLogIn";



const Login = () => {
    const { signInUser } = useAuth();


    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
      const { email, password } = data;

      signInUser(email, password)
      .then(result => {
        if(result.user){
            navigate(form);
        }
    })
    };

    return (
        <div className="py-36">
        
            <div className=" w-96 mx-auto ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}          
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" 
          {...register("password", { required: true })}           
          />
          {errors.password && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning text-white text-xl">Login</button>
        </div>
        <p className="text-center">Dont have an Account 
           <Link className="text-[blue]" to={'/register'}> Register</Link></p>        
        <SocialLogIn></SocialLogIn>
      </form>
    
    </div>
            </div>
      
        </div>
        
    );
};

export default Login;