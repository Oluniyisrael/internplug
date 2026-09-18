import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo"

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activePage = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = sidebar ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [sidebar]);

    const navLinks = [
        { link: "/", label: "Home" },
        { link: "/about", label: "About" },
        { link: "/faq", label: "FAQ" },
        { link: "/contact", label: "Contact" },
    ];

    const isActive = (path) => activePage === path;

    return (
        <>
            <nav className={`fixed w-full top-0 px-4 md:px-12 lg:px-20 py-4 flex items-center justify-between h-18 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b1f1c]/95 backdrop-blur-md border-b border-[#1f5346] shadow-lg shadow-[#0b1f1c]/50' : ''}`}>
                <Link to="/">
                    <Logo />
                </Link>

                <ul className="hidden lg:flex gap-6 xl:gap-10 items-center">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.link}
                                className={`font-medium transition-colors relative text-sm ${isActive(item.link) ? 'text-[#35d399] font-semibold' : 'text-[#86ab9f] hover:text-[#eef3ef]'}`}
                            >
                                {item.label}
                                {isActive(item.link) && (
                                    <span className="absolute -bottom-[3px] left-0 w-full h-0.5 bg-[#35d399] rounded-full"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex gap-3">
                    <Link to="/login">
                        <button className="px-5 py-2.5 border border-[#1f5346] rounded-lg text-[#eef3ef] text-sm font-semibold hover:border-[#35d399] hover:text-[#35d399] transition-all cursor-pointer">
                            Log in
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="px-5 py-2.5 bg-[#f5c400] rounded-lg text-[#0b1f1c] text-sm font-bold hover:bg-[#ffd633] transition-all cursor-pointer shadow-lg shadow-[#f5c400]/20">
                            Get started
                        </button>
                    </Link>
                </div>

                <button className="lg:hidden text-[#eef3ef]" onClick={() => setSidebar(!sidebar)}>
                    <Menu size={26} />
                </button>
            </nav>

            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${sidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebar(false)}
            />

            {/* Mobile sidebar */}
            <div className={`fixed right-0 top-0 h-full w-[290px] z-[70] bg-[#0b1f1c] border-l border-[#1f5346] shadow-2xl transition-transform duration-300 ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <Logo size="sm" />
                        <button onClick={() => setSidebar(false)} className="text-[#86ab9f] hover:text-[#eef3ef] transition-colors">
                            <X size={26} />
                        </button>
                    </div>
                    <ul className="space-y-1 mb-8">
                        {navLinks.map((item, index) => (
                            <li key={index} onClick={() => setSidebar(false)}>
                                <Link
                                    to={item.link}
                                    className={`block px-4 py-3 rounded-lg font-medium text-base transition-colors ${isActive(item.link) ? 'bg-[#143a33] text-[#35d399] font-semibold border-l-2 border-[#35d399]' : 'text-[#86ab9f] hover:text-[#eef3ef] hover:bg-[#143a33]/50'}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="space-y-3">
                        <Link to="/login" onClick={() => setSidebar(false)}>
                            <button className="w-full py-3 border border-[#1f5346] rounded-lg text-[#eef3ef] font-semibold hover:border-[#35d399] hover:text-[#35d399] transition-all">
                                Log in
                            </button>
                        </Link>
                        <Link to="/signup" onClick={() => setSidebar(false)}>
                            <button className="w-full py-3 bg-[#f5c400] rounded-lg text-[#0b1f1c] font-bold hover:bg-[#ffd633] transition-all">
                                Get started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
