import "@/app/globals.css"; 
import { SignIn } from "@clerk/nextjs";
import Navbar from "../ui/navbar";

export default function Page() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center p-10">
				<SignIn />
			</div>
		</>
	);
}
