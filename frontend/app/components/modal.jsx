/** @format */

import React, { children } from "react";

function Modal(props) {
	if (!props.isVisible) return null;
	const handleClose = e => {
		if (e.target.id === "wrapper") props.onClose();
	};
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
			id="wrapper"
			onClick={handleClose}>
			<div className="w-[600px] flex felx-col">
				<button
					className="text-white text-xl place-self-end m-5 font-bold bg-red-500 p-2 rounded"
					onClick={() => props.onClose()}>
					X
				</button>
				<div className="bg-white p-2 rounded ">{props.children}</div>
			</div>
		</div>
	);
}

export default Modal;
