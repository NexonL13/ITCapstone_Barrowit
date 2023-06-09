import React from "react";
import { Link } from "react-router-dom"
import { CiMenuBurger} from "react-icons/ci"

const Header = () => {
  return (
    <>
      <div className="navbar bg-gray-100">
        <div className="flex-1">
        <label htmlFor="my-drawer" className="btn bg-white border-none drawer-button text-gray-900 text-lg hover:bg-grey-600 hover:text-white"><CiMenuBurger/></label>
          <a className="btn btn-ghost normal-case text-xl">BarrowIT</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/40" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
