import React from "react";
import { Nav, Tab } from "react-bootstrap";

const ByDate = () => {
  return <div>Date</div>;
};
const ByTime = () => {
  return <div style={{ float: "right" }}>Time</div>;
};
function DriverPerformance() {
  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Overall Driver Performance</p>
      </div>
      <div className="h-auto shadow-lg m-4  border border-indigo-600 bg-white">
        <Tab.Container defaultActiveKey="first">
          <div>
            <Nav variant="pills" className="flex-row justify-between">
              <div>
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="font-bold text-base text-center shadow-xl focus:outline-none m-4 border border-indigo-600 w-48"
                  >
                    Filter By Date
                  </Nav.Link>
                </Nav.Item>
              </div>
              <div className="font-bold text-2xl flex items-center">
                <b>OR</b>
              </div>
              <div>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="font-bold text-base text-center shadow-xl focus:outline-none m-4 border border-indigo-600 w-48"
                  >
                    Filter By Time
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
            <div>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ByDate />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ByTime />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default DriverPerformance;
