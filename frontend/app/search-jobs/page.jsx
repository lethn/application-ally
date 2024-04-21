/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import Footer from "@/app/components/footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/user";
import Pagination from "../components/pagination";
import axios from "axios";


export default function Page() {
	const [currentPage, setCurrentPage] = useState(1);
	const [jobsPerPage] = useState(4);
	const { isLoggedIn } = useContext(AuthContext);
	const [jobs, setJobs] = useState([]);
	const [searchParams, setSearchParams] = useState({ name: "", location: "" });
	const userId = typeof window !== 'undefined' ? localStorage.getItem("userID") : null;

	const fetchJobs = async () => {
		const { name, location } = searchParams;
		const url = `https://job-salary-data.p.rapidapi.com/job-salary?job_title=${name}&location=${location}&radius=200`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"90ff9350d0msh633bbb48131857dp155a34jsnb483e260a2d6",
					"X-RapidAPI-Host": "job-salary-data.p.rapidapi.com"
				}
			});

			if (!response.ok) {
				throw new Error(
					`Failed to fetch data: ${response.status} ${response.statusText}`
				);
			}

			const data = await response.json();
			console.log("Fetched data:", data);
			setJobs(data.data);
			setCurrentPage(1);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setSearchParams({ ...searchParams, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetchJobs();
	};

	const indexOfLastJob = currentPage * jobsPerPage;
	const indexOfFirstJob = indexOfLastJob - jobsPerPage;
	const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
	const changePageHandler = pageNumber => {
		setCurrentPage(pageNumber);
	};

	const addJobHandler = (job) => {
		axios
			.post('http://localhost:8000/api/add-job-application', job)
			.then((res) => {
				console.log("Added New Application");
				console.log(res.data);
			})
			.catch((error) => {
				console.error("Error adding job application:", error);
			});
	};


	// const pages = pageNumber => setCurrentPage(pageNumber);

	if (isLoggedIn) {
		return (
			<div className="min-h-screen bg-neutral-900">
				<Navbar />
				<p className="gradient-text text-center text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
					Explore New Jobs
				</p>
				<div className="mt-[3rem]">
					<form
						className="flex flex-col items-center gap-4 justify-stretch"
						onSubmit={handleSubmit}>
						<div className="">
							<h1 className="text-white text-center font-semibold text-2xl mr-3">
								Title:
							</h1>
							<input
								className="rounded-lg px-4 py-2 mt-3 font-semibold"
								type="text"
								id="name"
								placeholder="Software Developer"
								name="name"
								value={searchParams.name}
								onChange={handleInputChange}
							/>
						</div>
						<div className="mt-2">
							<h1 className="text-white text-center font-semibold text-2xl mr-3">
								Location:
							</h1>

							<input
								className="rounded-lg px-4 py-2 my-3 font-semibold"
								type="text"
								placeholder="Athens, GA"
								id="location"
								name="location"
								value={searchParams.location}
								onChange={handleInputChange}
							/>

							<button className="block bg-blue-500 hover:bg-blue-700 font-semibold text-white px-4 py-2 rounded-md max-w-[5rem] mx-auto">
								Find
							</button>
						</div>
					</form>
				</div>

				<div className="">
					{currentJobs.length > 0 ? (
						<div className="grid gap-4 rounded-md p-6 bg-slate-600 mx-20 my-5">
							{currentJobs.map((job, index) => (
								<div
									key={index}
									className="flex p-5 rounded-lg mb-4 text-white bg-neutral-800 justify-between">
										
									<div>
										<h3 className="font-bold text-blue-500 text-2xl px-2 py-1">
											{job.job_title}
										</h3>
										<p className="text-white px-2 py-1 text-xl font-semibold">
											{job.publisher_name}
										</p>
										<p className="text-white px-2 py-1 text-lg">{job.location}</p>
										<p className="text-white px-2 py-1 text-lg pb-6">
											${job.min_salary.toLocaleString()} - ${job.max_salary.toLocaleString()}
										</p>
										<div className="px-2 py-1">
											<a
												className="underline hover:text-blue-500 text-white text-lg"
												href={job.publisher_link}
												target="_blank"
												rel="noopener noreferrer">
												{job.publisher_link}
											</a>
										</div>
									</div>
									
									<div className="flex flex-col">
										<button
											className="p-2 rounded-lg bg-slate-500 hover:bg-green-500 mt-2 text-white font-semibold"
											onClick={() => addJobHandler({
												userId: userId,
												title: job.job_title,
												company: job.publisher_name,
												location: job.location,
												salary: `$${job.min_salary.toLocaleString()} - $${job.max_salary.toLocaleString()}`,
												website: job.publisher_link,
												status: "Applied"
											})}>
											Add Job
										</button>
									</div>
									
								</div>
							))}
						</div>
					) : (
						<p>No results found</p>
					)}
					<Pagination
						currentPage={currentPage}
						totalPages={Math.ceil(currentJobs.length / jobsPerPage)}
						onChangePage={changePageHandler}
					/>
					{/* <div className="text-center font-medium text-xl text-white">
						{Array.from(
							{ length: Math.ceil(jobs.length / jobsPerPage) },
							(_, i) => (
								<button className="mx-2 px-4 py-2 rounded-md" key={i} onClick={() => pages(i + 1)}>
									{i + 1}
								</button>
							)
						)}
					</div> */}
				</div>
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
