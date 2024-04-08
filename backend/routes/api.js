/** @format */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserModel = require("../models/user");
const JobApplication = require("../models/jobApplication");

dotenv.config();

const app = express();
const router = express.Router();

const PORT = process.env.PORT;
const MONGO_STR = process.env.MONGO_STR;

app.use(express.json());

app.use("/", router);

// START OF USER ROUTES

// get all users
router.get("/users", async (req, res) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// get specific user
router.get("/user/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(user);
	} catch (error) {
		console.error("Error fetching user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// add a new user
router.post("/add-user", async (req, res) => {
	try {
		const newUser = await UserModel.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		console.error("Error adding user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// update specific user
router.put("/update-user/:id", async (req, res) => {
	try {
		const updatedUser = await UserModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedUser) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(updatedUser);
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

//delete a specific user
router.delete("/delete-user/:id", async (req, res) => {
	try {
		const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
		if (!deletedUser) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// START OF JOB APPLICATION ROUTES

// get all job applications
router.get("/job-applications", async (req, res) => {
	try {
		const applications = await JobApplication.find(); // Corrected typo in variable name
		res.json(applications);
	} catch (error) {
		console.error("Error fetching applications:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// get specific job application
router.get("/job-applications/:id", async (req, res) => {
	try {
		const application = await JobApplication.findById(req.params.id);
		if (!application) {
			return res.status(404).json({ error: "application not found" });
		}
		res.json(application);
	} catch (error) {
		console.error("Error fetching application:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// add a new application
router.post("/add-job-application", async (req, res) => {
	try {
		const application = await JobApplication.create(req.body);
		res.status(201).json(application);
	} catch (error) {
		console.error("Error adding application:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// update specific application
router.put("/update-job-application/:id", async (req, res) => {
	try {
		const updatedApplication = await JobApplication.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedApplication) {
			return res.status(404).json({ error: "application not found" });
		}
		res.json(updatedApplication);
	} catch (error) {
		console.error("Error updating application:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

//delete a specific application
router.delete("/delete-job-application/:id", async (req, res) => {
	try {
		const deletedApplication = await JobApplication.findByIdAndDelete(
			req.params.id
		);
		if (!deletedApplication) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json({ message: "application deleted successfully" });
	} catch (error) {
		console.error("Error deleting application:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

mongoose
	.connect(MONGO_STR)
	.then(() => {
		console.log("Database is connected successfully");
		app.listen(PORT, () => {
			console.log(`Server is running on port http://localhost:${PORT}`);
		});
	})
	.catch(e => {
		console.log(e);
	});
