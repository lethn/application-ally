/** @format */

import React from "react";
import axios from "axios";

const JobsCard = (props) => {
	const statusChangeHandler = (event) => {
		const newStatus = event.target.value;
		axios
			.put(
				`http://localhost:8000/api/update-job-application/${props.job_id}`,
				{ status: newStatus }
			)
			.then(res => {
				console.log("Status updated:", newStatus);
				props.onStatusChange(props.job_id, newStatus);
			})
			.catch(err => {
				console.error("Error updating job status:", err);
			});
	};

	const handleEdit = () => {
		props.onIsEditJobs(props);
		console.log("Edit job:");
	};

	const handleDelete = () => {
		axios
			.delete(
				`http://localhost:8000/api/delete-job-application/${props.job_id}`
			)
			.then(res => {
				console.log("Delete job:", props.title);
				props.onDeleteJobs(props.job_id);
			})
			.catch(err => {
				console.error("Error deleting job:", err);
			});
	};

	return (
		<div className="flex p-5 rounded-lg mb-4 text-white bg-neutral-800 justify-between">
			<div>
				<h3 className="font-bold text-blue-500 text-2xl px-2 py-1">
					{props.title}
				</h3>
				<p className="text-white px-2 py-1 text-xl font-semibold">
					{props.company}
				</p>
				<p className="text-white px-2 py-1 text-lg">{props.location}</p>
				<p className="text-white px-2 py-1 text-lg pb-6">{props.salary}</p>
				<a
					className="underline hover:text-blue-500 text-white px-2 py-1 text-lg"
					href={props.website}
					target="_blank"
					rel="noopener noreferrer">
					{props.website}
				</a>
			</div>
			<div className="flex flex-col">
				<select
					id={`status-${props.job_id}`}
					className="border border-gray-300 p-2 m-2 rounded-md text-black font-bold"
					value={props.status}
					onChange={statusChangeHandler}>
					<option value="Applied">Applied</option>
					<option value="Interview">Interview</option>
					<option value="Rejected">Rejected</option>
					<option value="Not Applied">Not Applied</option>
					<option value="Offered">Offered</option>
				</select>
				<button
					className="bg-slate-600 font-semibold hover:bg-orange-400 p-2 m-2 rounded-md text-white"
					onClick={handleEdit}>
					Edit
				</button>
				<button
					className="bg-slate-600 hover:bg-red-500 font-semibold p-2 m-2 rounded-md text-white"
					onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default JobsCard;
