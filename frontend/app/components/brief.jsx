/** @format */

import React from "react";
import clogo from "@/app/assets/logo.png";
import Image from "next/image";

function Brief() {
	return (
		<div>
			<div className="w-[80%] sm:w-[70%] lg:w-[60%] flex mx-auto justify-center mt-[10rem]">
				<div className="content-center text-center  mx-[0.5rem] sm:mx-[1rem] md:mx-[2rem] lg:mx-[3rem]xl:mx-[5rem]">
					<span className=" text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.
						Mauris commodo quis imperdiet massa.
					</span>
				</div>
				<Image
					src={clogo}
					width={500}
					height={500}
					alt="picture"
					className="rounded-lg w-[9rem] h-[9rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]"
				/>
			</div>

			{/* 2nd brief opposing view */}
			<div className="w-[80%] sm:w-[70%] lg:w-[60%] flex mx-auto justify-center mt-[10rem]">
				<Image
					src={clogo}
					width={500}
					height={500}
					alt="picture"
					className="rounded-lg w-[9rem] h-[9rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]"
				/>
				<div className="content-center text-center  mx-[0.5rem] sm:mx-[1rem] md:mx-[2rem] lg:mx-[4rem]xl:mx-[5rem]">
					<span className=" text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.
						Mauris commodo quis imperdiet massa.
					</span>
				</div>
			</div>
		</div>
	);
}

export default Brief;
