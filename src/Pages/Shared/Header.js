import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user]=useAuthState(auth)
    const manuItems = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/appointment">Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">Contact Us</NavLink>
        </li>
        <li>
          {user?.uid ? (
            <button onClick={()=>signOut(auth)} className="btn btn-ghost">Log Out</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
        <li>
          {
            user?.uid ? <p>{user.displayName}</p>:''
          }
        </li>
      </>
    );
    return (
      <div className="navbar bg-base-100">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {manuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItems}
          </ul>
        </div>
        
      </div>
    );
};

export default Header;