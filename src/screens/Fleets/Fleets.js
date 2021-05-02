import React, { useState } from "react";
import { Nav, Tab, Table, Pagination, Modal, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function AddFleetModal(props) {
	const [phone, setPhone] = useState();
	return (
		<Modal {...props} size="lg" aria-labelledby="example-modal-sizes-title-lg">
			<Modal.Header closeButton className="bg-gray-200">
				<Modal.Title
					id="contained-modal-title-vcenter"
					className="font-bold"
					style={{ marginLeft: "40%" }}
				>
					Add FLeet
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">
							Name <span className="text-red-700">*</span>
						</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<input
							type="text"
							className="w-full text-sm font-bold focus:outline-none rounded h-8 border border-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-600 pl-2"
							placeholder="Enter name"
						/>
					</Col>
				</Row>
				<Row className="my-4">
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">
							City <span className="text-red-700">*</span>
						</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<select className="w-full text-sm font-bold focus:outline-none rounded h-8 border border-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-600 pl-2">
							<option value="0">Delhi</option>
							<option selected value="1">
								Kanpur
							</option>
							<option value="2">Lucknow</option>
						</select>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">
							Phone Number <span className="text-red-700">*</span>
						</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<PhoneInput
							country={"in"}
							value={phone}
							onChange={setPhone}
							inputStyle={{ width: "100%" }}
						/>
					</Col>
				</Row>
				<Row className="my-4">
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">Bank Address</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<input
							type="text"
							className="w-full text-sm font-bold focus:outline-none rounded h-8 border border-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-600 pl-2"
						/>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">VAT Number</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<input
							type="text"
							className="w-full text-sm font-bold focus:outline-none rounded h-8 border border-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-600 pl-2"
						/>
					</Col>
				</Row>
				<Row className="my-4">
					<Col md={4} className="flex justify-center">
						<label className="text-base font-bold">VAT Enabled</label>
					</Col>
					<Col md={1}>:</Col>
					<Col md={6}>
						<select className="w-full text-sm font-bold focus:outline-none rounded h-8 border border-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-600 pl-2">
							<option selected value="0">
								-Select-
							</option>
							<option value="1">Yes</option>
							<option value="2">No</option>
						</select>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer className="flex justify-center">
				<button
					onClick={props.onHide}
					className="text-sm text-center shadow-xl w-20 h-8 ml-4 text-white rounded focus:outline-none bg-red-500"
				>
					Close
				</button>
				<button
					className="text-sm text-center shadow-xl w-20 h-8 ml-4 text-white rounded focus:outline-none"
					style={{ backgroundColor: "#ff6600" }}
				>
					Create
				</button>
			</Modal.Footer>
		</Modal>
	);
}
const ActiveClass = () => {
	return (
		<div className="h-full m-2">
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
				<Table responsive hover size="sm" className="text-sm ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>City</th>
							<th>Phone Number</th>
							<th>Bank Address</th>
							<th>VAT Number</th>
							<th>VAT Enabled</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-gray-500 font-bold">
							<td>Last Ride On</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>
								<button
									className="font-semibold text-sm text-center shadow-xl w-16 h-7 text-white rounded focus:outline-none"
									style={{ backgroundColor: "#ff6600" }}
								>
									Edit
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
	);
};
const InActiveClass = () => {
	return (
		<div className="h-full m-2">
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
				<Table responsive hover size="sm" className="text-sm ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>City</th>
							<th>Phone Number</th>
							<th>Bank Address</th>
							<th>VAT Number</th>
							<th>VAT Enabled</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-gray-500 font-bold">
							<td>Last Ride On</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>
								<button
									className="font-semibold text-sm text-center shadow-xl w-16 h-7 text-white rounded focus:outline-none"
									style={{ backgroundColor: "#ff6600" }}
								>
									Edit
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
	);
};

const Fleets = () => {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className="bg-gray-100">
			<div className="flex shadow-md h-16 items-center justify-center bg-white">
				<p className="font-bold text-2xl">Fleets</p>
			</div>
			<div>
				<button
					className="font-bold text-sm text-center shadow-xl w-20 h-8 ml-4 mt-4 text-white rounded focus:outline-none"
					style={{ backgroundColor: "#ff6600" }}
					onClick={() => setModalShow(true)}
				>
					Add Fleet
				</button>
				<AddFleetModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
			<div className="h-20 mt-2 mx-4 flex-wrap border bg-white">
				<Tab.Container defaultActiveKey="first">
					<div>
						<Nav variant="pills" className="flex-row">
							<Nav.Item>
								<Nav.Link
									eventKey="first"
									className="font-bold text-sm shadow-xl rounded focus:outline-none ml-4 mt-4 w-48 text-center border"
								>
									Active
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="second"
									className="font-bold text-sm shadow-xl rounded focus:outline-none  mt-4 w-48 text-center ml-1 border "
								>
									Inactive
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<hr className="ml-4 mr-4" />
					<div className="mt-8 border h-auto bg-white">
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<ActiveClass />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<InActiveClass />
							</Tab.Pane>
						</Tab.Content>
					</div>
				</Tab.Container>
			</div>
		</div>
	);
};

export default Fleets;
