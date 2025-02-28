import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Header = () => {

  // const [theme, setTheme] = useState('light')
  // useEffect(() => {
  //   localStorage.setItem('theme', theme)
  //   const localTheme = localStorage.getItem('theme')
  //   document.querySelector('html').setAttribute('data-theme', localTheme)
  // }, [theme])

  // const handleToggle = e => {
  //   if(e.target.checked){
  //     setTheme('night')
  //   }else{
  //     setTheme('light')
  //   }
  // }
  // console.log(theme)
  const { logOut, user } = useAuth();
  // console.log(user)

  const links = <>
    <li className="text-xl text-gray-300"><a href="/">Home</a></li>
    <li className="text-xl text-gray-300"><a href="/allTuristSport">AllTourists Spot</a></li>
    {
      user && <li className="text-xl text-gray-300"><a href="/addTuristList">AddTourists Spot</a></li>
    }
    {
      user && <li className="text-xl text-gray-300"><a href="/myList">MyList</a></li>
    }
  </>

  return (
    // <div className="navbar bg-[#0f172a] fixed z-10 shadow px-12 ">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //       </div>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[red] rounded-box w-52">
    //         {links}
    //       </ul>
    //     </div>
    //     <img className=" w-52" src="https://i.ibb.co/yhDWYgz/Screenshot-59-removebg-preview-removebg-preview.png" alt="" />
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       {links}
    //     </ul>
    //   </div>

    // </div>
    <div className="navbar w-[92%] mx-auto fixed z-10 shadow px-12 shadow-lg  text-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img className="w-52" src="https://i.ibb.co/yhDWYgz/Screenshot-59-removebg-preview-removebg-preview.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      {/* navbar end  */}
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
      </div>
    </div>
  );
};



export default Header;