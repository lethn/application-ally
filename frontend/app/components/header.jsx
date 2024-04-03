/** @format */

import React from "react";
import Home from "./Home";

function Header() {
	return (
		<div>
			<div className="flex justify-center">
				<h1 className="gradient-text text-transparent text-5xl font-bold animate-gradient mt-[4rem] mb-[3rem] text-center">
					For All Your Application Needs
				</h1>
			</div>

			<p className="text-white font-medium text-center mx-[2rem] sm:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] xl-[60rem]">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. At voluptatem
				recusandae explicabo similique! Aspernatur, dolores ducimus neque
				labore, nesciunt illo architecto, modi fugit quidem esse deserunt
				eveniet? Aliquid, aliquam placeat.
			</p>
			<div className="flex justify-center">
				<button className="text-white mt-6 bg-blue-500 p-2 rounded-lg font-bold hover:bg-blue-950 hover:border-l-blue-100 border-2">
					<span>GET STARTED</span>
				</button>
			</div>

			<Home />
		</div>
	);
}

export default Header;
