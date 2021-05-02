import React from 'react'
import { Button, Pagination, Table,Tab,Nav, Modal, Row, Col} from 'react-bootstrap'

const ActiveContent = () => {
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
            <Table responsive hover size="sm" style={{ width: 2500 }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Promo Type</th>
                  <th>Title</th>
                  <th>City</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Radius(in meters)</th>
                  <th>Benefit Type</th>
                  <th>Discount Type</th>
                  <th>Value</th>
                  <th>Maximum Value</th>
                  <th>Allowed Vehicles</th>
                  <th>Start From</th>
                  <th>End On</th>
                  <th>Maximum Users Allowed</th>
                  <th>Per USer Coupon Limit</th>
                  <th>Current Usage Count</th>
                  <th>Terms and Conditions</th>
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
            <Table responsive hover size="sm" style={{ width: 2500 }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Promo Type</th>
                  <th>Title</th>
                  <th>City</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Radius(in meters)</th>
                  <th>Benefit Type</th>
                  <th>Discount Type</th>
                  <th>Value</th>
                  <th>Maximum Value</th>
                  <th>Allowed Vehicles</th>
                  <th>Start From</th>
                  <th>End On</th>
                  <th>Maximum Users Allowed</th>
                  <th>Per USer Coupon Limit</th>
                  <th>Current Usage Count</th>
                  <th>Terms and Conditions</th>
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
function AddCoupons(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-widthcoupons"
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
            Coupons
            {/* </div> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col sm={6}>
            <Row className="m-4">
                <Col sm={4}>
                    <label>Title</label><span style={{color:"red"}}>*</span>
                </Col>
                <Col sm={8}>
                    <input type="text" style={{border:"1px solid gray",width:"100%"}}></input>
                </Col></Row>
                <Row className="m-4">
                    <Col sm={4}>
                        <label>Benefit Type</label>
                    </Col>
                    <Col sm={8}>
                    <input type="text"  style={{border:"1px solid gray",width:"100%"}}></input>

                    </Col>
                </Row>
            
          </Col>
          {/* 2nd col */}
          <Col sm={6}>

          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cancel</Button>
          <Button style={{ backgroundColor: "orange" }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // endmodal
  
function Coupons() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
         <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">COUPONS</p>
      </div>
      <div className="m-4">
        <Button
                  onClick={() => setModalShow(true)}

          style={{ marginTop: 25, marginLeft: 5 }}
        >
          Add Coupons
        </Button>
        <AddCoupons
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
     
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


};

export default Coupons;
