import AboutHero from './assets/AboutHero'
import AboutStory from './assets/AboutStory'
import AboutMission from './assets/AboutMission'
import AboutTeam from './assets/AboutTeam'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="w-full bg-[#0b1f1c]">
            <AboutHero />
            <AboutStory />
            <AboutMission />
            <AboutTeam />
            {/* Bottom CTA */}
            <section className="py-20 px-4 md:px-12 lg:px-20 bg-[#0b1f1c] text-center">
                <div data-aos="zoom-in" className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#eef3ef] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Join the platform</h2>
                    <p className="text-[#86ab9f] mb-8">Whether you're a student looking for your first break or a company that wants better interns — InternPlug is ready.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup">
                            <button className="group flex items-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold px-8 py-4 rounded-xl hover:bg-[#ffd633] transition-all cursor-pointer">
                                Get started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-[#1f5346] text-[#86ab9f] hover:text-[#eef3ef] hover:border-[#35d399] font-semibold px-8 py-4 rounded-xl transition-all cursor-pointer">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
