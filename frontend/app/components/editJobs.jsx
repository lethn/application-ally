import React, { useState } from 'react';

const EditJobs = (props) => {
    const [inputId, setInputId] = useState(props.job.id);
    const [inputTitle, setInputTitle] = useState(props.job.title);
    const [inputCompany, setInputCompany] = useState(props.job.company);
    const [inputLocation, setInputLocation] = useState(props.job.location);
    const [inputSalary, setInputSalary] = useState(props.job.salary);
    const [inputWebsite, setInputWebsite] = useState(props.job.website);
    const [inputStatus, setInputStatus] = useState(props.job.status);

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const jobData = {
            id: inputId,
            title: inputTitle,
            company: inputCompany,
            location: inputLocation,
            salary: inputSalary,
            website: inputWebsite,
            status: inputStatus
        };

        console.log("Updated Application");
        props.onEditJobs(jobData);

        setInputTitle('');
        setInputCompany('');
        setInputLocation('');
        setInputSalary('');
        setInputWebsite('');
        setInputStatus('Applied');
    };

    return (
        <form
            className="p-4 text-xl flex flex-col gap-2 font-semibold items-start"
            onSubmit={onSubmitHandler}
        >
            <label>Job Title:</label>
            <input
                id="title"
                type="text"
                className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
                value={inputTitle}
                onChange={titleChangeHandler}
                required
            />

            <label>Company:</label>
            <input
                id="company"
                type="text"
                className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
                value={inputCompany}
                onChange={companyChangeHandler}
            />

            <label>Location:</label>
            <input
                id="location"
                type="text"
                className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
                value={inputLocation}
                onChange={locationChangeHandler}
            />
            <label>Salary:</label>
            <input
                id="salary"
                type="text"
                className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
                value={inputSalary}
                onChange={salaryChangeHandler}
            />

            <label>Website:</label>
            <input
                id="website"
                type="text"
                className="rounded-lg border-2 p-2 w-full border-blue-500 font-medium"
                value={inputWebsite}
                onChange={websiteChangeHandler}
            />

            {/* Dropdown */}
            <div className="pt-3 pb-0">
                <label>Status:</label>
                <select
                    className="border border-gray-300 p-2 ml-2 m-auto text-xl rounded-md text-black"
                    value={inputStatus}
                    onChange={statusChangeHandler}>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not Applied">Not Applied</option>
                    <option value="Offered">Offered</option>
                </select>
            </div>

            <button
                className="bg-slate-700 hover:bg-green-500 text-xl border p-2 my-auto self-end rounded-md text-white"
                type="submit"
            >
                Update Job
            </button>
        </form>
    );
};

export default EditJobs;