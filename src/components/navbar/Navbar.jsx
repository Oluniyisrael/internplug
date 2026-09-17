import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react";
import { Link, useLocation, } from "react-router-dom";
import Logo from "../../components/logo/Logo"

export default function Navbar({ }) {
    const [sidebar, setSidebar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activePage = useLocation().pathname

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [activePage])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (sidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [sidebar]);

    const navLinks = [
        { link: "/about", label: "About Us" },
        { link: "/faq", label: "FAQ" },
        { link: "/blog", label: "Blog" },
        { link: "/contact", label: "Contact" },
    ]

    const isActiveLink = (path) => {
        return activePage === path;
    };

    return (
        <>
            <nav className={`fixed w-full top-0 px-4 md:px-12 lg:px-20 py-4 md:py-5 flex items-center justify-between h-18 z-50 transition-shadow duration-300  ${scrolled ? 'backdrop-blur-[7px] bg-[rgba(0,12,32,0)] shadow-md' : ''}`}>
                <Link to={`/`} className="">
                    <Logo />
                </Link>

                <ul className="hidden lg:flex gap-6 xl:gap-10 items-center">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className={`text-[#1B2B4D] font-medium hover:text-[#ffffff] transition-colors relative ${isActiveLink(item.link) ? 'text-[#f0edfa] font-bold' : 'text-[#9c9c9c] hover:text-[#FF6B7A]'}`}>
                                {item.label}
                                {isActiveLink(item.link) && (
                                    <span className="absolute -bottom-[2px] left-0 w-full h-0.5 bg-[#0080ff] rounded-full animate-pulse hover:animate-none"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex gap-5">
                    <Link to={"/login"}>
                        <button className="hidden lg:block px-5 xl:px-7 py-2.5 xl:py-3 border-2 border-[#f0edfa] rounded-lg text-[#f0edfa] text-sm xl:text-base font-semibold hover:text-[#000000] hover:border-[#ffffff] hover:bg-[#ffffff] transition-all cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link to={"/signup"}>
                        <button className="hidden lg:block px-5 xl:px-7 py-2.5 xl:py-3 border-2 border-[#1B2B4D] bg-[#1B2B4D] rounded-lg text-[#f0edfa] text-sm xl:text-base font-semibold hover:border-[#1B2B4D] hover:bg-[#f0edfa] hover:text-[#1B2B4D] transition-all cursor-pointer">
                            Sign up
                        </button>
                    </Link>
                </div>

                <button className="lg:hidden text-[#f0edfa]" onClick={() => setSidebar(!sidebar)}>
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Sidebar Overlay - darkens and blurs background */}
            <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${sidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebar(false)} />

            {/* Mobile Sidebar */}
            <div className={`fixed right-0 top-0 h-full w-[280px] z-[70] sm:w-[320px] bg-[#0a0712]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 ${sidebar ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-2xl font-bold text-[#f0edfa]">Menu</div>
                        <button onClick={() => setSidebar(false)} className="text-[#f0edfa] hover:text-[#0080ff] transition-colors">
                            <X size={28} />
                        </button>
                    </div>
                    <ul className="space-y-6">
                        {navLinks.map((item, index) => (
                            <li key={index} onClick={() => setSidebar(false)}>
                                <Link to={item.link} className={`block text-[#1B2B4D] font-medium text-lg hover:text-[#ffffff] transition-colors ${isActiveLink(item.link) ? 'text-[#f0edfa] font-bold pl-4 border-l-4 border-[#0080ff] bg-[#1B2B4D] py-2 rounded-r-lg' : 'text-[#9c9c9c] hover:text-[#0080ff] hover:pl-2'}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={"/login"} onClick={() => setSidebar(false)}>
                        <button className="w-full mt-8 px-7 py-2.5 xl:py-3 border-2 border-[#f0edfa] rounded-lg text-[#f0edfa] text-sm xl:text-base font-semibold hover:text-[#000000] hover:border-[#ffffff] hover:bg-[#ffffff] transition-all cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link to={"/signup"} onClick={() => setSidebar(false)}>

                        <button className="w-full mt-4 px-7 py-2.5 xl:py-3 border-2 border-[#0080ff] bg-[#0080ff] rounded-lg text-white text-sm xl:text-base font-semibold hover:bg-[#0066cc] hover:border-[#0066cc] transition-all cursor-pointer">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}