import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between lg:flex-none">
            <h1 className="text-3xl font-bold text-secondary ">Dashboard</h1>
            <label
              for="my-drawer-2"
              class="btn btn-primary btn-outline drawer-button lg:hidden"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="dashboard/myReview">My Review</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;