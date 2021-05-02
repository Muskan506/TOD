import React from "react";
import { Nav, Pagination, Tab, Table } from "react-bootstrap";

const AllDrivers = () => {
  return (
    <div>
      <div className="flex-wrap h-20 flex items-center">
        <button
          className="font-bold text-base text-center shadow-xl w-28 h-9  mt-4 text-white rounded focus:outline-none "
          style={{ backgroundColor: "#ff6600" }}
        >
          Export CSV
        </button>
      </div>
      <div className="h-full border border-indigo-600 mt-4">
        <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap ">
          <div className="flex">
            <p className="pr-2">Display</p>
            <select className="h-7 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
              <option value="0">10</option>
              <option value="1">25</option>
              <option value="2" selected>
                50
              </option>
              <option value="3">100</option>
            </select>
            <p className="pl-2">drivers per page</p>
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
          <Table responsive hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>DriverName</th>
                <th>City</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Registered on</th>
                <th>Vehicle Number</th>
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
                <td>Otto</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="h-16 bg-gray-100 flex items-center justify-between flex-wrap">
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
};
const TaxiDrivers = () => {
  return (
    <div>
      <div className="flex-wrap h-20 flex items-center">
        <button
          className="font-bold text-base text-center shadow-xl w-28 h-9  mt-4 text-white rounded focus:outline-none "
          style={{ backgroundColor: "#ff6600" }}
        >
          Export CSV
        </button>
      </div>
      <div className="h-full border border-indigo-600 mt-4">
        <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap ">
          <div className="flex">
            <p className="pr-2">Display</p>
            <select className="h-7 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
              <option value="0">10</option>
              <option value="1">25</option>
              <option value="2" selected>
                50
              </option>
              <option value="3">100</option>
            </select>
            <p className="pl-2">drivers per page</p>
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
          <Table responsive hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>DriverName</th>
                <th>City</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Registered on</th>
                <th>Vehicle Number</th>
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
                <td>Otto</td>
              </tr>
              <tr>
                <td>Last Ride On</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Last Ride On</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Last Ride On</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="h-16 bg-gray-100 flex items-center justify-between flex-wrap">
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
};
function DeactivatedDrivers() {
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Deactivated Drivers</p>
      </div>
      <div className="h-20 shadow-lg m-4  border border-indigo-600">
        <Tab.Container defaultActiveKey="first">
          <div>
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="font-bold text-base text-center shadow-xl focus:outline-none ml-4 mt-3 border border-indigo-600 w-48"
                >
                  All Driver
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="font-bold text-base text-center shadow-xl focus:outline-none mt-3  border border-indigo-600 w-48"
                >
                  Taxi Driver
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AllDrivers />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <TaxiDrivers />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default DeactivatedDrivers;
