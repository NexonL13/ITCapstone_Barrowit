import React from "react";
import { AiFillCaretUp, AiOutlineDown } from "react-icons/ai";
import { FaExchangeAlt, FaServer, FaUsers, FaUserPlus } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";
import GraphContent from "./GraphContent";

const DashboardContent = () => {
  return (
    <>
    <div className="dropdown dropdown-start p-2 ps-10">
        <label tabIndex={0} className="btn btn-ghost rounded-btn shadow-md px-5">Month<AiOutlineDown className="mx-5"/></label>
        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>March</a></li> 
          <li><a>April</a></li>
          <li><a>May</a></li> 
          <li><a>June</a></li>
        </ul>
      </div>
    <div className="flex flex-col h-screen">
      <div
        id="dash-content"
        className="grid grid-cols-4"
      >
        <div className="w-full lg:w-full">
          <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-2 m-2 md:mx-10 md:my-6">
            <div className="flex flex-col items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-gray-300">
                  <TbPackages />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-3xl">
                  1000{" "}
                  <span className="text-green-500">
                    <AiFillCaretUp />
                  </span>
                </h3>
                <h5 className="font-bold text-gray-500">Total Equipment</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-full">
          <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-2 m-2 md:mx-10 md:my-6">
            <div className="flex flex-col items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-gray-300">
                  <FaUsers />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-3xl">
                  249{" "}
                  <span className="text-orange-500">
                    <FaExchangeAlt />
                  </span>
                </h3>
                <h5 className="font-bold text-gray-500">Total Users</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-full">
          <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-2 m-2 md:mx-10 md:my-6">
            <div className="flex flex-col items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-gray-300">
                  <FaUserPlus />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-3xl">
                  2{" "}
                  <span className="text-yellow-600">
                    <AiFillCaretUp />
                  </span>
                </h3>
                <h5 className="font-bold text-gray-500">New Users</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-full">
          <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-2 m-2 md:mx-10 md:my-6">
            <div className="flex flex-col items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-gray-300">
                  <FaServer />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-3xl">152 days</h3>
                <h5 className="font-bold text-gray-500">Server Uptime</h5>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <GraphContent/>
    </div>
    </>
  );
};

export default DashboardContent;
