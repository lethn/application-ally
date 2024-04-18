/** @format */

import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/user";
// import { useRouter } from "next/navigation";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn, isLoggedIn } = useContext(AuthContext);

	const handleLogin = async e => {
		e.preventDefault();

		try {
			await signIn(email, password);
		} catch (error) {
			console.error("Error signing in:", error);
		}
	};

	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-neutral-400 rounded-md flex flex-col justify-start gap-5">
			<form onSubmit={handleLogin}>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email Address"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
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
