import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
    {
        question: "Is InternPlug free for students?",
        answer: "Yes — InternPlug is completely free for students. Creating a profile, getting matched, saving listings, and applying all cost nothing. Premium tools like advanced CV review and mock interview sessions will be offered later, but the core platform stays free."
    },
    {
        question: "How does the matching system work?",
        answer: "When you complete your profile — including your course, level, skills, and interests — InternPlug evaluates your profile against every active listing and generates a fit score. The score reflects how closely the role's requirements align with what you bring. You still see all listings, but your matches are ranked by relevance."
    },
    {
        question: "Are the internships verified?",
        answer: "Yes. Every company that posts on InternPlug goes through a verification process before their listings go live. We check that the company is registered, the role is genuine, and students who complete the internship receive a verifiable certificate of experience."
    },
    {
        question: "Can I apply for internships outside my state?",
        answer: "Absolutely. Many listings on InternPlug are remote or open to applicants from across Nigeria. You can filter by location — Lagos, Abuja, Port Harcourt, remote — or leave it open to see everything."
    },
    {
        question: "I'm a final-year student or recent graduate. Is InternPlug for me?",
        answer: "Yes. InternPlug serves students from 200 level through to fresh graduates. Some employers specifically look for final-year students or people who recently completed NYSC. You'll see roles filtered to your level when you set up your profile."
    },
    {
        question: "What if I don't have a CV yet?",
        answer: "You can still apply. InternPlug has a built-in CV builder that walks you through the sections a recruiter expects to see — education, skills, projects, and experience. Complete it on the platform and it's ready to attach to any application."
    },
];

export default function LandingFAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#071714]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">Common questions</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Quick answers
                    </h2>
                </div>

                <div className="space-y-3" data-aos="fade-up" data-aos-delay="150">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-[#143a33] border rounded-2xl overflow-hidden transition-all duration-200 ${open === index ? 'border-[#35d399]/40' : 'border-[#1f5346] hover:border-[#2a6b55]'}`}
                        >
                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-[#eef3ef] font-semibold text-sm pr-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-[#86ab9f] flex-shrink-0 w-5 h-5 transition-transform duration-200 ${open === index ? 'rotate-180 text-[#35d399]' : ''}`}
                                />
                            </button>
                            {open === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-[#86ab9f] text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-[#86ab9f] text-sm">
                        More questions? <Link to="/faq" className="text-[#35d399] hover:underline font-medium">See the full FAQ</Link> or <Link to="/contact" className="text-[#35d399] hover:underline font-medium">contact us</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
}
