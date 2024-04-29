import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Header = () => {

    const {logOut, user} = useAuth();
    console.log(user)
     
    const links = <>
    <li className="text-xl text-white"><a href="/">Home</a></li>
    <li className="text-xl text-white"><a href="/allTuristSport">AllTourists Spot</a></li>
    <li className="text-xl text-white"><a href="/addTuristList">AddTourists Spot</a></li>
    <li className="text-xl text-white"><a href="/myList">MyList</a></li>
    </>

    return (
        <div className="navbar bg-[#282828] shadow ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[red] rounded-box w-52">
            {links}
            </ul>
          </div>
          <img className=" w-60" src="https://i.ibb.co/7yJbh38/Screenshot-56.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
              {
                user? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-24 rounded-full">
                 <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}   />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button className="btn btn-sm btn-ghost">{user?.displayName || "user name not found"}</button>
                </li>
                <li>
                  <button onClick={logOut}
                  className="btn btn-warning text-white">logout</button>
                </li>
                </ul>
              </div>
              :
              <Link to={'/login'}><button className="btn btn-warning text-white">LogIn</button></Link>
              };            
            </div>
        </div>
     
    );
};

export default Header;