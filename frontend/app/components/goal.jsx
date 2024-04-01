/** @format */

import React from "react";

function Goal(props) {
	return (
		<div className="flex flex-col items-center w-[16rem] md:w-[18rem] lg:w-[20] bg-[#2E3D7F] p-3 md:p-7 lg:p-10 rounded-lg">
			<h1 className="text-[#E0B05E] font-semibold text-2xl">
				{props.goalTitle}
			</h1>
			<p className="text-white text-center">{props.goalContent}</p>
		</div>
	);
}

export default Goal;
