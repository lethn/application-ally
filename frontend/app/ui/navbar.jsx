/** @format */

import Link from "next/link";

export default function Navbar() {
	return (
		<div id="navbarDiv">
			<ul className="navbar">
				<li className="mr-auto font-bold text-2xl bg-gradient-to-r from-[#E84405]  to-[#948788] text-transparent bg-clip-text">
					<h3>Application Ally</h3>
				</li>
				<li>
					<Link href="/" className="navLinks">
						Home
					</Link>
				</li>
				<li>
					<Link href="/dashboard" className="navLinks">
						Dashboard
					</Link>
				</li>
				<li>
					<Link href="/explore" className="navLinks">
						Explore
					</Link>
				</li>
				<li>
					<Link href="/login" className="navLinks" id="signIn">
						Sign In
					</Link>
				</li>
			</ul>
		</div>
	);
}
