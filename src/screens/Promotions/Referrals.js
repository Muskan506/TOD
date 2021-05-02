import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button,Row,Col, Modal, Pagination, Table } from "react-bootstrap";
import Coupons from "./Coupons";

function ClickedCash() {
  return (
    <div class="flex justify-center">
      <input
        type="text"
        placeholder="Enter Amount"
        style={{ border: "1px solid gray", textAlign: "center" }}
      ></input>
    </div>
  );
}
function ClickedCash2() {
  return (
    <div class="flex justify-center">
      <input
        type="text"
        placeholder="Enter Amount"
        style={{ border: "1px solid gray", textAlign: "center" }}
      ></input>
    </div>
  );
}

function ClickedCoupon() {
  return (
    <div>
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
        <Table responsive hover size="sm" style={{ width: 1500 }}>
          <thead>
            <tr>
            <th>S.No</th>
              <th>Coupon Id</th>
              <th>Promo Type</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Discount Type</th>

              <th>Value</th>
              <th>Maximum Discount </th>
           
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
  );
}
function ClickedCoupon2() {
  return (
    <div>
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
        <Table responsive hover size="sm" style={{ width: 1500 }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Coupon Id</th>
              <th>Promo Type</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Discount Type</th>

              <th>Value</th>
              <th>Maximum Discount </th>
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
  );
}
// modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-width"
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
          ADD PROMOTIONS
          {/* </div> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Row className="p-4">
              <Col sm={4}>
              <label>Title</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={4}>
              <input
                type="text"
                style={{ border: "1px solid lightgray" }}
              ></input></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label column sm={4}>
                Benefit Type
              </label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}>
                {" "}
                <select className="h-7 w-48 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
                  <option value="0">Discount</option>
                </select>
              </Col>
            </Row>
            <Row className="p-4">
            <Col sm={4}>
              <label>Promo Type</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}><select className="h-7 w-48 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
                <option value="0">Location In-Sensitive</option>
                <option value="1">sensitive</option>
              </select></Col>
            </Row>
            <Row className="p-4">
            <Col sm={4}>
              <label>Discount Type</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}> <select className="h-7 w-48 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs">
                <option value="0">Percentage</option>
                <option value="1">Flat</option>
              </select></Col>
            </Row>
            <Row className="p-4">
            <Col sm={4}>
              <label>Discount Percentage(%)</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}> <input
                type="text"
                style={{ border: "1px solid lightgray", width: "65%" }}
              ></input></Col>
            </Row>
            <Row className="p-4">
            <Col sm={4}>
              <label>Discount Maximum(Number)</label>
              <span style={{ color: "red" }}>*</span></Col>
             <Col sm={8}> <input
                type="text"
                style={{ border: "1px solid lightgray", width: "65%" }}
              ></input></Col>
            </Row>
          </Col>
          <Col>
            <Row className="p-4"><Col sm={4}>
              <label>Start Date</label>
              <span style={{ color: "red" }}>*</span></Col>
            <Col sm={8}> <form noValidate>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>End Date</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}><form noValidate>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>Maximum Allowed(Number)</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}>  <input
                type="text"
                style={{ border: "1px solid lightgray", width: "65%" }}
              ></input></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>Per User Limit</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}> <input
                type="text"
                style={{ border: "1px solid lightgray", width: "65%" }}
              ></input></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>Per Day Limit</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}> <input
                type="text"
                style={{ border: "1px solid lightgray", width: "65%" }}
              ></input></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>Allowed Vehicles</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}> <select
                className="h-7 w-48 focus:outline-none rounded 
              border-2 border-gray-400 w-16 pl-1 fcs"
                style={{ width: "60%" }}
              >
                <option value="0">Select Vehicle</option>
              </select></Col>
            </Row>
            <Row className="p-4"><Col sm={4}>
              <label>Terms and Conditions</label>
              <span style={{ color: "red" }}>*</span></Col>
              <Col sm={8}>  <textarea
                type="text"
                placeholder="Terms of use:<br>
                              1.Only one promotions can be applied
                              on a ride<br>
                              2.We reserve the right to discontinue 
                              the promotion at this discretion.<br>
                              "
                style={{ border: "1px solid gray", width: 200, height:200,overflow:"hidden"}}
              ></textarea></Col>
            </Row>
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


function Referrals() {
  const [selectRadio, setSelectRadio] = useState("");
  const [selectRadio2, setSelectRadio2] = useState("");
  const [modalShow, setModalShow] = React.useState(false);


  const clicked = (e) => {
    setSelectRadio(e.target.value);
  };
  const clicked2 = (e) => {
    setSelectRadio2(e.target.value);
  };

  return (
    <div>
      <div className="m-4">
        <Button style={{ marginTop: 25, marginLeft: 5 }} onClick={() => setModalShow(true)}
         >Referral Data</Button>
      </div> <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
     
      <div className="h-auto shadow-lg m-4 border border-indigo-600">
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <b>Referee Benefits </b>
        </h1>
        <div
          class="flex justify-center m-4 space-x-8 font-bold text-base"
          onChange={clicked}
        >
          <label>
            {" "}
            <input type="radio" value="Push" name="msg" />
            None{" "}
          </label>
          <label>
            <input type="radio" value="cash" name="msg" /> Cash
          </label>
          <label>
            {" "}
            <input type="radio" value="coupon" name="msg" />
            Coupon
          </label>
        </div>
        {selectRadio === "cash" ? <ClickedCash /> : null}
        {selectRadio === "coupon" ? <ClickedCoupon /> : null}{" "}
        <footer class="flex justify-end m-4">
          <Button>Update</Button>
        </footer>
      </div>
      <div>
        <div className="h-auto shadow-lg m-4 border border-indigo-600">
          <h1 style={{ textAlign: "center", marginTop: "2%" }}>
            <b>Referee Benefits </b>
          </h1>
          <div
            class="flex justify-center m-4 space-x-8 font-bold text-base"
            onChange={clicked2}
          >
            <label>
              {" "}
              <input type="radio" value="Push" name="msg" />
              None{" "}
            </label>
            <label>
              <input type="radio" value="cash" name="msg" /> Cash
            </label>
            <label>
              {" "}
              <input type="radio" value="coupon" name="msg" />
              Coupon
            </label>
          </div>
          {selectRadio2 === "cash" ? <ClickedCash2 /> : null}
          {selectRadio2 === "coupon" ? <ClickedCoupon2 /> : null}{" "}
          <footer class="flex justify-end m-4">
            <Button>Update</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
