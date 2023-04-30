import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { MdDashboard } from "react-icons/md"
import { GoPackage } from "react-icons/go"

const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <Outlet/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a><MdDashboard/>Dashboard</a>
          </li>
          <li>
            <a><GoPackage/>Equipment</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Dashboard