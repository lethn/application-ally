"use client";
import React, { useState } from 'react';
import './SearchJobs.css';

const SearchJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4);
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
            setJobs(data.data); // Assuming data is an object with a 'data' property containing the job array
            setCurrentPage(1); // Reset pagination to first page when new data is fetched
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

    return (
        <div className="searchJobs">
            <h1 className="header">Search Jobs</h1>
            <div className="search">
                <form className="searchBox" onSubmit={handleSubmit}>
                    <div className="nameSearch">
                        <label>Job Name:</label>
                        <input
                            type="text"
                            className="input"
                            id="name"
                            name="name"
                            value={searchParams.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="locationSearch">
                        <label>Location:</label>
                        <input
                            type="text"
                            className="input"
                            id="location"
                            name="location"
                            value={searchParams.location}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="searchBtn">Search</button>
                    </div>
                </form>
                <div className="listContainer">
                    {currentJobs.length > 0 ? (
                        <ul className="jobs">
                            {currentJobs.map((job, index) => (
                                <li key={index}>
                                    <p className="title">Title: {job.job_title}</p>
                                    <p className="elements">Company: {job.publisher_name}</p>
                                    <p className="elements">Location: {job.location}</p>
                                    <p className="elements">Salary: ${job.min_salary} - ${job.max_salary}</p>
                                    <p className="elements">Website: <a href={job.publisher_link} target="_blank" rel="noopener noreferrer">{job.publisher_link}</a></p>
                                    <button>Add</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )}
                    <div className="pages">
                        {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, i) => (
                            <button className="pageBtn" key={i} onClick={() => pages(i + 1)}>{i + 1}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchJobs;