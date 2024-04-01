/** @format */

import React from "react";

const RegistrationForm = () => {
	return (
		<div
			className="container"
			style={{
				width: "300px",
				height: "400px",
				padding: "40px",
				backgroundColor: "rgb(218, 215, 215)",
				borderRadius: "8px"
			}}>
			<form action="/register" method="POST">
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					style={{
						width: "100%",
						padding: "10px",
						marginBottom: "20px",
						border: "none",
						borderRadius: "4px",
						backgroundColor: "white",
						color: "#fff"
					}}
				/>
				<br />
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					style={{
						width: "100%",
						padding: "10px",
						marginBottom: "20px",
						border: "none",
						borderRadius: "4px",
						backgroundColor: "white",
						color: "#fff"
					}}
				/>
				<br />
				<input
					type="password"
					id="confirm_password"
					name="confirm_password"
					placeholder="Confirm Password"
					style={{
						width: "100%",
						padding: "10px",
						marginBottom: "20px",
						border: "none",
						borderRadius: "4px",
						backgroundColor: "white",
						color: "#fff"
					}}
				/>
				<br />
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email Address"
					style={{
						width: "100%",
						padding: "10px",
						marginBottom: "20px",
						border: "none",
						borderRadius: "4px",
						backgroundColor: "white",
						color: "#fff"
					}}
				/>
				<br />
				<input
					className="transition px-2 py-2 mx-1 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
					type="submit"
					value="Register"
					style={{ display: "block", margin: "0 auto", width: "auto" }}
				/>
			</form>

			<p>
				Already a user?{" "}
				<a
					className="transition text-blue-500 hover:underline decoration-sky-500 hover:text-blue-500  p-[3px]"
					href="/js2-template/userLogin.html">
					Login here
				</a>
			</p>
		</div>
	);
};

export default RegistrationForm;
