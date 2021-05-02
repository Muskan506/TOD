import React, { useState } from "react";
import {
	Table,
	Pagination,
	Tab,
	
	Nav,
	Modal,
} from "react-bootstrap";
import CustomerWithDocs from "./CustomerWithDocs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ViewOtpModal(props) {
	const [phone, setPhone] = useState();
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered >
			<Modal.Header closeButton />
			
			<Modal.Body>
				<p className="font-bold text-base  mb-2">Phone Number:</p>
				<div>

					<PhoneInput
						country={"in"}
						value={phone}
						onChange={setPhone}
						
						className="w-96"
						inputStyle={{ width: "90%" }}
					/>
				</div>
				<div className=" flex justify-center items-center">
					<button
						className="font-bold text-sm text-center shadow-xl w-24 h-8 ml-4 text-white rounded focus:outline-none mt-4"
						style={{ backgroundColor: "#ff6600" }}
					>
						View OTP
					</button>
				</div>
			</Modal.Body>
			
		</Modal>
	);
}
const AllDetails = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div>
			<div className="flex-wrap">
				<button
					className="font-bold text-sm text-center shadow-xl w-20 h-8 ml-4 mt-4 text-white rounded focus:outline-none"
					style={{ backgroundColor: "#ff6600" }}
					onClick={() => setModalShow(true)}
				>
					View OTP
				</button>
				<ViewOtpModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>

			<div className="h-full border border-indigo-600 m-4">
				<div className="h-16 flex items-center ml-4 justify-between font-semibold flex-wrap ">
					<div className="flex">
						<p className="pr-2 text-sm">Show</p>
						<select className="h-6 focus:outline-none rounded border-2 border-gray-400 w-16 pl-1 fcs text-sm">
							<option value="0">10</option>
							<option value="1">25</option>
							<option value="2" selected>
								50
							</option>
							<option value="3">100</option>
						</select>
						<p className="pl-2 text-sm">entries</p>
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
					<Table responsive hover size="sm" className="text-sm">
						<thead>
							<tr>
								<th>User ID</th>
								<th>User Name</th>
								<th>Phone Number</th>
								<th>Email</th>
								<th>Last Login</th>
								<th>Last Ride On</th>
								<th>Total Rides</th>
								<th>View OTP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Last Ride On</td>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>Otto</td>
								<td>
									<button
										className="font-bold text-base text-center shadow-xl w-16 h-7 text-white rounded focus:outline-none"
										style={{ backgroundColor: "#ff6600" }}
									>
										OTP
									</button>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className="h-16 bg-gray-100 flex items-center justify-between">
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
const CustomerDetails = () => {
	return (
		<div>
			<div className="flex shadow-md h-16 items-center justify-center">
				<p className="font-bold text-2xl">Customer Details</p>
			</div>
			<div>
				<div className="flex-wrap">
					<Tab.Container defaultActiveKey="first">
						<div>
							<Nav variant="pills" className="flex-row">
								<Nav.Item>
									<Nav.Link
										eventKey="first"
										className="font-bold text-sm shadow-xl rounded focus:outline-none ml-4 mt-4"
									>
										All Customers
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										eventKey="second"
										className="font-bold text-sm shadow-xl rounded focus:outline-none ml-4 mt-4"
									>
										Customer with Docs
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
						<div>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<AllDetails />
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<CustomerWithDocs />
								</Tab.Pane>
							</Tab.Content>
						</div>
					</Tab.Container>
				</div>
			</div>
		</div>
	);
};

export default CustomerDetails;
