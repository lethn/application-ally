/** @format */

"use client";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import JobsCardList from "../components/jobsCardList";
import AddJobs from "../components/addJobs";

export default function Applications() {
	const jobs_array = [
		{
			id: "j1",
			title: "Software Engineer",
			company: "TechCo",
			location: "San Francisco, CA",
			salary: "$80,000 - $120,000",
			website: "https://example.com/",
			status: "Applied"
		},
		{
			id: "j2",
			title: "Product Manager",
			company: "StartupX",
			location: "New York, NY",
			salary: "$90,000 - $130,000",
			website: "https://example.com/",
			status: "Offered"
		},
		{
			id: "j3",
			title: "Data Scientist",
			company: "Data Corp",
			location: "Seattle, WA",
			salary: "$100,000 - $140,000",
			website: "https://example.com/",
			status: "Interview"
		},
		{
			id: "j4",
			title: "UX Designer",
			company: "Design Studio",
			location: "Austin, TX",
			salary: "$70,000 - $110,000",
			website: "https://example.com/",
			status: "Rejected"
		},
		{
			id: "j5",
			title: "Frontend Developer",
			company: "Meta",
			location: "San Francisco, CA",
			salaryRange: "$90,000 - $120,000",
			website: "https://example.com/",
			status: "Not Applied"
		},
		{
			id: "j6",
			title: "Marketing Manager",
			company: "Marketing Agency",
			location: "Los Angeles, CA",
			salaryRange: "$60,000 - $100,000",
			website: "https://example.com/",
			status: "Applied"
		}
	];

	const [jobs, setJobs] = useState(jobs_array);
	const [showModal, setShowModal] = useState(false);

	const addJobsHandler = (job) => {
		setJobs((prevJobs) => {
			return [job, ...prevJobs];
		});
		setShowModal(false);
		console.log(job);
	};

	const deleteJobsHandler = (id) => {
		setJobs((prevJobs) => {
			return prevJobs.filter(job => job.id !== id);
		});
	};

	return (
		<div className="bg-neutral-900">
			<Navbar />

			<div className="grid grid-cols-4 pb-36 pr-36 pl-36">
				{/* Column 1 */}
				<div className="mt-[7rem] ml-3 flex flex-col gap-[1rem] col-span-1 p-1">
					<div className="border rounded-lg p-3 border-gray-400 text-white">
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
								Add Job
							</button>
							<button className="border hover:bg-blue-800 p-2 m-2 mb-4 bg-blue-500 text-white rounded-md">
								<Link href="search-jobs">Explore New Jobs</Link>
							</button>
						</div>
					</div>

					<JobsCardList items={jobs} onDeleteJobs={deleteJobsHandler} />
				</div>
			</div>

			<Modal
				isVisible={showModal}
				onClose={() => {
					setShowModal(false);
				}}>
				<AddJobs onAddJobs={addJobsHandler} />
			</Modal>

		</div>
	);
}
