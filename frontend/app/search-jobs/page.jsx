/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import Footer from "@/app/components/footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/user";
import Pagination from "../components/pagination";


export default function Page() {
	const [currentPage, setCurrentPage] = useState(1);
	const [jobsPerPage] = useState(4);
	const { isLoggedIn } = useContext(AuthContext);
	const [jobs, setJobs] = useState([]);
	const [searchParams, setSearchParams] = useState({ name: "", location: "" });

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

							<button className="block bg-blue-500 hover:bg-blue-800 font-semibold text-white px-4 py-2 rounded-md max-w-[5rem] mx-auto">
								Find
							</button>
						</div>
					</form>
				</div>

				<div className="flex flex-col">
					{currentJobs.length > 0 ? (
						<div className=" bg-slate-500 mx-[2rem] md:mx-auto sm:mx-[4rem] p-4 mt-10 rounded-lg flex flex-col gap-3 ">
							{currentJobs.map((job, index) => (
								<div
									key={index}
									className="bg-neutral-800 text-white p-5 rounded-xl font-semibold ">
									<ul className="text-xl text-blue-500">{job.job_title}</ul>
									<li className="">{job.publisher_name}</li>
									<li className="">{job.location}</li>
									<li className="">
										${job.min_salary} - ${job.max_salary}
									</li>
									<li className="">
										Website:{" "}
										<a
											href={job.publisher_link}
											target="_blank"
											rel="noopener noreferrer">
											{job.publisher_link}
										</a>
									</li>
									<button className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 mt-2">
										Add Job
									</button>
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
