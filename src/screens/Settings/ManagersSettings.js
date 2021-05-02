import React from "react";
// import {TextField } from "@material-ui/core";
import {
  Button,
  Pagination,
  Nav,
  Tab,
  Table,
  Modal,
  Row,
  Col,
} from "react-bootstrap";

const ActiveContent = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
        <div>
          <Table
            responsive
            hover
            size="sm"
            style={{ width: 1200 }}
            className="text-center"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>xxxx</td>
                <td>sdf@gmail.com</td>
                <td>offline</td>
                <td>3</td>
                <td class="space-x-2 m-4">
                  <Button onClick={() => setModalShow(true)}>Edit</Button>
                  <EditModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

                  <Button>Suspend</Button>
                </td>
              </tr>
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
const InActiveContent = () => {
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
          <Table
            responsive
            hover
            size="sm"
            style={{ width: 1200 }}
            className="text-center"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
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

                <td>
                  {" "}
                  <Button>Unsuspend</Button>
                </td>
              </tr>
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
// editmodal
function EditModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Modal
      {...props}
      dialogClassName="modal-widthmanager"
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
                <b>Name</b>
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
                <b>Email</b>
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
                <b>Role</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              {" "}
              <select  className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
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
                <b>Frenchise Name</b>
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button style={{ backgroundColor: "orange" }}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
// endmodal
// addmodal
function AddmanagerModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-widthmanager"
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
          Add Manager
          {/* </div> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div m-4>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Name</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Business Name</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Email</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Phone Number</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
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
            <Col>
              {" "}
              <select
                className="h-10 w-full
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
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>Password</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
         focus:outline-none border-2 border-gray-400 pl-1 ml-2"
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input>
            </Col>
          </Row>
          <Row className="content-center m-4">
            <Col sm={3}>
              <label>
                <b>ConfirmPassword</b>
              </label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col sm={2}>
              <span>:</span>
            </Col>
            <Col sm={7}>
              <input
                className="h-10 w-full
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
function ManagersSettings() {
  const [addmodal, setAddShow] = React.useState(false);

  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Managers Settings</p>
      </div>
      <div className="m-4">
        <Button
          onClick={() => setAddShow(true)}
          style={{ marginTop: 25, marginLeft: 5 }}
        >
          Add Manager
        </Button>
        <AddmanagerModal show={addmodal} onHide={() => setAddShow(false)} />
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
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="font-bold text-base shadow-xl rounded focus:outline-none ml-4 mt-4"
                >
                  Inactive
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ActiveContent />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <InActiveContent />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default ManagersSettings;
