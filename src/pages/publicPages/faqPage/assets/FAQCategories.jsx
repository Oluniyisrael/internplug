import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const categories = [
    {
        title: "Getting started",
        faqs: [
            { q: "How do I create an account?", a: "Click 'Get started' on the homepage, choose whether you're a student or employer, and follow the signup steps. Student profiles ask for your school, course, level, skills, and interests. You can upload your CV right away or build one in the platform." },
            { q: "Is InternPlug free for students?", a: "Yes, completely. Creating a profile, receiving matches, saving listings, and applying are all free. There are no hidden charges. We may introduce optional premium tools in the future, but the core platform will always be free for students." },
            { q: "What universities and polytechnics are supported?", a: "All of them. InternPlug is open to students from any accredited Nigerian university, polytechnic, or college of education, federal, state, or private. If your institution isn't pre-listed in our dropdown, you can type it in manually." },
            { q: "Can I use InternPlug if I've already graduated?", a: "Yes. We support final-year students and fresh graduates up to 12 months post-NYSC. Select 'Graduate' as your level when setting up your profile and you'll see roles that match your status." },
        ],
    },
    {
        title: "Matching & applications",
        faqs: [
            { q: "How does the matching score work?", a: "When you complete your profile, InternPlug compares your course, skills, interests, and location preferences against every active listing. Each listing gets a match score between 0–100%. Listings are ranked by how closely the role requirements align with your profile. The score isn't just keyword matching, it weighs course relevance, skill overlap, and location fit." },
            { q: "Will I still see listings that aren't a strong match?", a: "Yes. You can browse all listings at any time and filter them by field, location, duration, or company type. Matched listings are ranked higher by default, but you're never restricted to them." },
            { q: "How do I apply for an internship?", a: "Open any listing, review the role, and click 'Apply.' Your profile and CV are pre-attached. You can add a short cover note if the listing requests one. Submitted applications go to the employer immediately and appear in your tracker." },
            { q: "Can I apply for multiple internships at once?", a: "Yes, there's no limit. We recommend applying to roles where your match score is 70% or above, but the choice is yours." },
        ],
    },
    {
        title: "Application tracker",
        faqs: [
            { q: "What stages does the tracker show?", a: "Applied → Shortlisted → Interview scheduled → Accepted / Rejected. You'll see your status update in real time as employers move your application through their pipeline. You'll also receive an in-app notification at each stage change." },
            { q: "What if a company never updates my status?", a: "If an application hasn't had a status update in 21 days, it automatically moves to 'Closed, no response.' Employers who consistently ghost applicants are flagged in our system and reviewed." },
            { q: "Can I withdraw an application after submitting?", a: "Yes. Open the application in your tracker and select 'Withdraw application.' The employer will see that you've withdrawn. You can't re-apply to the same role after withdrawing." },
        ],
    },
    {
        title: "CV & profile",
        faqs: [
            { q: "What if I don't have a CV yet?", a: "Use the InternPlug CV builder. It walks you through every section a recruiter expects, education, skills, projects, experience, and references, and exports a clean PDF you can download or attach directly to applications." },
            { q: "How do I improve my match scores?", a: "Complete every section of your profile. Listing your skills specifically (e.g. 'Python, Excel, Tableau' rather than just 'data') and keeping your interests updated has the biggest impact on match quality." },
            { q: "Can employers see my full profile before I apply?", a: "No. Employers only see your profile after you apply to their specific listing. Browsing the platform is private." },
        ],
    },
    {
        title: "For employers",
        faqs: [
            { q: "How do I post a listing on InternPlug?", a: "Register as an employer, complete your company verification, then click 'Post a listing.' Provide a role title, department, location, duration, skills required, and a description. Listings go live within 24 hours after review." },
            { q: "What is the company verification process?", a: "We verify your CAC registration number, confirm your business address, and review your company profile before approving listings. This protects students from fake opportunities." },
            { q: "How much does it cost to post?", a: "Standard listings are free. Premium placement, which pins your listing to the top of relevant student match feeds, is available for a monthly fee. Contact us for pricing." },
            { q: "How do I shortlist and communicate with candidates?", a: "Your employer dashboard shows every applicant for each listing with their match score and profile. Move them through stages with one click. Direct messaging with shortlisted candidates is available inside the platform." },
        ],
    },
]

export default function FAQCategories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [openFaq, setOpenFaq] = useState(null)

    const handleCategoryChange = (index) => {
        setActiveCategory(index)
        setOpenFaq(null)
    }

    return (
        <section className="py-8 px-4 md:px-12 lg:px-20 pb-24">
            <div className="max-w-5xl mx-auto">
                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => handleCategoryChange(i)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeCategory === i ? 'bg-[#35d399] text-[#0b1f1c] border-[#35d399]' : 'border-[#1f5346] text-[#86ab9f] hover:text-[#eef3ef] hover:border-[#2a6b55]'}`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* FAQ list */}
                <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
                    {categories[activeCategory].faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`bg-[#143a33] border rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? 'border-[#35d399]/40' : 'border-[#1f5346] hover:border-[#2a6b55]'}`}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-[#eef3ef] font-semibold text-sm pr-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{faq.q}</span>
                                <ChevronDown className={`text-[#86ab9f] flex-shrink-0 w-5 h-5 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-[#35d399]' : ''}`} />
                            </button>
                            {openFaq === i && (
                                <div className="px-6 pb-6">
                                    <p className="text-[#86ab9f] text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
