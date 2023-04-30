import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphContent = () => {
  const data = [
    {
      name: "Monday",
      Returned: 145,
      Borrowed: 75,
      amt: 220,
    },
    {
      name: "Tuesday",
      Returned: 300,
      Borrowed: 139,
      amt: 439,
    },
    {
      name: "Wednesday",
      Returned: 65,
      Borrowed: 45,
      amt: 100,
    },
    {
      name: "Thurdsday",
      Returned: 130,
      Borrowed: 20,
      amt: 150,
    },
    {
      name: "Friday",
      Returned: 60,
      Borrowed: 70,
      amt: 130,
    },
    {
      name: "Saturday",
      Returned: 100,
      Borrowed: 25,
      amt: 125,
    },
    {
      name: "Sunday",
      Returned: 62,
      Borrowed: 63,
      amt: 125,
    },
  ];
  return (
    <>
    <div id="main-content" class="flex w-full align-middle justify-center">
            {/* <!--"Container" for the graphs"--> */}
              {/* <!--Graph Card--> */}
             
              <div className="p-5">
              <div className="border-b p-2">
                <h5 className="font-bold text-black">Graph</h5>
              </div>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Borrowed" fill="#00b7c7" />
                <Bar dataKey="Returned" fill="#5ad45a" />
              </BarChart>
              </div>
              {/* <!--/Graph Card--> */}

              {/* <!--Table Card--> */}
              <div className="p-3 w-full">
                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Table</h5>
                </div>
                <div className="p-5">
                  <table className="w-full p-5 text-gray-700">
                    <thead>
                      <tr>
                        <th className="text-left text-blue-900">Equipment Name</th>
                        <th className="text-left text-blue-900">Description</th>
                        <th className="text-left text-blue-900">Stocks</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Fire Extuingisher</td>
                        <td>Desc1..</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>Tent</td>
                        <td>Desc2</td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td>Monoblock Chair</td>
                        <td>Desc3</td>
                        <td>25</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="py-2">
                    <a href="#">See More Equipments...</a>
                  </p>
                </div>
              </div>
              {/* <!--/table Card--> */}
            </div>
      </>
  );
};

export default GraphContent;
