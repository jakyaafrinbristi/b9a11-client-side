import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";





const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  
  return (
    <div className="navbar  container mx-auto px-4 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className=" lg:hidden">
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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li>
              <Link to='/dashboard'>DashBoard</Link>
              <ul className="p-2">
                <li><Link to='/add-service'>Add Service</Link></li>
                <li><Link to='/manage-service'>Manage Service</Link></li>
                <li><Link to='/booked'>Booked-Services</Link></li>
                <li><Link to='/service-do'>Service to do</Link></li>
              </ul>
            </li>

          </ul>
        </div>
        <div className='flex-1 '>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-[30%] ' src={logo} alt='' />
            <span className='font-bold'>LuxeLooks</span>
          </Link>
        </div>


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-5 z-[50]">
          <NavLink to='/'
            className={({ isActive }) =>
              isActive ? '  font-bold  mt-2' : 'font-semibold mt-2'
            } id='home'>Home</NavLink>

          <NavLink to='/services'
            className={({ isActive }) =>
              isActive ? '  font-bold  mt-2 ' : 'font-semibold mt-2'
            } id='home'>Services</NavLink>
<div className="dropdown cursor-pointer ">
  <div tabIndex={0} role="button" className="mt-2 font-bold">DashBoard </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44  shadow ">
  <div className="flex justify-between">
  <div>
  <li><Link to='/add-service'>Add Service</Link></li>
  <li><Link to='/manage-service'>Manage Service</Link></li>
  </div>
  <div>
  <li><Link to='/booked'>Booked-Services</Link></li>
  <li><Link to='/service-do'>Service to do</Link></li>
  </div>
  </div>

  </ul>
</div>

        </ul>
      </div>
      <div className="navbar-end ">
      {!user && (<div >
      <Link  to='/login' className="relative px-6 py-3 font-bold text-black group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
<span className="relative">Login</span>
</Link>
      </div>)
      }
        {user &&(
      <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar '
            >
              <div className='w-10 rounded-full' title={user?.displayName}>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
              </ul>
            
            </div>
            
            
     )}
      </div>
 
      
    </div>
    
  );
};

export default Navbar;



