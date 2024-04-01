/** @format */

import React from "react";

const SignUpForm = () => {
	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md">
			<form action="/register" method="POST">
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/>
				<br />
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email Address"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/>
				<br />
				<input
					type="password"
					id="confirm_password"
					name="confirm_password"
					placeholder="Confirm Password"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/>
				<br />
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
					<a
						className="transition text-blue-600 decoration-sky-500 hover:text-blue-900  p-[3px] text-lg font-medium"
						href="/">
						Login here
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
