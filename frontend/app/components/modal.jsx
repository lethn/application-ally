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
			<div className="w-[600px] flex flex-col">
				<button
					className="text-white text-2xl place-self-end my-4  bg-red-500 px-3.5 py-2.5 rounded"
					onClick={() => props.onClose()}>
					X
				</button>
				<div className="bg-white p-2 rounded w-full">{props.children}</div>
			</div>
		</div>
	);
}

export default Modal;
