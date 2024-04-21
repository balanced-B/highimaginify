import MobileNavs from "@/components/shared/MobileNavs";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="root">
			<Sidebar/>
			<MobileNavs/>
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Layout;
