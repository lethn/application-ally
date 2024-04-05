/** @format */
"use client";
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const authenicatedUsers = [
	{
		user: "exampleUser",
		passname: "examplePassword"
	}
];

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider, authenicatedUsers };
