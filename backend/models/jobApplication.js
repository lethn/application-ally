/** @format */

const mongoose = require("mongoose");

const jobApplicationsSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	jobTitle: { type: String, required: true },
	companyName: { type: String, required: true },
	location: { type: String },
	salary: { type: String },
	jobUrl: { type: String },
	status: { type: String, required: true }
});

const JobApplication = mongoose.model("JobApplication", jobApplicationsSchema);

module.exports = JobApplication;
