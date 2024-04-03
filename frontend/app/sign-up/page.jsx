/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

export default function Page() {
	return (
		<main>
			<div className="min-h-screen bg-neutral-900">
				<Navbar />
				<div className="flex justify-center h-[20vh]">
					<p className="gradient-text text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
						Sign Up
					</p>
				</div>
				<div className="flex justify-center">
				<SignUpForm/></div>
			</div>
		</main>
	);
}
