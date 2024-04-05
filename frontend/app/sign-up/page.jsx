/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import SignUpForm from "../components/signUpForm";
import Footer from "../components/footer";

export default function Page() {
	return (
		<div className="max-h-screen bg-neutral-900">
			<Navbar />
			<div className="flex justify-center h-[20vh]">
				<p className="gradient-text text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
					Sign Up
				</p>
			</div>
			<div className="flex flex-col items-center justify-center">
				<SignUpForm />
				<Footer />
			</div>
		</div>
	);
}
