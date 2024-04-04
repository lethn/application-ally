/** @format */
"use client";
import "@/app/globals.css";

import Navbar from "../components/navbar";
import SignInForm from "../components/signInForm";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	return (
		<main>
			<div className="min-h-screen bg-neutral-900">
				<Navbar />
				<div className="flex justify-center h-[20vh]">
					<p className="gradient-text text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
						Sign In
					</p>
				</div>
				<div className="flex justify-center">
					<SignInForm
					/>
				</div>
			</div>
		</main>
	);
}
