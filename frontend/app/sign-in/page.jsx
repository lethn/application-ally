/** @format */
"use client";
import "@/app/globals.css";
import { SignIn } from "@clerk/nextjs";
import Navbar from "../ui/navbar";
import { useState } from "react";

export default function Page()
{
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<main className={`${darkMode && "dark"}`}>
			<div className="min-h-screen dark:bg-neutral-900">
				<Navbar />
				<div className="flex justify-center h-[20vh]">
					<p className="gradient-text text-transparent text-5xl font-bold animate-gradient mt-[4rem]">
						Sign In
					</p>
				</div>
				<div className="flex justify-center p-10">
					<SignIn />
				</div>
				<button
					className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
					onClick={toggleDarkMode}>
					{darkMode ? "Light" : "Dark"}
				</button>
			</div>
		</main>
	);
}
