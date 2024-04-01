/** @format */

import React from "react";

const SignInForm = () => {
	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md flex flex-col justify-start gap-5">
			<form action="/register" method="POST">
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
				/>
				<br />
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
				/>
				<button
					className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-800 font-semibold block mx-auto"
					type="submit"
     value="Log In"
    >
					Log In
				</button>
			</form>
			<p className="text-lg font-medium ">
				Not a user?{" "}
				<a
					className="transition text-blue-600 decoration-sky-500 hover:text-blue-900  p-[3px] text-lg font-medium"
					href="/">
					Sign Up here
				</a>
			</p>
		</div>
	);
};

export default SignInForm;
