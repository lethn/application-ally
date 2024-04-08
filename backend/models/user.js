/** @format */

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

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
