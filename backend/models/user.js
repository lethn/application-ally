/** @format */

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const MONGO_STR = process.env.MONGO_STR;

async function connectToDatabase() {
	try {
		await mongoose.connect(MONGO_STR);
		console.log("Connected to MongoDB through Mongoose");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
}

connectToDatabase();

const Schema = mongoose.Schema;

// Mongoose will automatically create an _id field of type ObjectId for each document

const UserSchema = new Schema({
	username: { type: String },
	password: { type: String }
});

// Creating model from schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
