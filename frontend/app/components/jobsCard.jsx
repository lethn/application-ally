import React, { useState } from 'react';

const JobsCard = (props) => {
    const [inputStatus, setStatus] = useState(props.status);

    const statusChangeHandler = (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        props.onStatusChange(props.id, newStatus);
        console.log(newStatus);
    };

    const handleEdit = () => {
        props.onIsEditJobs(props);
        console.log("Edit job:", props.title);
    };

    const handleDelete = () => {
        props.onDeleteJobs(props.id);
        console.log("Delete job:", props.title);
    };
    
    return (
        <div className="flex border border-gray-300 p-4 rounded-md mb-4 text-white bg-slate-800 justify-between">
            <div>
                <h3 className="font-semibold text-blue-500 text-2xl px-2 py-1">{props.title}</h3>
                <p className="text-white px-2 py-1 text-lg">{props.company}</p>
                <p className="text-white px-2 py-1 text-lg">{props.location}</p>
                <p className="text-white px-2 py-1 text-lg pb-6">{props.salary}</p>
                <a className="underline text-white px-2 py-1 text-lg" href={props.website} target="_blank" rel="noopener noreferrer">
                    {props.website}
                </a>
            </div>
            <div className="flex flex-col">
                <select
                    className="border border-gray-300 p-2 m-2 rounded-md text-black font-bold"
                    value={inputStatus}
                    onChange={statusChangeHandler}>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not Applied">Not Applied</option>
                    <option value="Offered">Offered</option>
                </select>
                <button
                    className="bg-slate-700 hover:bg-orange-500 border p-2 m-2 rounded-md text-white"
                    onClick={handleEdit}>
                    Edit
                </button>
                <button
                    className="bg-slate-700 hover:bg-red-500 border p-2 m-2 rounded-md text-white"
                    onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );

}

export default JobsCard;
