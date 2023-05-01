import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { TbPackageOff } from 'react-icons/tb'
import { MdAddCircleOutline } from 'react-icons/md'

const Home = () => {
  const [isClick, setIsClick] = useState(false)
  const [listOfEquipment, setListOfEquipment] = useState([]);
  const url_path = "http://localhost:5173/images/"
  const navigate = useNavigate()

  const fetchAllEquipment = async () => {
    const { data } = await axios.get("http://localhost:3000/equipment");
    setListOfEquipment(data);
  };

  useEffect(() => {
    fetchAllEquipment();
  }, [isClick]);

  const deleteEquipment = async(id) => {
      await axios.delete(`http://localhost:3000/equipment/${id}`).then(() => {
        setIsClick(prev => !prev)
      })
  }

  return (
    <>
      <div className="w-full h-screen">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Equipment Name</th>
              <th>Description</th>
              <th>Stocks</th>
              <th className="flex justify-center align-middle"><button className="text-3xl" onClick={()=> navigate('/dashboard/add')}><MdAddCircleOutline className="text-3xl"/></button></th>
            </tr>
          </thead>
          {listOfEquipment.map((item) => (
          <tbody key={item.id}>
            {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`${url_path + item.image}`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      {
                      item.status 
                      ? 
                      <div className="text-sm opacity-50 text-green-900 font-bold">
                        Available
                      </div>
                      :
                      <div className="text-sm opacity-50 text-red-900 font-bold">
                      Out of Stock
                      </div>
                      }
                    </div>
                  </div>
                </td>
                <td>
                  {item.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.category}
                  </span>
                </td>
                <td>{item.stock}</td>
                <th>
                  <a href="#my-modal-2" className="btn btn-ghost bg-red-500 btn-xs">Delete</a>
                  <div className="modal" id="my-modal-2">
                  <div className="modal-box">
                    <h1 className="font-semibold text-md">{`You want to delete ${item.name}?`}</h1>
                    <h1 className="font-bold text-2xl text-teal-500">{`${item.name}`}</h1>
                    <div className="flex items-center space-x-10 pt-2">
                    <p className="">{`Quantity: ${item.stock}`}</p>
                    <p className="">{`Category: ${item.stock}`}</p>
                    </div>
                    <p className="py-4 text-sm">{item.description}</p>
                    <div className="modal-action">
                    <a href="#" className="btn" onClick={() => deleteEquipment(item.id)}>Confirm</a>
                    <a href="#" className="btn">Close</a>
                    </div>
                  </div>
                </div>
                </th>
              </tr>
          </tbody>
          ))}
          {/* foot */} 
          <tfoot>
            {listOfEquipment.length == 0 && (
            <tr>
            <th></th>
            <th></th>
            <th className="text-teal-500"><TbPackageOff className="inline text-lg"/>No Equipment List</th>
            <th></th>
            <th></th>
          </tr>
          )}
          {listOfEquipment.length >= 5 && (
          <tr>
            <th></th>
            <th>Equipment Name</th>
            <th>Description</th>
            <th>Stocks</th>
            <th></th>
          </tr>
          )}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Home;
