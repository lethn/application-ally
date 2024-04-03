import React, { useState } from 'react';

const AddJobs = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputCompany, setInputCompany] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputSalary, setInputSalary] = useState('');
    const [inputWebsite, setInputWebsite] = useState('');
    const [inputStatus, setInputStatus] = useState('');

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
    };

    const companyChangeHandler = (event) => {
        setInputCompany(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setInputLocation(event.target.value);
    };

    const salaryChangeHandler = (event) => {
        setInputSalary(event.target.value);
    };

    const websiteChangeHandler = (event) => {
        setInputWebsite(event.target.value);
    };

    const statusChangeHandler = (event) => {
        setInputStatus(event.target.value);
    };

    const onAddHandler = () => {
        console.log("Added New Application:", title);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const jobData = {
            id: Math.random().toString(),
            title: inputTitle,
            company: inputCompany,
            location: inputLocation,
            salary: inputSalary,
            website: inputWebsite,
            status: inputStatus
        };

        props.onAddJobs(jobData);

        setInputTitle('');
        setInputCompany('');
        setInputLocation('');
        setInputSalary('');
        setInputWebsite('');
        setInputStatus('');
    };

    return (
        <form
            className="p-4 text-xl flex flex-col gap-2 font-semibold"
            onSubmit={onSubmitHandler}
        >
            <label>Job Title:</label>
            <input
                id="title"
                type="text"
                className="rounded-lg border-2 p-2 border-blue-500 font-medium"
                value={inputTitle}
                onChange={titleChangeHandler}
            />

            <label>Company:</label>
            <input
                id="company"
                type="text"
                className="rounded-lg border-2 p-2 border-blue-500 font-medium"
                value={inputCompany}
                onChange={companyChangeHandler}
            />

            <label>Location:</label>
            <input
                id="location"
                type="text"
                className="rounded-lg border-2 p-2 border-blue-500 font-medium"
                value={inputLocation}
                onChange={locationChangeHandler}
            />
            <label>Salary:</label>
            <input
                id="salary"
                type="text"
                className="rounded-lg border-2 p-2 border-blue-500 font-medium"
                value={inputSalary}
                onChange={salaryChangeHandler}
            />

            <label>Website:</label>
            <input
                id="website"
                type="text"
                className="rounded-lg border-2 p-2 border-blue-500 font-medium"
                value={inputWebsite}
                onChange={websiteChangeHandler}
            />

            {/* Dropdown */}
            <div>
                <select
                    className="border border-gray-300 p-1 text-xl rounded-md mr-4 text-black"
                    value={inputStatus}
                    onChange={statusChangeHandler}>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not Applied">Not Applied</option>
                    <option value="Offered">Offered</option>
                </select>
                <button
                    className="bg-slate-700 hover:bg-green-500 text-xl border px-3 py-1 rounded-md text-white"
                    onClick={onAddHandler}
                >
                    Add
                </button>
            </div>

        </form>
    );
};

export default AddJobs;