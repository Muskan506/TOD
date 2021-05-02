import React from "react";
import { Row, Col } from "react-bootstrap";

const DashboardContent = () => {
	return (
		<div>
			<div className="flex shadow-md h-16 items-center justify-center">
				<p className="font-bold text-2xl">Dashboard</p>
			</div>

			<Row >
				<Col sm>
					<div className="mt-12 border-r-2 border-gray-400 ">
						<p className="text-center font-bold text-xl ">User Details</p>
						<div className="flex justify-center">
							<input
								type="email"
								className="input-width text-center my-4 focus:outline-none focus:ring-1 focus:ring-blue-300 border border-indigo-600 text-sm h-8 rounded"
								placeholder="Enter User ID/Phone/Email "
							/>
						</div>
						<div>
							<form className="flex justify-center">
								<div>
									<label className="font-bold text-sm mr-3">
										<input
											type="radio"
											id="userid"
											value="userid"
											className="mr-1"
											name="user"
										/>
										User ID
									</label>
								</div>
								<div>
									<label className="font-bold text-sm  mr-3">
										<input
											type="radio"
											id="email"
											value="email"
											className="mr-1"
											name="user"
										/>
										Email
									</label>
								</div>
								<div>
									<label className="font-bold text-sm">
										<input
											type="radio"
											id="phone"
											value="phone"
											className="mr-1"
											name="user"
										/>
										Phone
									</label>
								</div>
							</form>
						</div>
						<div className="flex justify-center">
							<button
								className="font-bold text-base text-center shadow-md button-width h-8 mt-12 text-white rounded focus:outline-none"
								style={{ backgroundColor: "#ff6600" }}
							>
								User Details
							</button>
						</div>
					</div>
				</Col>
				<Col sm>
					<div className="mt-12 border-r-2 border-gray-400 ">
						<p className="text-center font-bold text-xl ">Driver Details</p>
						<div className="flex justify-center">
							<input
								type="email"
								className="input-width text-center my-4 focus:outline-none focus:ring-1 focus:ring-blue-300 border border-indigo-600 text-sm h-8 rounded"
								placeholder="Enter Driver ID/Phone/Email "
							/>
						</div>

						<form className="flex justify-center">
							<div>
								<label className="font-bold text-sm mr-3">
									<input
										type="radio"
										value="driverid"
										className="mr-1"
										name="driver"
									/>
									Driver ID
								</label>
							</div>
							<div>
								<label className="font-bold text-sm  mr-3">
									<input
										type="radio"
										value="phone"
										className="mr-1"
										name="driver"
									/>
									Phone
								</label>
							</div>
							<div>
								<label className="font-bold text-sm">
									<input
										type="radio"
										value="vehicleno"
										className="mr-1"
										name="driver"
									/>
									Vehicel No
								</label>
							</div>
						</form>
						<div className="flex justify-center">
							<button
								className="font-bold text-base text-center shadow-md button-width h-8 mt-12 text-white rounded focus:outline-none"
								style={{ backgroundColor: "#ff6600" }}
							>
								Driver Details
							</button>
						</div>
					</div>
				</Col>
				<Col sm>
					<div className="mt-12">
						<p className="text-center font-bold text-xl ">Ride Details</p>
						<div className="flex justify-center">
							<input
								type="email"
								className="input-width text-center my-4 focus:outline-none focus:ring-1 focus:ring-blue-300 border border-indigo-600 text-sm h-8 rounded"
								placeholder="Enter Engagement/Ride ID "
							/>
						</div>

						<form className="flex justify-center">
							<div>
								<label className="font-bold text-sm mr-3">
									<input
										type="radio"
										value="rideid"
										className="mr-1"
										name="rider"
									/>
									Rider ID
								</label>
							</div>
						</form>
						<div className="flex justify-center">
							<button
								className="font-bold text-base text-center shadow-md button-width h-8 mt-12 text-white rounded focus:outline-none"
								style={{ backgroundColor: "#ff6600" }}
							>
								Ride Details
							</button>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default DashboardContent;
