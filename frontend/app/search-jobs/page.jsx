/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import Footer from "@/app/components/footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/user";

export default function Page() {
	const [currentPage, setCurrentPage] = useState(1);
	const [jobsPerPage] = useState(4);
	const { isLoggedIn } = useContext(AuthContext);

	const jobs = [

		{
			title: "Job Title 1",
			company: "Company A",
			location: "Location A",
			salary: "$50,000 - $60,000",
			website: "www.example.com"
		},
		{
			title: "Job Title 2",
			company: "Company B",
			location: "Location B",
			salary: "$60,000 - $70,000",
			website: "www.example.com"
		},
		{
			title: "Job Title 3",
			company: "Company C",
			location: "Location C",
			salary: "$70,000 - $80,000",
			website: "www.example.com"
		},
		{
			title: "Job Title 4",
			company: "Company D",
			location: "Location D",
			salary: "$80,000 - $90,000",
			website: "www.example.com"
		},
		{
			title: "Job Title 5",
			company: "Company E",
			location: "Location E",
			salary: "$90,000 - $100,000",
			website: "www.example.com"
		},
		{
			title: "Job Title 6",
			company: "Company F",
			location: "Location F",
			salary: "$100,000 - $110,000",
			website: "www.example.com"
		}
	];

	const indexOfLastJob = currentPage * jobsPerPage;
	const indexOfFirstJob = indexOfLastJob - jobsPerPage;
	const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

	const pages = pageNumber => setCurrentPage(pageNumber);
	if (isLoggedIn) {
		return (
			<div className="min-h-screen bg-neutral-900">
				<Navbar />
				<p className="gradient-text text-center text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
					Explore New Jobs
				</p>
				<div>
					<div className="flex flex-col items-center gap-[1rem] mx-10">
						<div className="mt-10">
							<span className="text-white font-semibold text-2xl mr-3 inline">
								Title:
							</span>
							<input
	
								className="bo
		der border-gray-300 font-semibold p-2 rounded-md mr-1 w-[20rem]"
								type="text"
								placeholder="React Developer"
							/>
						</div>
						<div className="mt-2">
							<h1 className="text-white font-semibold text-2xl inline mr-2">
								Location:
	
							</h1>
		
							<input
								className="border border-gray-300 p-2 font-semibold rounded-md w-[20rem] mr-3"
								type="text"
								placeholder="Athens, GA"
							/>
	
							<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md max-w-[5rem]">
								Find
							</button>
						</div>
					</div>
				</div>

				<div className=" bg-sky-900 p-4 mt-10 mx-[2.5rem] sm:mx-[5rem] md:mx-[7.5rem] lg:mx-[10rem] xl:mx[15rem] rounded-lg flex flex-col gap-3">
					{currentJobs.map((job, index) => (
						<div
							key={index}
							className="bg-neutral-800 text-white p-5 rounded-xl font-semibold ">
							<p className="">{job.title}</p>
							<ul className="">
								<li>{job.company}</li>
								<li>{job.location}</li>
								<li>{job.salary}</li>
								<li>
									<a href={job.website}>{job.website}</a>
								</li>
							</ul>
							<button className="px-2 py-1 rounded-lg bg-red-400 hover:bg-red-600 mt-2">
								Add
							</button>
						</div>
					))}
					<div className="text-center font-medium text-xl text-white">
						{Array.from(
							{ length: Math.ceil(jobs.length / jobsPerPage) },
							(_, i) => (
								<button className="mr-3" key={i} onClick={() => pages(i + 1)}>
									{i + 1}
								</button>
							)
						)}
					</div>
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



						