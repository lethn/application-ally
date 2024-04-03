/** @format */
import Iframe from "react-iframe";
import React from "react";
import Footer from "./footer";
import Brief from "./brief";
import Goal from "./goal";
import Header from "./header";

function Home() {
	return (
		<div className="flex flex-col items-center w-[100%]">
			<h1 className="text-white mt-20 text-3xl font-semibold">About</h1>
			<Brief />
			<Brief />
			<h1 className="text-white mt-20 mb-3 text-3xl font-semibold">
				How it Works
			</h1>

			<Iframe
				url="https://www.youtube.com/embed/KLuTLF3x9sA"
				width=""
				height=""
				id=""
				className="mb-20 w-[20rem] sm:w-[40rem] lg:w-[60rem] h-[40vh]"
				display="block"
				position=""
				allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
			/>

			<div>
				<h1 className=" mb-10 text-white text-3xl font-semibold">Goals</h1>
			</div>

			<div className="flex flex-wrap justify-center gap-5 w-[100%]">
				<Goal
					goalTitle={"Goal 1"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
				<Goal
					goalTitle={"Goal 2"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
				<Goal
					goalTitle={"Goal 3"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
			</div>

			<Footer />
		</div>
	);
}

export default Home;
