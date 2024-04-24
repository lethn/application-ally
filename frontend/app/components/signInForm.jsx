/** @format */

import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/user";
import { Input, CircularProgress } from "@nextui-org/react";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const { signIn, isLoggedIn } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		setIsLoading(true);

		try {
			setButtonDisabled(true);
			await signIn(email, password);
		} catch (error) {
			console.error("Error signing in:", error);
		} finally {
			setButtonDisabled(false);
			setIsLoading(false);
		}
	};

	const LoadingComponent = () => {
		return (
			<div className="text-xl font-semibold text-center">
				<p>Loading...</p>
			</div>
		);
	};

	return (
		<div className="container w-[400px] h-[400px] p-[40px] bg-gray-300 rounded-md flex flex-col justify-start gap-5">
			<form onSubmit={handleLogin}>
				{/* <input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email Address"
					className="w-[100%] p-[10px] mb-[20px] rounded-md text-black bg-white"
				/> */}
				<Input
					isRequired
					type="email"
					label="Email"
					id="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					size="lg"
					className="text-lg font-bold text-black"
				/>
				<br />
				{/* <input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onChange={e => setPassword(e.target.value)}
					className="w-[100%] p-3 mb-2 rounded-md bg-white text-black"
					value={password}
				/> */}
				<Input
					isRequired
					type="password"
					id="password"
					name="password"
					label="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					size="lg"
					className="text-lg font-bold text-black mb-2"
				/>
				<button
					className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-800 font-semibold block mx-auto"
					type="submit"
					value="Log In"
					disabled={isButtonDisabled}>
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
			<div className="">
				{isLoading && <CircularProgress label="Loading..." />}
			</div>
		</div>
	);
};

export default SignInForm;
