/** @format */

// jobApplication.js
// const dotenv = require("dotenv");
const mongoose = require("mongoose");

// dotenv.config();

// const MONGO_STR = process.env.MONGO_STR;

// async function connectToDatabase() {
// 	try {
// 		await mongoose.connect(MONGO_STR);
// 		console.log("Connected to MongoDB through Mongoose");
// 	} catch (error) {
// 		console.error("Error connecting to MongoDB:", error);
// 	}
// }

// connectToDatabase();

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
