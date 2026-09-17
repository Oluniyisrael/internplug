import { useState } from 'react'
import { Plus, Minus, Wrench, DollarSign, Shield, Clock, Users, Smartphone, HelpCircle } from 'lucide-react'

export default function FAQCategories({ searchTerm, setOpenIndex, openIndex }) {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', label: 'All Questions', icon: HelpCircle },
        { id: 'general', label: 'General', icon: Users },
        { id: 'booking', label: 'Booking & Process', icon: Clock },
        { id: 'pricing', label: 'Pricing & Payment', icon: DollarSign },
        { id: 'repairs', label: 'Repairs & Devices', icon: Wrench },
        { id: 'safety', label: 'Safety & Trust', icon: Shield },
        { id: 'technical', label: 'Technical', icon: Smartphone }
    ]

    const faqs = [
        { category: 'general', question: "What is NIWTS?", answer: "NIWTS is a platform that connects people who need device repairs with verified hardware engineers in their area. We make it easy to find trustworthy technicians for laptop, phone, PC, and other electronic device repairs." },
        { category: 'general', question: "How do I find a hardware engineer near me?", answer: "Simply enter your location in our search tool, and we'll show you all verified engineers in your area. You can filter by specialty, ratings, availability, and pricing." },
        { category: 'booking', question: "How does the booking process work?", answer: "Browse engineers, request a quote, communicate directly, agree on price and timeline, and schedule your repair." },
        { category: 'booking', question: "Can I cancel or reschedule my appointment?", answer: "Yes, you can cancel or reschedule through your dashboard. Most engineers allow free cancellation up to 24 hours before appointment." },
        { category: 'booking', question: "How quickly can my device be repaired?", answer: "Simple repairs may take 1-2 hours. Complex issues can take 2-3 days depending on parts availability." },
        { category: 'pricing', question: "How much does a typical repair cost?", answer: "Costs vary depending on device and issue. Engineers provide free diagnostics and quotes upfront." },
        { category: 'pricing', question: "Are there any hidden fees?", answer: "No hidden fees. Any additional cost must be approved before proceeding." },
        { category: 'pricing', question: "What payment methods do you accept?", answer: "We accept major cards and digital payments. Payment is processed securely through the platform." },
        { category: 'repairs', question: "What types of devices can be repaired?", answer: "Laptops, desktops, smartphones, tablets, gaming consoles and more." },
        { category: 'repairs', question: "Do repairs come with a warranty?", answer: "Yes. Most repairs come with 30-90 days warranty depending on the service." },
        { category: 'repairs', question: "What if my device can't be repaired?", answer: "You only pay diagnostic fees if applicable. Engineers may suggest alternatives." },
        { category: 'repairs', question: "Will my data be safe during repair?", answer: "Engineers follow confidentiality protocols. Always backup your data first." },
        { category: 'safety', question: "Are the engineers certified?", answer: "Yes. Engineers go through strict verification including certifications and identity checks." },
        { category: 'safety', question: "How do you verify engineers?", answer: "Background checks, certification verification, portfolio review, and identity verification." },
        { category: 'safety', question: "What if I'm not satisfied?", answer: "Contact support within 48 hours and we’ll resolve the issue or arrange refund." },
        { category: 'safety', question: "Is it safe to meet engineers?", answer: "Yes. All engineers are vetted and verified. You can choose preferred meeting location." },
        { category: 'technical', question: "Can engineers repair water damage?", answer: "Yes, but success depends on how quickly action is taken." },
        { category: 'technical', question: "Do you offer software troubleshooting?", answer: "Yes. Virus removal, OS installation, data recovery, and more." },
        { category: 'technical', question: "Can I upgrade my device?", answer: "Yes. RAM, SSD upgrades, graphics cards, cooling systems and more." },
        { category: 'general', question: "How do I contact NIWTS support?", answer: "Reach us via live chat, email or phone. We respond within 2 hours during business hours." }
    ]

    const filteredFAQs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="relative bg-gradient-to-b from-[transparent]/20 via-[#0a0712] to-[#0a0712] py-20  overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Categories */}
                <div className="mb-12 overflow-x-auto pb-4 custom-scrollbar" data-aos="fade-up">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <button key={category.id} onClick={() => { setActiveCategory(category.id); setOpenIndex(null) }} className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${activeCategory === category.id ? 'bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white shadow-lg shadow-[#0080ff]/30' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'}`}>
                                    <Icon className="w-5 h-5" />
                                    {category.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* FAQ List */}
                <div className="grid grid-cols-1 gap-6">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 20} className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#0080ff]/40 transition-all backdrop-blur-sm">
                                <button onClick={() => toggleFAQ(index)} className="w-full p-6 flex items-start justify-between gap-4 text-left group">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0080ff] transition-colors">{faq.question}</h3>
                                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0080ff]/10 border border-[#0080ff]/30 flex items-center justify-center group-hover:bg-[#0080ff]/20 transition-all">
                                        {openIndex === index ? <Minus className="w-5 h-5 text-[#0080ff]" /> : <Plus className="w-5 h-5 text-[#0080ff]" />}
                                    </div>
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-400">No FAQs found matching your search.</div>
                    )}
                </div>

            </div>
        </div>
    )
}
