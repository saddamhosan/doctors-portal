import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from './../../Hook/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between lg:flex-none">
            <h1 className="text-3xl font-bold text-secondary ">Dashboard</h1>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary btn-outline drawer-button lg:hidden"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <NavLink to="myReview">My Review</NavLink>
            </li>
            <li>
              {admin && (
                <>
                  <NavLink to="allUser">All User</NavLink>
                  <NavLink to="addDoctor">Add Doctor</NavLink>
                  <NavLink to="manageDoctor">Manage Doctor</NavLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;