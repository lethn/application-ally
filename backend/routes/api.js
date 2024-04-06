/** @format */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserModel = require("../models/user");
const JobApplication = require("../models/user");

dotenv.config();

const app = express();
const router = express.Router();

const PORT = process.env.PORT;
const MONGO_STR = process.env.MONGO_URL;

app.use(express.json());

app.use("/api/application-ally", router);

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
		const deletedUser = await UserModel.findByIdAndDelete(
			req.params.id
		);
		if (!deletedUser) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log("Database is connected successfully");
		app.listen(PORT, () => {
			console.log(`Server is running on port http://localhost:${PORT}`);
		});
	})
	.catch(e => {
		console.log(e);
	});
