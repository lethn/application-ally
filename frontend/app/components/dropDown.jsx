/** @format */
"use client";

import React from "react";
import { useState } from "react";

function DropDown() {
	const [status, setStatus] = useState("1");

	const handleStatusChange = e => {
		setStatus(e.target.value);
	};

	const handleAdd = () => {
		console.log("Added New Application:", title);
	};
	
	return (
		<div>
			<select
				className="border border-gray-300 p-1 text-xl rounded-md mr-4 text-black"
				value={status}
				onChange={handleStatusChange}>
				<option value="Applied">Applied</option>
				<option value="Interview">Interview</option>
				<option value="Rejected">Rejected</option>
				<option value="Not Applied">Not Applied</option>
				<option value="Offered">Offered</option>
			</select>
			<button
				className="bg-slate-700 hover:bg-green-500 text-xl border px-3 py-1 rounded-md text-white"
				onClick={handleAdd}>
				Add
			</button>
		</div>
	);
}

export default DropDown;
