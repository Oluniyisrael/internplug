import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function PublicLayout({howItWorksRef }) {
    //maybe do something to check is user is logged in
    return (
        <div className="w-full overflow-x-hidden bg-[#0a0712] min-h-screen custom-scrollbar">
            <Navbar />
            <Outlet />
            <Footer {...{howItWorksRef}} />
        </div>

    )
}