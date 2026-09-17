import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer({  }) {
    const logoimg = "https://framerusercontent.com/images/xuhbSUVP4BGB88zA5gVwuHq8mXc.png?width=132&height=132"
    const navigate = useNavigate()
    const goToHIW = () => {
            navigate('/', { state: { scrollTo: 'how-it-works' } })
    }

    const footerLinks = {
        company: [
            { label: "About Us", link: "/about" },
            { label: "How It Works", link: "/#howItWorks" },
            { label: "Our Engineers", link: "/engineers" },
            { label: "Careers", link: "/careers" }
        ],
        support: [
            { label: "Help Center", link: "/help" },
            { label: "FAQ", link: "/faq" },
            { label: "Contact Us", link: "/contact" },
            { label: "Safety Guidelines", link: "/safety" }
        ],
        legal: [
            { label: "Privacy Policy", link: "/privacy" },
            { label: "Terms of Service", link: "/terms" },
            { label: "Cookie Policy", link: "/cookies" },
            { label: "Refund Policy", link: "/refunds" }
        ]
    }

    const socialLinks = [
        { icon: Facebook, link: "#", label: "Facebook" },
        { icon: Twitter, link: "#", label: "Twitter" },
        { icon: Instagram, link: "#", label: "Instagram" },
        { icon: Linkedin, link: "#", label: "LinkedIn" }
    ]

    return (
        <footer className="relative bg-gradient-to-b from-[#0a0712] to-[#000000] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
                    {/* Brand section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-2 mb-6">
                            <img src={logoimg} className="h-12 w-12" alt="NIWTS Logo" />
                            <div className="text-3xl font-bold text-white">niwts</div>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Connecting you with expert hardware engineers for reliable, professional device repairs. Your trusted platform for laptop, phone, and PC repairs.
                        </p>
                        {/* Contact info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-[#0080ff] transition-colors">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:support@niwts.com">support@niwts.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-[#0080ff] transition-colors">
                                <Phone className="w-5 h-5" />
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="text-gray-400 hover:text-[#0080ff] transition-colors" onClick={item.label === "How It Works" ? goToHIW : null}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((item, index) => (

                                <li key={index}>
                                    <Link to={item.link} className="text-gray-400 hover:text-[#0080ff] transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="text-gray-400 hover:text-[#0080ff] transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                {/* <div className="mb-12 py-8 border-y border-white/10">
                    <div className="max-w-xl">
                        <h3 className="text-white font-semibold text-xl mb-2">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for repair tips, industry news, and exclusive offers.</p>
                        <div className="flex gap-3">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all" />
                            <button className="px-6 py-3 bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold rounded-lg transition-all hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm text-center     sm:text-left">
                        © {new Date().getFullYear()} NIWTS. All rights reserved. Developed by <a href="https://oluniyisrael.vercel.app" className='text-[#0080ff]'>Oluniyi Israel</a>
                    </p>

                    {/* Social links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon
                            return (
                                <a key={index} href={social.link} aria-label={social.label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all group">
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#0080ff]" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}