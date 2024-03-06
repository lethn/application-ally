/** @format */
"use client"
import "@/app/globals.css";
import Navbar from "./ui/navbar";
import Header from "./ui/header";
import { useState } from "react";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<main className={`${darkMode && "dark"}`}>
			<div className="min-h-screen dark:bg-neutral-900">
				<button
					className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
					onClick={toggleDarkMode}>
					{darkMode ? "Light" : "Dark"}
				</button>
				<Navbar />
				<Header />
			</div>
		</main>
	);
}
