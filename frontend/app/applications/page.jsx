/** @format */

"use client";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";

const JobCard = ({ title, company, location, salaryRange }) => {
	const [status, setStatus] = useState('1');

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	const handleDelete = () => {
		console.log('Delete job:', title);
	};

	return (
		<div className="border border-gray-300 p-4 rounded-md mb-4 grid grid-cols-3 gap-2">
			<div>
				<div>
					<h3 className="font-bold text-blue-800">{title}</h3>
					<p className="text-gray-700">{company}</p>
					<p className="text-gray-700">{location}</p>
					<p className="text-gray-700">{salaryRange}</p>
				</div>
				<div>
					<select
						className="border border-gray-300 px-3 py-2 rounded-md mr-2"
						value={status}
						onChange={handleStatusChange}
					>
						<option value="Applied">Applied</option>
						<option value="Interview">Interview</option>
						<option value="Rejected">Rejected</option>
						<option value="Not Applied">Not Applied</option>
						<option value="Offered">Offered</option>
					</select>
					<button className="border p-2 rounded-md" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};


export default function Applications() {
	return (
		<div>
			<Navbar />

			<div className=" grid grid-cols-4 gap-2 p-4">
				{/* Column 1 */}
				<div className="col-span-1 p-6 m-6">
					<div className="border rounded-md p-4 border-gray-400 mb-4">
						<h2 className="text-lg font-bold">Statistics</h2>
						<p>Total Applications: 4</p>
					</div>
					<div className="border rounded-md p-4 border-gray-400 mb-4">
						<h2 className="text-lg font-bold mb-2">Search Bar</h2>
						<div className="flex">
							<input
								className="border border-gray-300 px-3 py-2 rounded-md mr-2"
								type="text"
								placeholder="Enter here"
							/>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-md">Find</button>
						</div>
					</div>

					<div className="border rounded-md p-4 border-gray-400 mb-4">
						<h2 className="text-lg font-bold">Status</h2>
						<div>
							<button className="border p-2 m-2 rounded-md">Applied</button>
							<button className="border p-2 m-2 rounded-md">Interview</button>
							<button className="border p-2 m-2 rounded-md">Rejected</button>
							<button className="border p-2 m-2 rounded-md">Not Applied</button>
							<button className="border p-2 m-2 rounded-md">Offered</button>
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
						<div>
							<button className="border rounded-md p-2 m-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md">
								Add Jobs Manually
							</button>
							<button className="border rounded-md p-2 m-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md">
								Looking For Jobs
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
		</div>
	);
}
