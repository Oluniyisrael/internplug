import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function LandingFAQ({ }) {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "How do I find a hardware engineer near me?",
            answer: "Simply enter your location in our search tool, and we'll show you all verified engineers in your area. You can filter by specialty (laptop, phone, PC repair), ratings, and availability to find the perfect match for your needs."
        },
        {
            question: "Are the engineers on NIWTS certified?",
            answer: "Yes! Every engineer on our platform goes through a thorough verification process. We check certifications, work history, and require proof of expertise. Additionally, all engineers are rated by customers, so you can see real reviews before booking."
        },
        {
            question: "What types of devices can be repaired through NIWTS?",
            answer: "Our network of engineers can repair laptops, desktop computers, smartphones, tablets, gaming consoles, and other electronic devices. Common repairs include screen replacements, battery changes, water damage, motherboard issues, and software problems."
        },
        {
            question: "How much does a typical repair cost?",
            answer: "Repair costs vary depending on the device and issue. Most engineers provide free diagnostics and quotes before starting work. You'll see the cost upfront with no hidden fees. On average, our customers save 30-50% compared to manufacturer repair services."
        },
        {
            question: "Is there a warranty on repairs?",
            answer: "Yes! Most repairs come with a warranty period (typically 30-90 days) depending on the type of repair and parts used. The specific warranty terms are provided by each engineer and will be clearly stated before you confirm the booking."
        },
        {
            question: "How quickly can my device be repaired?",
            answer: "Repair time depends on the issue and parts availability. Simple repairs like screen replacements often take 1-2 hours, while more complex issues might take 2-3 days. You can discuss timelines directly with your chosen engineer before committing."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#243c91] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium text-[#0080ff] uppercase tracking-wide">Empower Innovation</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        No Question Is Too Small - Ask Away, We're Listening!
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a question or need clarification? Don't hesitate to reach out. Our team is here to help and we're ready to provide all the answers you need.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 50} className="border-b border-white/10">
                            <button onClick={() => toggleFAQ(index)} className="w-full py-6 flex items-start justify-between gap-4 text-left group hover:opacity-80 transition-opacity">
                                <div className="flex items-start gap-4 flex-1">
                                    <span className="text-gray-500 font-mono text-sm mt-1 flex-shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                            {faq.question}
                                        </h3>
                                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-white" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-white" />
                                    )}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}