/** @format */
"use client";
import "@/app/globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

export default function Home() {
	return (
		<main className=" h-[100vh]">
			<div className="min-h-screen bg-neutral-900">
				<Navbar />
				<Header />
			</div>
		</main>
	);
}
