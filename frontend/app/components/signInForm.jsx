/** @format */

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/user";
import { useRouter } from "next/navigation";
import Applications from "../applications/page";

const SignInForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (isLoggedIn) {
			router.push("/applications");
		}
	}, [isLoggedIn]);

	const handleLogin = e => {
		e.preventDefault();
		// Simulated authentication logic
		if (username === "exampleUser" && password === "examplePassword") {
			setIsLoggedIn(true);
		} else {
			alert("Invalid username or password");
		}
	};

	return (
			<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md flex flex-col justify-start gap-5">
				<form onSubmit={handleLogin}>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						placeholder="Username"
						onChange={e => setUsername(e.target.value)}
						className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
					/>
					<br />
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
						className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
						value={password}
					/>
					<button
						className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-800 font-semibold block mx-auto"
						type="submit"
						value="Log In">
						Log In
					</button>
				</form>
				<p className="text-lg font-medium ">
					Not a user?
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
