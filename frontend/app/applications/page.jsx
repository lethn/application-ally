/** @format */

"use client";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Modal from "../components/Modal";
import DropDown from "../components/DropDown";

const JobCard = ({ title, company, location, salaryRange }) => {
	const [status, setStatus] = useState("1");

	const handleStatusChange = e => {
		setStatus(e.target.value);
	};

	const handleDelete = () => {
		console.log("Delete job:", title);
	};

	return (
		<div className="border border-gray-300 p-4 rounded-md mb-4 text-white bg-slate-800">
			<div>
				<h3 className="font-semibold text-blue-500">{title}</h3>
				<p className="text-white">{company}</p>
				<p className="text-white">{location}</p>
				<p className="text-white">{salaryRange}</p>
			</div>
			<div>
				<select
					className="border border-gray-300 p-1 rounded-md mr-4 text-black font-bold"
					value={status}
					onChange={handleStatusChange}>
					<option value="Applied">Applied</option>
					<option value="Interview">Interview</option>
					<option value="Rejected">Rejected</option>
					<option value="Not Applied">Not Applied</option>
					<option value="Offered">Offered</option>
				</select>
				<button
					className="bg-slate-700 hover:bg-red-500 border p-2 rounded-md text-white"
					onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default function Applications() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="bg-neutral-900">
			<Navbar />

			<div className=" grid grid-cols-4 ">
				{/* Column 1 */}
				<div className="mt-[7rem] ml-3 flex flex-col gap-[1rem] col-span-1 p-1">
					<div className="border rounded-lg p-3 border-gray-400  text-white">
						<h2 className="text-lg font-bold text-white">Statistics</h2>
						<p>Total Applications: 4</p>
					</div>
					<div className="border rounded-md p-3 border-gray-400">
						<h2 className="text-lg font-bold mb-2 text-white">Search Bar</h2>
						<div className="flex flex-col gap-[1rem]">
							<input
								className="border border-gray-300 p-1 rounded-md mr-1"
								type="text"
								placeholder="Enter here"
							/>
							<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md max-w-[50%]">
								Find
							</button>
						</div>
					</div>

					<div className="border rounded-md p-4 border-gray-400 mb-4">
						<h2 className="text-lg font-bold text-white">Status</h2>
						<div className="text-white">
							<button className="border p-2 m-2 rounded-md bg-green-500">
								Applied
							</button>
							<button className="border p-2 m-2 rounded-md bg-yellow-600">
								Interview
							</button>
							<button className="border p-2 m-2 rounded-md bg-red-400">
								Rejected
							</button>
							<button className="border p-2 m-2 rounded-md bg-neutral-600">
								Not Applied
							</button>
							<button className="border p-2 m-2 rounded-md bg-sky-600">
								Offered
							</button>
						</div>
					</div>
				</div>

				{/* Column 2 */}
				<div className="col-span-3 border-gray-400 p-4">
					<div className="flex justify-between items-center rounded-md p-2">
						<div>
							<p className="gradient-text text-transparent text-5xl font-bold animate-gradient m-4">
								Applications
							</p>
						</div>
						<div className="">
							<button
								className="border hover:bg-blue-800 p-2 m-2 mb-4 bg-blue-500 text-white rounded-md"
								onClick={() => setShowModal(true)}>
								Add Job Manually
							</button>
							<button className="border hover:bg-blue-800 p-2 m-2 mb-4 bg-blue-500 text-white rounded-md">
								<a href="search-jobs">Look For Jobs</a>
							</button>
						</div>
					</div>

					<div className="grid gap-4 border border-gray-400 rounded-md p-6 m-5 mt-1">
						<JobCard
							title="Software Engineer"
							company="TechCo"
							location="San Francisco, CA"
							salaryRange="$80,000 - $120,000"
						/>
						<JobCard
							title="Product Manager"
							company="StartupX"
							location="New York, NY"
							salaryRange="$90,000 - $130,000"
						/>
						<JobCard
							title="Data Scientist"
							company="Data Corp"
							location="Seattle, WA"
							salaryRange="$100,000 - $140,000"
						/>
						<JobCard
							title="UX Designer"
							company="Design Studio"
							location="Austin, TX"
							salaryRange="$70,000 - $110,000"
						/>
					</div>
				</div>
			</div>
			<Modal
				isVisible={showModal}
				onClose={() => {
					setShowModal(false);
				}}>
				<form className="p-4 text-2xl flex flex-col gap-2 font-semibold">
					<label for="fname">Job Title:</label>
					<input
						type="text"
						id="title"
						className="rounded-lg border-2 p-2 border-blue-500 font-medium"
						name="title"></input>
					<label for="lname">Company:</label>
					<input
						type="text"
						id="company"
						name="company"
						className="rounded-lg border-2 p-2 border-blue-500 font-medium"></input>
					<label for="lname">Location:</label>
					<input
						type="text"
						id="location"
						name="location"
						className="rounded-lg border-2 p-2 border-blue-500 font-medium"></input>
					<label for="lname">Salary:</label>
					<input
						type="text"
						id="salary"
						name="salary"
						className="rounded-lg border-2 p-2 border-blue-500 font-medium"></input>
					<label for="lname">Status:</label>
					<DropDown />
				</form>
			</Modal>
		</div>
	);
}
