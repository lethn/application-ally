/** @format */

"use client";
import { useState, useContext, useEffect } from "react"; // Updated import
import axios from "axios";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import Modal from "../components/modal";
import JobsCardList from "../components/jobsCardList";
import AddJobs from "../components/addJobs";
import Footer from "@/app/components/footer";
import { AuthContext } from "../contexts/user"; // Import AuthContext
import EditJobs from "../components/editJobs";
import Pagination from "../components/pagination";

export default function Applications() {

	const { isLoggedIn } = useContext(AuthContext);
	const userId = typeof window !== 'undefined' ? localStorage.getItem("userID") : null;

	const [jobs, setJobs] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [editJobs, setEditJobs] = useState(false);
	const [editJobsData, setEditJobsData] = useState("");

	// Jobs Page Display
	const [currentPage, setCurrentPage] = useState(1);
	const jobsPerPage = 4;
	const indexOfLastJob = currentPage * jobsPerPage;
	const indexOfFirstJob = indexOfLastJob - jobsPerPage;
	const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredJobs, setFilteredJobs] = useState([]);
	const [noJobsFound, setNoJobsFound] = useState(false);

	useEffect(() => {
		console.log(userId);
		axios
			.get(`http://localhost:8000/api/job-applications/user/${userId}`)
			.then(res => {
				console.log(res.data);
				const reversedJobs = res.data.reverse();
				setJobs(reversedJobs);
			})
			.catch(err => {
				console.error('Error fetching job applications data:', err);
			});
	}, []);

	const changePageHandler = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const addJobsHandler = (job) => {
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
				if (job._id === editedJob.id) {
					job.title = editedJob.title;
					job.company = editedJob.company;
					job.location = editedJob.location;
					job.salary = editedJob.salary;
					job.website = editedJob.website;
					job.status = editedJob.status;
				}
				return job;
			});
		});

		resetModalState();
		console.log(editedJob);
	};

	const deleteJobsHandler = (id) => {
		setJobs(prevJobs => {
			return prevJobs.filter(job => job._id !== id);
		});
	};

	const updateJobStatus = (id, newStatus) => {
		setJobs(prevJobs => {
			return prevJobs.map(job => {
				if (job._id === id) {
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

	const searchQueryHandler = (event) => {
		setSearchQuery(event.target.value);
	};

	const onClickSearchQueryHandler = () => {
		if (searchQuery.trim() === "") {
			setFilteredJobs([]);
		} else {
			const filtered = jobs.filter(job => {
				return job.title.toLowerCase().includes(searchQuery.toLowerCase());
			});
			if (filtered.length === 0) {
				alert("No matching jobs found.");
				setFilteredJobs([]);
				setNoJobsFound(true);
			} else {
				setFilteredJobs(filtered);
				setNoJobsFound(false);
			}
		}
	};

	const resetSearchQueryHandler = () => {
		setSearchQuery("");
		setFilteredJobs([]);
		setNoJobsFound(false);
	};

	if (isLoggedIn) {
		return (
			<div className="bg-neutral-900">
				<Navbar />

				<div className="grid grid-cols-4 mx-[2rem]">
					{/* Column 1 */}
					<div className="mt-[7rem] ml-3 flex flex-col gap-[1rem] col-span-1 p-1">
						<div className="border rounded-lg p-3 border-gray-600 text-white bg-slate-600">
							<h2 className="mb-2 text-lg font-bold text-white">Statistics</h2>
							<p>Total Applications: {jobs.length}</p>
						</div>
						<div className="border rounded-md p-3 border-gray-600 bg-slate-600">
							<h2 className="text-lg font-bold mb-2 text-white">Search Bar</h2>
							<div className="flex flex-col gap-[1rem]">
								<input
									id="searchBar"
									className="border border-gray-300 rounded-md mr-1 p-2"
									type="text"
									placeholder="Enter here"
									value={searchQuery}
									onChange={searchQueryHandler}
								/>
								<div>
									<button
										className="p-2 mr-4 mb-1 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md max-w-[5rem] font-semibold"
										onClick={onClickSearchQueryHandler}>
										Find
									</button>
									<button
										className="p-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md max-w-[5rem] font-semibold"
										onClick={resetSearchQueryHandler}
									>
										Reset
									</button>
								</div>
							</div>
						</div>

						<div className="border rounded-md p-4 border-gray-600 mb-4 bg-slate-600">
							<h2 className="text-lg font-bold text-white">Status</h2>
							<div className="text-white">
								<button className="p-2 m-2 rounded-md bg-green-500 hover:bg-green-600 font-semibold">
									Applied
								</button>
								<button className=" p-2 m-2 rounded-md bg-yellow-500 hover:bg-yellow-600 font-semibold">
									Interview
								</button>
								<button className=" p-2 m-2 rounded-md bg-red-500 hover:bg-red-600 font-semibold">
									Rejected
								</button>
								<button className=" p-2 m-2 rounded-md bg-neutral-500 hover:bg-neutral-600 font-semibold">
									Not Applied
								</button>
								<button className=" p-2 m-2 rounded-md bg-sky-500 hover:bg-sky-600 font-semibold">
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
									className="hover:bg-blue-800 p-3 m-2 mb-4 bg-blue-500 text-white rounded-md font-semibold"
									onClick={() => setShowModal(true)}>
									Add Job
								</button>
								<button className="hover:bg-blue-800 p-3 m-2 mb-4 bg-blue-500 text-white rounded-md font-semibold">
									<Link href="search-jobs">Explore New Jobs</Link>
								</button>
							</div>
						</div>

						{noJobsFound ? (
							<div className="text-center text-red-500 font-semibold mt-2">
								No jobs found.
							</div>
						) : (
							<div>
								<JobsCardList
									items={filteredJobs.length > 0 ? filteredJobs : currentJobs}
									onDeleteJobs={deleteJobsHandler}
									onIsEditJobs={isEditJobs}
									onStatusChange={updateJobStatus}
								/>

								<Pagination
									currentPage={currentPage}
									totalPages={Math.ceil((filteredJobs.length > 0 ? filteredJobs.length : jobs.length) / jobsPerPage)}
									onChangePage={changePageHandler}
								/>
							</div>
						)}
						
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
