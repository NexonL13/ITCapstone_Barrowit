import React from "react";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GoPackage } from "react-icons/go";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {/* <!-- Page content here --> */}
          <div className="drawer-content">
              
          <Outlet />
          </div>
      
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="default">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="equipment">
                <GoPackage />
                Equipment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
