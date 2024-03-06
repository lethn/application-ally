/** @format */

import Link from "next/link";
import Image from "next/image";
import clogo from "@/app/assets/logo.png";

export default function Navbar() {
	return (
		<div id="navbarDiv">
			<ul className="navbar">
				<li className="mr-auto">
					<Link href="/">
						<Image
							src={clogo}
							width={500}
							height={500}
							className="rounded-md w-[4rem]"
							alt="Company Logo"
						/>
					</Link>
				</li>
				<li>
					<Link
						href="/"
						className="transition dark:text-white hover:underline decoration-sky-500 hover:text-blue-500  p-[5px]  ">
						Home
					</Link>
				</li>
				<li>
					<Link
						href="dashboard"
						className="transition dark:text-white hover:underline decoration-sky-500 hover:text-blue-500  p-[5px]  ">
						Dashboard
					</Link>
				</li>
				<li>
					<Link
						href="explore"
						className="transition dark:text-white hover:underline decoration-sky-500 hover:text-blue-500  p-[5px]">
						Explore
					</Link>
				</li>
				<li className="transition px-2 py-2 mx-1 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 ease-in-out delay-150 duration-300">
					<Link href="sign-in" className=" transition" id="signIn">
						Sign In
					</Link>
				</li>
				<li className="transition px-2 py-2 mx-1 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 ease-in-out delay-150 duration-300">
					<Link href="sign-up" className="" id="signIn">
						Sign Up
					</Link>
				</li>
			</ul>
		</div>
	);
}
