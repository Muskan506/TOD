import React from "react";
import {
  Button,
  Modal,
  Nav,
  Pagination,
  Tab,
  Table,
  Row,
  Col,
} from "react-bootstrap";

const DriverNotUploadedDocuments = () => {
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
          <Table responsive hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>Driver Name</th>
                <th>Phone Number</th>
                <th>Registerd On</th>
                <th>Last Updated</th>
                <th>No of docs uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
const DriverUploadedDocuments = () => {
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
          <Table responsive hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>Driver Name</th>
                <th>Phone Number</th>
                <th>Registerd On</th>
                <th>Last Updated</th>
                <th>No of docs uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
const DriverActive = () => {
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
          <Table responsive hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>Driver ID</th>
                <th>Driver Name</th>
                <th>Phone Number</th>
                <th>Registerd On</th>
                <th>Last Updated</th>
                <th>No of docs uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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

const ModalContent = ({ id, title, color }) => {
  return (
    <div>
      <Row
        className="border-t h-9 flex items-center ml-2 mr-2"
        style={{ backgroundColor: color }}
      >
        <Col md={1} className="text-base font-bold text-center">
          {id}.
        </Col>
        <Col md={11} className="text-base font-bold text-center">
          {title}
        </Col>
      </Row>
    </div>
  );
};
function AllDocuments(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
          <p className="font-bold text-xl ml-2 mb-2">All Documents</p>
          <ModalContent id="1" title="Driver Image" color="lightgray" />
          <ModalContent id="2" title="Driving License" color="white" />
          <ModalContent id="3" title="AADHAR CARD" color="lightgray" />
          <ModalContent id="4" title="Vehicle Image" />
          <ModalContent id="5" title="RC Image" color="lightgray" />
          <ModalContent id="6" title="Vehicle Insurance" />
          <div className="text-sm mt-4">
            <p>
              * Mandatory for Registration: These are the documents a driver has
              to upload before registering as a driver.
            </p>
            <p>
              * Mandatory for Driving: These are the documents that are
              mandatory for a driver to upload before he/she starts taking
              rides.
            </p>
            <p>
              * Required: These are the documents a driver needs to upload
              within a week.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function DriverEnrollment() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Self-Enrolled Drivers</p>
        <button
          className="font-bold text-sm text-center shadow-xl w-28 h-9 mr-4 text-white rounded focus:outline-none "
          style={{ position: "absolute", backgroundColor: "#007BFF", right: 0 }}
          onClick={() => setModalShow(true)}
        >
          All Documents
        </button>
        <AllDocuments show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="flex items-center h-20 ml-10  font-bold">
        <p>Vehicle Type</p>
        <select className="focus:outline-none rounded h-7 border-2 border-gray-400 w-40 pl-1 ml-2">
          <option value="1" selected>
            TAXI
          </option>
        </select>
      </div>
      <div
        className="h-20 shadow-lg ml-4 mr-4 mb-4  border border-indigo-600"
        style={{ boxSizing: "border-box" }}
      >
        <Tab.Container defaultActiveKey="first">
          <div>
            <Nav variant="pills" className="flex-wrap">
              <div>
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="font-bold text-base text-center shadow-xl focus:outline-none ml-4 mt-3 border border-indigo-600"
                  >
                    Drivers - Not Uploaded Documents
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="font-bold text-base text-center shadow-xl focus:outline-none mt-3  border border-indigo-600 "
                  >
                    Drivers - Uploaded Documents
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    className="font-bold text-base text-center shadow-xl focus:outline-none mt-3  border border-indigo-600 "
                  >
                    Drivers - Active
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
          </div>
          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <DriverNotUploadedDocuments />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <DriverUploadedDocuments />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <DriverActive />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default DriverEnrollment;
