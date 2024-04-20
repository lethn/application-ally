import React from 'react';
import JobsCard from './jobsCard';

const JobsCardList = (props) => {
    return (
        <div className="grid gap-4 border border-gray-400 rounded-md p-6 bg-sky-900 m-5 mt-1">
            {props.items.map((job) => (
                <JobsCard
                    key={job._id}
                    job_id={job._id}
                    user_id={job.userId}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    website={job.website}
                    status={job.status}
                    onDeleteJobs={props.onDeleteJobs}
                    onIsEditJobs={props.onIsEditJobs}
                    onStatusChange={props.onStatusChange}
                />
            ))}
        </div>
    );
};

export default JobsCardList;
