import React, { useState } from "react";
import { Row, Col, Button, Table, Pagination } from "react-bootstrap";

import { Link } from "react-router-dom";

function Clicked0() {
 
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked1() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked2() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked3() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked4() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked5() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
function Clicked6() {
  return (
    <div className="h-full mt-4 mr-4">
      <div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap">
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

      <Table responsive hover>
        <thead>
          <tr>
            <th>Select Drivers</th>
            <th>DriverId</th>
            <th>Driver Name</th>
            <th>Driver Phone No</th>
          </tr>
          <tr>
            <th>xxx</th>
            <th>1233</th>
            <th>xxxx</th>
            <th>123456</th>
          </tr>
        </thead>
      </Table>
      <div className="h-16 bg-gray-100 flex items-center justify-between">
        <div
          style={{
            disply: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Showing 0 to 0 of 0 enteries</span>
        </div>
        <div className="mr-4">
          <Pagination>
            <Pagination.Item>First</Pagination.Item>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
            <Pagination.Item>Last</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
const ContactDrivers = () => {
  const [SelectDropdown, setSelectDropdown] = useState("1");
  const [Msg, setMsg] = useState("Push");
  
  const clicked = (e) => {
    setSelectDropdown(e.target.value);
  };

  const msgtype = (e) => {
    setMsg(e.target.value);
  };
  
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Contact Drivers</p>
        <Link to="/contact-drivers/hisory">
          <Button variant="link" style={{ position: "absolute", right: 12 }}>
            History
          </Button>
        </Link>
      </div>
      <div className="h-full bg-white border border-indigo-600 m-8">
        <Row>
          <Col md={5}>
            <div className="border border-indigo-600 m-4">
              <div
                className="h-auto flex items-center ml-4 justify-between
               font-semibold flex-wrap p-8 "
              >
                <div onChange={msgtype}>
                  <p>Message Type</p>
                  <input type="radio" value="Push" name="msg" /> Push
                  <br />
                  <input type="radio" value="SMS" name="msg" /> SMS
                  <br />
                  <input type="radio" value="SMS and Push" name="msg" /> SMS and
                  Push
                  <br />
                  <hr></hr>
                  <br />
                  <span>Send {Msg}</span>
                  <br /> <span>To</span>
                  <br />
                  <select className="dropdown border-black" onChange={clicked}>
                    <option value="0">Active Drivers</option>
                    {/* <option value="N/A">Active Drivers</option> */}
                    <option value="1">Custom CSv</option>
                    <option value="2">Online Drivers</option>
                    <option value="3">Free Drivers</option>
                    <option value="4">Live Drivers</option>
                    <option value="5">Deactive Drivers</option>
                    <option value="6">Engaged Drivers</option>
                  </select>
                  <br />
                  <br />
                  <input type="file" name="file" />
                  <br />
                  {/* <br /><div onChange={cusstom}></div> */}
                  <Button
                    style={{
                      color: "skyblue",
                      border: "1px solid lightgray",
                      backgroundColor: "skyblue",
                      color: "black",
                    }}
                    variant="link"
                  >
                    Download Sample CSV
                  </Button>
                  <br />
                  <span>Message</span>
                  <br />
                  <textarea
                    style={{ border: "1px solid skyblue", width: "60%" }}
                  ></textarea>
                  <br />
                  <button
                    style={{
                      backgroundColor: "skyblue",
                      borderRadius: "5px",
                      marginLeft: "7%",
                      width: "35%",
                    }}
                  >
                    Send Push
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7} style={{ paddingLeft: 0 }}>
            {SelectDropdown === "0" ? <Clicked0 /> : null}
            {SelectDropdown === "1" ? <Clicked1 /> : null}
            {SelectDropdown === "2" ? <Clicked2 /> : null}
            {SelectDropdown === "3" ? <Clicked3 /> : null}
            {SelectDropdown === "4" ? <Clicked4 /> : null}
            {SelectDropdown === "5" ? <Clicked5 /> : null}
            {SelectDropdown === "6" ? <Clicked6 /> : null}

            {/* <div className="h-full border border-indigo-600 m-4"> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactDrivers;
