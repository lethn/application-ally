/** @format */

"use client";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import JobsCardList from "../components/jobsCardList";
import AddJobs from "../components/addJobs";
import Footer from "@/app/components/footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/user";
import EditJobs from "../components/editJobs";
import Pagination from "../components/pagination";

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
			salary: "$90,000 - $120,000",
			website: "https://example.com/",
			status: "Not Applied"
		},
		{
			id: "j6",
			title: "Marketing Manager",
			company: "Marketing Agency",
			location: "Los Angeles, CA",
			salary: "$60,000 - $100,000",
			website: "https://example.com/",
			status: "Applied"
		}
	];

	const { isLoggedIn } = useContext(AuthContext);

	const [jobs, setJobs] = useState(jobs_array);
	const [showModal, setShowModal] = useState(false);
	const [editJobs, setEditJobs] = useState(false);
	const [editJobsData, setEditJobsData] = useState('');

	// Jobs Page Display
	const [currentPage, setCurrentPage] = useState(1);
	const jobsPerPage = 4;
	const indexOfLastJob = currentPage * jobsPerPage;
	const indexOfFirstJob = indexOfLastJob - jobsPerPage;
	const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

	const changePageHandler = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const addJobsHandler = job => {
		setJobs(prevJobs => {
			return [job, ...prevJobs];
		});
		setShowModal(false);
		console.log(job);
	};

	const isEditJobs = (job) => {
		setEditJobs(true);
		setEditJobsData(job);
		console.log(job);
		setShowModal(true);
	};

	const editJobsHandler = (editedJob) => {
		setJobs(prevJobs => {
			return prevJobs.map(job => {
				if (job.id === editedJob.id) {
					return editedJob;
				} else {
					return job;
				}
			});
		});

		resetModalState();
		console.log(editedJob);
	};

	const deleteJobsHandler = id => {
		setJobs(prevJobs => {
			return prevJobs.filter(job => job.id !== id);
		});
	};

	const updateJobStatus = (id, newStatus) => {
		setJobs(prevJobs => {
			return prevJobs.map(job => {
				if (job.id === id) {
					return { ...job, status: newStatus };
				} else {
					return job;
				}
			});
		});
	};

	const resetModalState = () => {
		setEditJobs(false);
		setEditJobsData(null);
		setShowModal(false);
	};

	if (isLoggedIn) {
		return (
			<div className="bg-neutral-900">
				<Navbar />

				<div className="grid grid-cols-4 mx-[2rem]">
					{/* Column 1 */}
					<div className="mt-[7rem] ml-3 flex flex-col gap-[1rem] col-span-1 p-1">
						<div className="border rounded-lg p-3 border-gray-400 text-white bg-slate-600">
							<h2 className="text-lg font-bold text-white">Statistics</h2>
							<p>Total Applications: {jobs.length}</p>
						</div>
						<div className="border rounded-md p-3 border-gray-400 bg-slate-600">
							<h2 className="text-lg font-bold mb-2 text-white">Search Bar</h2>
							<div className="flex flex-col gap-[1rem]">
								<input
									id="searchBar"
									className="border border-gray-300 p-1 rounded-md mr-1 p-2"
									type="text"
									placeholder="Enter here"
								/>
								<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md max-w-[5rem]">
									Find
								</button>
							</div>
						</div>

						<div className="border rounded-md p-4 border-gray-400 mb-4 bg-slate-600">
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
							<div>
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

						<JobsCardList
							items={currentJobs}
							onDeleteJobs={deleteJobsHandler}
							onIsEditJobs={isEditJobs}
							onStatusChange={updateJobStatus}
						/>

						<Pagination
							currentPage={currentPage}
							totalPages={Math.ceil(jobs.length / jobsPerPage)}
							onChangePage={changePageHandler}
						/>
					</div>
				</div>



				<Modal isVisible={showModal} onClose={resetModalState}>
					{editJobs ? (
						<EditJobs
							job={editJobsData}
							onEditJobs={editJobsHandler}
							onClose={() => setShowModal(false)}
						/>
					) : (
						<AddJobs
							onAddJobs={addJobsHandler}
							onClose={() => setShowModal(false)}
						/>
					)}
				</Modal>
				<Footer />
			</div>
		);
	}

	return (
		<div className="bg-neutral-900 flex flex-col items-center justify-between">
			<Navbar />
			<div className="my-[16rem]">
				<h1 className="text-center text-4xl font-semibold text-white mx-[2rem]">
					You Must be logged in to view this page
				</h1>
			</div>
			<Footer />
		</div>
	);
}
