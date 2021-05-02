import React from 'react'
import { Button,Tab,Nav, Pagination, Table, Modal,Row,Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Enabled = () => {
    return (
      <div>
        <div className="h-full border border-indigo-600 mt-16">
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
          <div className="ml-4 mr-4  mt-0">
            <Table responsive hover size="sm" style={{ width: 1200 }}>
              <thead>
                <tr>
                <th>Vehicle Name</th>
                  <th>Vechile Type</th>
                  <th>Ride Type</th>
                  <th>Max People</th>
                  <th>Dastination Mandatory</th>
                  <th>Commision</th>
                  <th>Enable/Disable</th>
                  <th>Action</th>
                 </tr>
              </thead>
              <tbody>
              <tr>
                <td>2</td>
                <td>fgrg</td>
                <td>sdsfg@.com</td>
                <td>fgfhh</td>
                <td>cvdvv</td>
                <td>fgrg</td>
                <td>fgrg</td>
                

                <td>
                <Link to="/vehiclefare-settings/details">
      
                
                  <button  className="ml-4 text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none"
            style={{ backgroundColor: "#ff6600" }}
          >Details</button>   </Link>
                </td></tr>
           </tbody>
            </Table>
          </div>
          <div className="flex justify-between m-4 items-center">
            <div>
              <p className="text-gray-700 font-semibold text-sm">
                Showing 1 to 37 of 37 entries
              </p>
            </div>
            <div>
              <Pagination>
                <Pagination.Item>First</Pagination.Item>
                <Pagination.Item>Previous</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
                <Pagination.Item>Last</Pagination.Item>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const Disabled = () => {
    return (
      <div>
        <div className="h-full border border-indigo-600 mt-16">
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
          <div className="ml-4 mr-4  mt-0">
            <Table responsive hover size="sm" style={{ width: 1200 }}>
              <thead>
                <tr>
                  <th>Vehicle Name</th>
                  <th>Vechile Type</th>
                  <th>Ride Type</th>
                  <th>Max People</th>
                  <th>Dastination Mandatory</th>
                  <th>Commision</th>
                  <th>Enable/Disable</th>
                  <th>Action</th>
                  </tr>
              </thead>
            </Table>
          </div>
          <div className="flex justify-between m-4 items-center">
            <div>
              <p className="text-gray-700 font-semibold text-sm">
                Showing 1 to 37 of 37 entries
              </p>
            </div>
            <div>
              <Pagination>
                <Pagination.Item>First</Pagination.Item>
                <Pagination.Item>Previous</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
                <Pagination.Item>Last</Pagination.Item>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
// modal
function AddVehical(props) {
   
    return (
      <Modal
        {...props}
        dialogClassName="modal-widthvehicle"
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
            Edit Manager
            {/* </div> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>City</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                {" "}
                <select className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2
                  ">
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
                  <b>Vehicle Name</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                <input    className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                 
                  type="text"
                  style={{ border: "1px solid lightgray" }}
                ></input>
              </Col>
            </Row>
            <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>Vehicle Type</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                {" "}
                <select className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2
                  ">
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
                  <b>Ride Type</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                {" "}
                <select className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2
                  ">
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
                  <b>Display order</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                <input
                  type="text"    className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                 
                  style={{ border: "1px solid lightgray" }}
                ></input>
              </Col>
            </Row>
            <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>Max People</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                <input    className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                 
                  type="text"
                  style={{ border: "1px solid lightgray" }}
                ></input>
              </Col>
            </Row>
            <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>Destination Mandatory</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
              <div className="font-semibold flex space-x-12">
              <div>
               <input type="radio"  value="Yes" name="msg" />
               <label>Yes</label>
               </div>
               <div>
               <input type="radio"  value="No" name="msg" />
               <label>No</label>
               </div>
             
              </div>
             
                 </Col>
            </Row>
            <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>Fare Mandatory</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
              <div className="font-semibold flex space-x-12">
              <div>
               <input type="radio"  value="Yes" name="msgs" />
               <label>Yes</label>
               </div>
               <div>
               <input type="radio"  value="No" name="msgs" />
               <label>No</label>
               </div>
             
              </div>
                 </Col>
            
             </Row>
            <Row className="content-center m-4">
              <Col sm={3}>
                <label>
                  <b>Commission(%)</b>
                </label>
                <span style={{ color: "red" }}>*</span>
              </Col>
              <Col sm={2}>
                <span>:</span>
              </Col>
              <Col sm={7}>
                <input    className="h-10 w-full
           focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                 
                  type="text"
                  style={{ border: "1px solid lightgray" }}
                ></input>
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
  
// end modal
function VehicleFareSettings() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <div>
            <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Vehicle Types </p>
      </div>
      <div className="m-4">
        <Button
          onClick={() => setModalShow(true)}
          style={{ marginTop: 25, marginLeft: 5 }}
        >
          Add Vehicle Type
        </Button>
        <AddVehical show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="h-20 shadow-lg m-4 border border-indigo-600">
        <Tab.Container defaultActiveKey="first">
          <div>
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="font-bold text-base shadow-xl rounded focus:outline-none ml-4 mt-4"
                >
                  Enabled
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="font-bold text-base shadow-xl rounded focus:outline-none ml-4 mt-4"
                >
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Enabled />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Disabled />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
   

      
        </div>
    )
}

export default VehicleFareSettings
