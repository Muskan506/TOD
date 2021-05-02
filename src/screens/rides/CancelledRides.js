import { TextField } from "@material-ui/core";
import React from "react";
import { Pagination, Table } from "react-bootstrap";

function CancelledRides() {
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Cancelled Rides</p>
      </div>

      <div className="filter shadow-md">
        <form>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginLeft: 40 }}
          />
          <button
            className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Search
          </button>
        </form>
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
          <Table responsive hover size="sm" style={{ width: 1400 }}>
            <thead>
              <tr>
                <th>Engagement ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Pickup</th>
                <th>Drop</th>
                <th>Pickup Time</th>
                <th>Drop Time</th>
                <th>Request Time</th>
                <th>Reason</th>
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

export default CancelledRides;
