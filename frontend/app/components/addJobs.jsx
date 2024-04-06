/** @format */

import React, { useState } from "react";

const AddJobs = props => {
	const [inputTitle, setInputTitle] = useState("");
	const [inputCompany, setInputCompany] = useState("");
	const [inputLocation, setInputLocation] = useState("");
	const [inputSalary, setInputSalary] = useState("");
	const [inputWebsite, setInputWebsite] = useState("");
	const [inputStatus, setInputStatus] = useState("Applied");

	const titleChangeHandler = event => {
		setInputTitle(event.target.value);
	};

	const companyChangeHandler = event => {
		setInputCompany(event.target.value);
	};

	const locationChangeHandler = event => {
		setInputLocation(event.target.value);
	};

	const salaryChangeHandler = event => {
		setInputSalary(event.target.value);
	};

	const websiteChangeHandler = event => {
		setInputWebsite(event.target.value);
	};

	const statusChangeHandler = event => {
		setInputStatus(event.target.value);
	};

	const onSubmitHandler = event => {
		event.preventDefault();

		if (
			!inputTitle &&
			!inputCompany &&
			!inputLocation &&
			!inputSalary &&
			!inputWebsite
		) {
			props.onClose();
			return;
		}

		const jobData = {
			id: Math.random().toString(),
			title: inputTitle,
			company: inputCompany,
			location: inputLocation,
			salary: inputSalary,
			website: inputWebsite,
			status: inputStatus
		};

		console.log("Added New Application");
		props.onAddJobs(jobData);

		setInputTitle("");
		setInputCompany("");
		setInputLocation("");
		setInputSalary("");
		setInputWebsite("");
		setInputStatus("Applied");
	};

	return (
		<form
			className="p-4 text-xl flex flex-col gap-2 font-semibold items-start"
			onSubmit={onSubmitHandler}>
			<label htmlFor="title">Job Title:</label>
			<input
				id="title"
				name="title"
				type="text"
				className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
				value={inputTitle}
				onChange={titleChangeHandler}
			/>

			<label htmlFor="company">Company:</label>
			<input
				id="company"
				name="company"
				type="text"
				className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
				value={inputCompany}
				onChange={companyChangeHandler}
			/>

			<label htmlFor="location">Location:</label>
			<input
				id="location"
				name="location"
				type="text"
				className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
				value={inputLocation}
				onChange={locationChangeHandler}
			/>
			<label htmlFor="salary">Salary:</label>
			<input
				id="salary"
				name="salary"
				type="text"
				className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
				value={inputSalary}
				onChange={salaryChangeHandler}
			/>

			<label htmlFor="website">Website:</label>
			<input
				id="website"
				name="website"
				type="text"
				className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
				value={inputWebsite}
				onChange={websiteChangeHandler}
			/>
			{/* Dropdown */}
			<div className="pt-3 pb-0">
				<label htmlFor="status">Status:</label>
				<select
					id="status"
					name="status"
					className="border border-gray-300 p-2 ml-2 m-auto text-xl rounded-md text-black"
					value={inputStatus}
					onChange={statusChangeHandler}>
					<option value="Applied">Applied</option>
					<option value="Interview">Interview</option>
					<option value="Rejected">Rejected</option>
					<option value="Not Applied">Not Applied</option>
					<option value="Offered">Offered</option>
				</select>
			</div>
			<button
				className="bg-slate-700 hover:bg-green-500 text-xl border p-2 my-auto self-end rounded-md text-white"
				type="submit">
				Add Job
			</button>
		</form>
	);
};

export default AddJobs;
