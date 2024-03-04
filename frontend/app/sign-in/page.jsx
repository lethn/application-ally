/** @format */

import "@/app/globals.css"; 
import { SignIn } from "@clerk/nextjs";
import Navbar from "../ui/navbar";

export default function page() {
	return (
		<>
			<Navbar />
			<div className="ml-10rem">
				<SignIn />
			</div>
		</>
	);
}
