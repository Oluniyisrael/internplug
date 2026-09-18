import { MessageCircle, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FAQContact() {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-20 bg-[#071714]">
            <div className="max-w-3xl mx-auto text-center">
                <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">Still need help?</p>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl font-bold text-[#eef3ef] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    We're here
                </h2>
                <p data-aos="fade-up" data-aos-delay="150" className="text-[#86ab9f] mb-10 text-sm">
                    If your question isn't answered above, reach out directly. We typically reply within one business day.
                </p>
                <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <button className="flex items-center gap-2 bg-[#143a33] border border-[#1f5346] text-[#eef3ef] font-semibold px-7 py-3.5 rounded-xl hover:border-[#35d399] hover:text-[#35d399] transition-all cursor-pointer">
                            <MessageCircle className="w-4 h-4" /> Send us a message
                        </button>
                    </Link>
                    <a href="mailto:hello@internplug.ng">
                        <button className="flex items-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold px-7 py-3.5 rounded-xl hover:bg-[#ffd633] transition-all cursor-pointer">
                            <Mail className="w-4 h-4" /> Email us directly
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}
