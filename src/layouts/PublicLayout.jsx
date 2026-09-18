import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function PublicLayout() {
    return (
        <div className="w-full overflow-x-hidden bg-[#0b1f1c] min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
