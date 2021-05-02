import React from "react";
import { Pagination, Table } from "react-bootstrap";

function ScheduledRides() {
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Scheduled Rides</p>
      </div>
      <div className="flex items-center h-20 ml-10 mt-4 font-bold">
        <p>Vehicle Type</p>
        <select className="focus:outline-none rounded h-7 border-2 border-gray-400 w-40 pl-1 ml-2">
          <option value="1" selected>
            ALL
          </option>
          <option value="2">TAXI</option>
          <option value="3">TAXI POOL</option>
          <option value="4">TAXI DELIVERY</option>
        </select>
      </div>
      <div className="h-full border border-indigo-600 m-4">
        <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap ">
          <div className="flex">
            <p className="pr-2">Show</p>
            <select className="h-7 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
              <option value="0">10</option>
              <option value="1">25</option>
              <option value="2" selected>
                50
              </option>
              <option value="3">100</option>
            </select>
            <p className="pl-2">entries</p>
          </div>

          <div className="flex">
            <p className="pr-2">Search:</p>
            <input
              type="text"
              className="focus:outline-none rounded h-8 w-52 border border-gray-400 pl-2 mr-4 text-gray-700 focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <div>
          <Table responsive hover size="sm">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Phone No</th>
                <th>Driver ID</th>
                <th>Pickup</th>
                <th>Drop</th>
                <th>Pickup Time</th>
                <th>Driver Notes</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Ride On</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="h-16 bg-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-semibold text-sm ml-4">
              Showing 1 to 37 of 37 entries
            </p>
          </div>
          <div className="mr-4">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledRides;
