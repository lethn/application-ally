/** @format */

import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/user";
import Link from "next/link";

const SignUpForm = () => {
	const { signIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const response = await axios.post(
				`http://localhost:8000/api/signup`,
				{
					email,
					password
				}
			);

			// If sign up successful, automatically sign in the user
			if (response.status === 201) {
				await signIn(email, password);
			}
		} catch (error) {
			console.error("Error signing up:", error);
			// Handle error, e.g., display an error message to the user
		}
	};

	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email Address"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<input
					type="password"
					id="confirm_password"
					name="confirm_password"
					placeholder="Confirm Password"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
				<button
					className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-800 font-semibold block mx-auto"
					type="submit"
					value="register">
					Register
				</button>
			</form>
			<div className="text-center mt-3">
				<p className="text-lg font-medium">
					Already a user?{" "}
					<Link
						className="transition text-blue-600 decoration-sky-500 hover:text-blue-900  p-[3px] text-lg font-medium"
						href="/sign-in">
						Login here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
