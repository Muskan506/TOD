import React, { useState } from "react";
import { Col, Row,Form } from "react-bootstrap";

function Customcsv() {
  return (
    <>
      <div className="m-4">
        <input type="file"></input>
      </div>
      <button
        className="focus:outline-none"
        style={{
          color: "skyblue",
          //   border: "1px solid lightgray",
          //   backgroundColor: "skyblue",
          color: "blue",
          margin: "1%",
          marginLeft: "4%",
        }}
        variant="link"
      >
        Download Sample CSV
      </button>
    </>
  );
}
function ContactCustomers() {
  const [msg, setMsg] = useState("Push");
  const [SelectDropdown, setSelectDropdown] = useState("1");

  const msgtype = (e) => {
    setMsg(e.target.value);
  };
  const clicked = (e) => {
    setSelectDropdown(e.target.value);
  };

  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Contact Customers</p>
      </div>
      <Row className="m-4">
        <Col className="bg-white">
          <div className="flex shadow-sm h-16 items-center justify-center">
            <p className="font-bold text-2xl">Message Type</p>
          </div>
          <div className="h-auto flex items-center ml-40 justify-between p-4 font-semibold">
            <div onChange={msgtype}>
              <div className="m-3">
                <input type="radio" value="Push" name="msg" /> Push
              </div>
              <div className="m-3">
                <input type="radio" value="Email" name="msg" /> Email
              </div>
              <div className="m-3">
                <input type="radio" value="SMS" name="msg" /> SMS
              </div>
              <div className="m-3">
                <input type="radio" value="SMS and Push" name="msg" /> SMS and
                Push
              </div>
            </div>
          </div>
        </Col>
        <Col className="bg-gray-100">
          <div className="flex shadow-sm h-16 items-center justify-center">
            <p className="font-bold text-2xl">Send {msg}</p>
          </div>
          <div className="font-semibold flex justify-center m-4 mr-4">
            <p>To</p>
          </div>

          {SelectDropdown != "1" ? (
            <div>
              <div className="font-bold">
                <p>City</p>
              </div>
              <div className="mb-4">
                <select
                  className="dropdown h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                >
                  {/* //  onChange={clicked} > */}
                  {/* <option value="0">Active Drivers</option> */}
                  {/* class="focus:outline-none focus:ring focus:border-blue-300 ..." /> */}

                  {/* <option value="N/A">Active Drivers</option> */}
                  <option value="1">All city</option>
                  <option value="2">skp</option>
                  <option value="3">sgnr</option>
                  <option value="4">delhi</option>
                  <option value="5">hmh</option>
                  <option value="6">raj</option>
                </select>
              </div>
            </div>
          ) : null}
          <select
            className="dropdown h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
            onChange={clicked}
          >
            {/* class="focus:outline-none focus:ring focus:border-blue-300 ..." /> */}

            {/* <option value="N/A">Active Drivers</option> */}
            <option value="1" selected>
              Custom CSv
            </option>
            <option value="2">All Users</option>
            <option value="3">IOS users</option>
            <option value="4">Android Users</option>
          </select>
          {/* <label>all users 36</label> */}

          {SelectDropdown === "1" ? <Customcsv /> : null}

          {msg != "Email" ? (
            <div>
              <div className="flex justify-center m-4 font-semibold">
                <p>Message</p>
              </div>
              <div className="m-2">
                <input
                  type="text"
                  className=" focus:outline-none rounded h-20 w-full border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
                ></input>
              </div>
              <div className="flex justify-center">
                <button
                  className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
                  style={{ backgroundColor: "#ff6600" }}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center font-semibold">
                <p>Subject</p>
              </div>
              <div className="m-2">
                <input
                  type="text"
                  className=" focus:outline-none rounded h-10 w-full border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
                ></input>
              </div>
            </div>
          )}
        </Col>
      </Row>
      {msg === "Email" ? (
        <>
          <div className="m-4">
            {/* <div className="font-bold ml-8">Message</div><div className="m-8"> */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} className="w-full" />
            </Form.Group>
            {/* </div> */}
          </div>
          <div className="flex justify-center">
            <button
              className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
              style={{ backgroundColor: "#ff6600" }}
            >
              Send
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ContactCustomers;
