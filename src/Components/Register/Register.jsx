import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import useAuth from "../../hook/useAuth";


const Register = () => {
    const {createUser} = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm();

      const onSubmit = data => {
        const {email, password}= data
        createUser(email,password)
        .then(result => {
            console.log(result);
        })
      };

    return (
        <div>
            <Header></Header>
            <div className="w-96 mx-auto my-4">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-3xl text-center">Please Register</h2>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your Name" name="name" className="input input-bordered" 
            {...register("Name", { required: true })}
            />
             {errors.Name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" 
            {...register("email", { required: true })}
            />
             {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" 
            {...register("image")}
            />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered"  
            {...register("password", { required: true })}
            /> 
            {errors.password && <span className="text-red-500">This field is required</span>}          
            </div>
            <div className="form-control mt-2">
            <button className="btn btn-warning text-xl text-white">Register</button>
            </div>  
            <div className="justify-between flex items-center">
            <p className="my-3">Already have an Account?</p> 
            <Link className="text-[blue] font-bold" to="/Login"> Please Log In</Link>
            </div>
                    
      </form>
   
    </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;