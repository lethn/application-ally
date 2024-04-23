/** @format */

import React from "react";
import Image from "next/image";

function Brief(props) {
	if (props.position == "right") {
		return (
			<div className="w-[100%] sm:w-[80%] lg:w-[60%] flex my-[5rem] items-center p-4">
				<div className="content-center mx-2 text-center sm:mx-[5rem]">
					<p className=" text-white ">{props.info}</p>
				</div>
				<div className="">
					<Image
						src={props.image}
						width={1000}
						height={1000}
						alt="information picture"
						className="rounded-lg scale-75"
					/>
				</div>
			</div>
		);
	}
	return (
		<div className="w-[100%] sm:w-[80%] lg:w-[60%] flex my-[5rem] items-center p-4">
			<div className="mx-auto">
				<Image
					src={props.image}
					width={1000}
					height={1000}
					alt="picture"
					className="rounded-lg scale-75"
				/>
			</div>
			<div className="content-center text-center mx-2 sm:mx-[5rem]">
				<p className="text-white">{props.info}</p>
			</div>
		</div>
	);
}

export default Brief;
