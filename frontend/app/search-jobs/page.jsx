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
	const [jobs, setJobs] = useState([]);
	const [searchParams, setSearchParams] = useState({ name: '', location: '' });

	const fetchJobs = async () => {
        const { name, location } = searchParams;
        const url = `https://job-salary-data.p.rapidapi.com/job-salary?job_title=${name}&location=${location}&radius=200`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '82f28f4150msh03585cead1cf509p1508dajsn994b7306ff4a',
                    'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Fetched data:', data);
            setJobs(data.data); 
            setCurrentPage(1); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({ ...searchParams, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchJobs();
    };

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
	
								className="border border-gray-300 font-semibold p-2 rounded-md mr-1 w-[20rem]"
								type="text"
								placeholder="React Developer"
								value={searchParams.name}
                            	onChange={handleInputChange}
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
								value={searchParams.location}
                            	onChange={handleInputChange}
							/>
	
							<button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md max-w-[5rem]" onSubmit={handleSubmit}>
								Find
							</button>
						</div>
					</div>
				</div>

				<div className=" bg-sky-900 p-4 mt-10 mx-[2.5rem] sm:mx-[5rem] md:mx-[7.5rem] lg:mx-[10rem] xl:mx[15rem] rounded-lg flex flex-col gap-3 border">
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
					{currentJobs.length > 0 ? (
                        <div className=" bg-sky-900 p-4 mt-10 mx-[2.5rem] sm:mx-[5rem] md:mx-[7.5rem] lg:mx-[10rem] xl:mx[15rem] rounded-lg flex flex-col gap-3 border">
                            {currentJobs.map((job, index) => (
                                <div key={index}
									className="bg-neutral-800 text-white p-5 rounded-xl font-semibold ">
                                    <ul className="">Title: {job.job_title}</ul>
										<li className="">Company: {job.publisher_name}</li>
										<li className="">Location: {job.location}</li>
										<li className="">Salary: ${job.min_salary} - ${job.max_salary}</li>
										<li className="">Website: <a href={job.publisher_link} target="_blank" rel="noopener noreferrer">{job.publisher_link}</a></li>
                                    <button className="px-2 py-1 rounded-lg bg-red-400 hover:bg-red-600 mt-2">
										Add
									</button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No results found</p>
                    )}
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



						