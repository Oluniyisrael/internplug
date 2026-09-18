import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'

export default function Footer() {
    const footerLinks = {
        platform: [
            { label: "How It Works", link: "/#how-it-works" },
            { label: "For Students", link: "/signup" },
            { label: "For Employers", link: "/signup" },
            { label: "Browse Internships", link: "/signup" },
        ],
        company: [
            { label: "About Us", link: "/about" },
            { label: "FAQ", link: "/faq" },
            { label: "Contact", link: "/contact" },
            { label: "Blog", link: "/blog" },
        ],
        legal: [
            { label: "Privacy Policy", link: "/privacy" },
            { label: "Terms of Service", link: "/terms" },
            { label: "Cookie Policy", link: "/cookies" },
        ],
    };

    const socialLinks = [
        { icon: Twitter, link: "#", label: "Twitter / X" },
        { icon: Instagram, link: "#", label: "Instagram" },
        { icon: Linkedin, link: "#", label: "LinkedIn" },
    ];

    return (
        <footer className="relative bg-[#071714] border-t border-[#1f5346]">
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#35d399]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-5">
                            <Logo />
                        </Link>
                        <p className="text-[#86ab9f] mb-6 max-w-sm text-sm leading-relaxed">
                            InternPlug connects Nigerian students with verified internship opportunities that actually match, based on your course, skills, and goals.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:hello@internplug.ng" className="flex items-center gap-3 text-[#86ab9f] hover:text-[#35d399] transition-colors text-sm">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                hello@internplug.ng
                            </a>
                            <div className="flex items-center gap-3 text-[#86ab9f] text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                Abuja, Nigeria
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#eef3ef] font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Platform</h3>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="text-[#86ab9f] hover:text-[#35d399] transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#eef3ef] font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="text-[#86ab9f] hover:text-[#35d399] transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#eef3ef] font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="text-[#86ab9f] hover:text-[#35d399] transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1f5346]">
                    <p className="text-[#86ab9f] text-xs text-center md:text-left">
                        © {new Date().getFullYear()} InternPlug. All rights reserved. Built for Nigerian students.
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-[#143a33] border border-[#1f5346] flex items-center justify-center hover:bg-[#35d399]/20 hover:border-[#35d399] transition-all group"
                                >
                                    <Icon className="w-4 h-4 text-[#86ab9f] group-hover:text-[#35d399]" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
