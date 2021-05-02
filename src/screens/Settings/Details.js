import React from "react";
import { Button, Modal, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import favicon from "../../assets/Favicon/favicon.png";
function AddImage(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-widthdetail"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-blue-400">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=""
          style={{ marginLeft: "35%" }}
        >
          {/* <div > */}
          Add Image
          {/* </div> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Type</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              {" "}
              <select
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2
                "
              >
                <option value="0">Active Drivers</option>
                {/* <option value="N/A">Active Drivers</option> */}
                <option value="1">Custom CSv</option>
                <option value="2">Online Drivers</option>
                <option value="3">Free Drivers</option>
                <option value="4">Live Drivers</option>
                <option value="5">Deactive Drivers</option>
                <option value="6">Engaged Drivers</option>
              </select>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Key</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                type="text"
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Image</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input type="file"></input>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button style={{ backgroundColor: "orange" }}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ViewEditModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-widthdetail"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-gray-400">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=""
          style={{ marginLeft: "35%" }}
        >
          {/* <div > */}
          VIEW/EDIT IMAGE
          {/* </div> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="flex justify-center">
            <span><img src={favicon} alt="" />
                     </span>
          </div>
          <div className="flex justify-center">
          <button className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
          style={{ backgroundColor: "#ff6600" }}>Edit Image
        </button></div>
      
        </div>
      </Modal.Body>
      </Modal>
  );
}
function ViewEditIosModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-widthdetail"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-gray-400">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=""
          style={{ marginLeft: "35%" }}
        >
          {/* <div > */}
          VIEW/EDIT IMAGE
          {/* </div> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="flex justify-center">
            <span><img src={favicon} alt="" />
                     </span>
          </div>
          <div className="flex justify-center">
          <button className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
          style={{ backgroundColor: "#ff6600" }}>Edit Image
        </button></div>
      
        </div>
      </Modal.Body>
      </Modal>
  );
}


function Details() {
  const [modalShow, setModalShow] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [editios, setEditIos] = React.useState(false);
  const [addimg, setAddimg] = React.useState(false);
  const [app, setApp] = React.useState(false);
  const [ios, setIos] = React.useState(false);

  function StateModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-widthdetail"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="bg-blue-400">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className=""
            style={{ marginLeft: "35%" }}
          >
            {/* <div > */}
            Success
            {/* </div> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="flex justify-center">
              <h1>
                <b>Vehicle Edited Sucessfully</b>
              </h1>
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={props.onHide}>Ok</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  const AndroidApp = () => {
    setApp(!app);
  };
  const IosApp = () => {
    setIos(!ios);
  };

  return (
    <div>
      <div>
        <Link to="/vehiclefare-settings">
          <button
            className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Back
          </button>
        </Link>
      </div>
      <div className="h-full m-4 border border-indigo-600 mt-16">
        <label className="m-4 text-base font-semibold text-lg	">
          Enable/Disable
        </label>
        <button
          onClick={() => {
            setModalShow(true);
            setState(!state);
          }}
          className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
          style={{ backgroundColor: "#ff6600" }}
        >
          {state ? "Enable" : "Disable"}
        </button>
        <StateModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="h-full m-4  mt-16">
        <label className="m-4 text-base font-semibold text-2xl	 flex justify-center	">
          Edit Vehicle Type
        </label>
      </div>
      <div className="h-full m-4 border border-indigo-600 mt-16">
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Vehicle Name</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          <label className="ml-3 mt-3 font-semibold">Display Order</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Max People</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Reverse Bidding Enabled
          </label>
        </div>
        <div className="font-semibold flex space-x-20">
          <div className="ml-3">
            <input type="radio" value="Yes" name="msg" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="msg" />
            <label>No</label>
          </div>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Destination Mandatory
          </label>
        </div>
        <div className="font-semibold flex space-x-20">
          <div className="ml-3">
            <input type="radio" value="Yes" name="des" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="des" />
            <label>No</label>
          </div>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Fare Mandatory</label>
        </div>
        <div className="font-semibold flex space-x-20">
          <div className="ml-3">
            <input type="radio" value="Yes" name="Fare" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="Fare" />
            <label>No</label>
          </div>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Waiting Charges Applicable
          </label>
        </div>
        <div className="font-semibold flex space-x-20">
          <div className="ml-3">
            <input type="radio" value="Yes" name="charges" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="charges" />
            <label>No</label>
          </div>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Customer Notes Enabled
          </label>
        </div>
        <div className="font-semibold flex space-x-20">
          <div className="ml-3">
            <input type="radio" value="Yes" name="notes" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" value="No" name="notes" />
            <label>No</label>
          </div>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Convenience Customer Waiver
          </label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">
            Convenience Driver Cut
          </label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Commision(%)</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Fixed Commision</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Convenience Charge</label>
        </div>
        <div className="ml-2 mt-0">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div className="mb-16">
          <div>
            <label className="ml-3 mt-3 font-semibold">
              Min Driver Balance
            </label>
          </div>
          <div className="ml-2 mt-0">
            <input
              type="text"
              className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
            ></input>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center">
          <button
            className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Cancel
          </button>
          <button
            className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Change
          </button>
        </div>
      </div>
      <div className="h-full m-4  mt-16">
        <label className="m-4 text-base font-semibold text-2xl	 flex justify-center	">
          Edit Fare Structure
        </label>
      </div>
      <div className="h-full m-4 border border-indigo-600 mt-16">
        <label className="m-4 text-base font-semibold text-lg	">
          Fare Structue
        </label>
      </div>
      <div className="h-full m-4  mt-16">
        <label className="m-4 text-base font-semibold text-2xl	 flex justify-center	">
          Vehicle Type Images
        </label>
      </div>
      <div className="h-full m-4 border border-indigo-600 mt-16">
        <button
          onClick={() => {
            setAddimg(true);
          }}
          className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
          style={{ backgroundColor: "#ff6600", right: "12" }}
        >
          Add
        </button>
        <AddImage show={addimg} onHide={() => setAddimg(false)} />
        <div
          className="h-full m-4  mt-16 hover:bg-gray-700"
        
        >
          <label className="m-4 text-base font-semibold text-2xl	 flex justify-center	"   onClick={AndroidApp}>
            Android App
          </label>
          {app ? (
            <div>
              <div className="ml-4 mr-4  mt-0 flex justify-center">
                <Table responsive hover size="sm" style={{ width: 1000 }}>
                  <thead>
                    <tr>
                      <th>Image Type</th>
                      <th>Upload Images</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tab Normal</td>
                      <td>
                        <img src={favicon} alt="" />
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            setEdit(true);
                          }}
                          className="ml-4 text-center shodow-xl w-32 h-8 text-white rounded focus:outline-none"
                          style={{ backgroundColor: "#ff6600" }}
                        >
                          View/Edit Image{" "}
                        </button>
                        <ViewEditModal
                          show={edit}
                          onHide={() => setEdit(false)}
                        />

                        <button
                          className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
                          style={{ backgroundColor: "#ff6600" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ) : null}
        </div>
        <div className="h-full m-4  mt-16 hover:bg-gray-400" >
          <label className="m-4 text-base font-semibold text-2xl	 flex justify-center" onClick={IosApp}>
            Ios App
          </label>
          {ios ? (
            <div>
              <div className="ml-4 mr-4  mt-0 flex justify-center">
                <Table responsive hover size="sm" style={{ width: 1000 }}>
                  <thead>
                    <tr>
                      <th>Image Type</th>
                      <th>Upload Images</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tab Normal</td>
                      <td>
                        <img src={favicon} alt="" />
                      </td>

                      <td>
                        <button
                           onClick={() => {
                            setEditIos(true);
                          }}
                       
                          className="ml-4 text-center shodow-xl w-32 h-8 text-white rounded focus:outline-none"
                          style={{ backgroundColor: "#ff6600" }}
                        >
                          View/Edit Image{" "}
                        </button>
                        <ViewEditIosModal
                          show={editios}
                          onHide={() => setEditIos(false)}
                        />

                        <button
                          className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
                          style={{ backgroundColor: "#ff6600" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="h-full m-4  mt-16">
        <label className="m-4 text-base font-semibold text-2xl	 flex justify-center	">
          Edit Dispatcher Details
        </label>
      </div>
      <div className="h-full m-4 border border-indigo-600 mt-16">
        <div>
          {" "}
          <label className="ml-3 mt-3 font-semibold">Request radius</label>
        </div>
        <div className="ml-2 mt-0 mb-24">
          <input
            type="text"
            className=" focus:outline-none rounded h-8 w-96 border border-gray-400 pl-2    text-gray-700 focus:ring-2 focus:ring-blue-600"
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Cancel
          </button>
          <button
            className="m-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
