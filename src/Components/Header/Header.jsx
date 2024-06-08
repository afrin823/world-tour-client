import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";

const Header = () => {

  const [theme, setTheme] = useState('light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle = e => {
    if(e.target.checked){
      setTheme('night')
    }else{
      setTheme('light')
    }
  }
// console.log(theme)
  const { logOut, user } = useAuth();
  // console.log(user)

  const links = <>
    <li className="text-xl text-white"><a href="/">Home</a></li>
    <li className="text-xl text-white"><a href="/allTuristSport">AllTourists Spot</a></li>
    <li className="text-xl text-white"><a href="/addTuristList">AddTourists Spot</a></li>
    <li className="text-xl text-white"><a href="/myList">MyList</a></li>
  </>

  return (
    <div className="navbar bg-[#0f172a] fixed z-10 shadow px-12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[red] rounded-box w-52">
            {links}
          </ul>
        </div>
        <img className=" w-52" src="https://i.ibb.co/yhDWYgz/Screenshot-59-removebg-preview-removebg-preview.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
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
        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <input 
          onChange={handleToggle}
          type="checkbox"
            className="toggle theme-controller" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
    </div>

  );
};

export default Header;