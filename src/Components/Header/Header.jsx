import { Link } from "react-router-dom";

const Header = () => {
     
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
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
             
                 <div className="w-10 rounded-full">
                 <Link to={`/Login`}>
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> 
                </Link>               
              </div>
            
            </div>
          <Link to="/login">
          <button className="btn bg-[#f6b93b] text-2xl text-white" >Log In</button>
          </Link>
          
        </div>
      </div>
    );
};

export default Header;