/** @format */

"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignInForm = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const toggleLoggedIn = () => {
		setLoggedIn(loggedIn => !loggedIn);
		console.log(loggedIn);
	};

	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md flex flex-col justify-start gap-5">
			<form>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
					required
				/>
				<br />
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
					required
				/>
				<button
					className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-800 font-semibold block mx-auto"
					type="submit"
					value="Log In"
					onClick={toggleLoggedIn}>
					Log In
				</button>
			</form>
			<p className="text-lg font-medium ">
				Not a user?{" "}
				<Link
					className="transition text-blue-600 decoration-sky-500 hover:text-blue-900  p-[3px] text-lg font-medium"
					href="/sign-up">
					Sign Up here
				</Link>
			</p>
		</div>
	);
};

export default SignInForm;
