/** @format */

import "@/app/globals.css";
import { montserrat } from "@/app/ui/fonts";

export const metadata = {
	title: "Application Ally",
	description: "Your personalized job and internship applications tracker"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	);
}
