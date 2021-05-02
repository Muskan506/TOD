import React from 'react'
import { Button, Pagination, Table } from 'react-bootstrap'

function DriverReferrals() {
    return (
        <div>
          <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Driver Referrals</p>
      </div>
      <div className="m-4">
        <Button
        //   onClick={() => setModalShow(true)}
          style={{ marginTop: 25, marginLeft: 5 }}
        >
          Add Referrals
        </Button></div>
        <div className="h-full border border-indigo-600 mt-16 m-4">
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

      
        
    )
}

export default DriverReferrals
