"use client";
import React, { useState } from 'react';
import './SearchJobs.css';

const SearchJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4);

    const jobs = [
        { title: "Job Title 1", company: "Company A", location: "Location A", salary: "$50,000 - $60,000", website: "www.example.com" },
        { title: "Job Title 2", company: "Company B", location: "Location B", salary: "$60,000 - $70,000", website: "www.example.com" },
        { title: "Job Title 3", company: "Company C", location: "Location C", salary: "$70,000 - $80,000", website: "www.example.com" },
        { title: "Job Title 4", company: "Company D", location: "Location D", salary: "$80,000 - $90,000", website: "www.example.com" },
        { title: "Job Title 5", company: "Company E", location: "Location E", salary: "$90,000 - $100,000", website: "www.example.com" },
        { title: "Job Title 6", company: "Company F", location: "Location F", salary: "$100,000 - $110,000", website: "www.example.com" }
    ];

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const pages = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="searchJobs">
            <h1 className="header">Search Jobs</h1>
            <div className="search">
                <form className="searchBox">
                    <div className="nameSearch">
                        <label>Job Name:</label>
                        <input type="text" className="input" id="name" name="name"></input>
                    </div>
                    <div className="locationSearch">
                        <label>Location:</label>
                        <input type="text" className="input" id="location" name="location"></input>
                        <button className="searchBtn">Search</button>
                    </div>
                </form>
                <div className="listContainer">
                    {currentJobs.map((job, index) => (
                        <div key={index} className="jobs">
                            <p className="title">{job.title}</p>
                            <ul className="elements">
                                <li>{job.company}</li>
                                <li>{job.location}</li>
                                <li>{job.salary}</li>
                                <li>{job.website}</li>
                            </ul>
                            <button className="add">Add</button>
                        </div>
                    ))}
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
