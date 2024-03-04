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
					<Link href="/" className="navLinks transition">
						Home
					</Link>
				</li>
				<li>
					<Link href="dashboard" className="navLinks transition">
						Dashboard
					</Link>
				</li>
				<li>
					<Link href="explore" className="navLinks transition">
						Explore
					</Link>
				</li>
				<li>
					<Link href="sign-in" className="navLinks transition" id="signIn">
						Sign In
					</Link>
				</li>
				<li>
					<Link href="sign-up" className="navLinks transition" id="signIn">
						Sign Up
					</Link>
				</li>
			</ul>
			
		</div>
	);
}
