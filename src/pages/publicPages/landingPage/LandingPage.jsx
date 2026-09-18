import { useRef } from 'react'
import LandingHero from './assets/LandingHero'
import LandingMarquee from './assets/LandingMarquee'
import LandingHowItWorks from './assets/LandingHowItWorks'
import LandingForWho from './assets/LandingForWho'
import LandingTestimonials from './assets/LandingTestimonials'
import LandingFAQ from './assets/LandingFAQ'
import LandingCTA from './assets/LandingCTA'

export default function LandingPage() {
    const howItWorksRef = useRef()
    return (
        <div className="w-full bg-[#0b1f1c]">
            <LandingHero howItWorksRef={howItWorksRef} />
            <LandingMarquee />
            <LandingHowItWorks howItWorksRef={howItWorksRef} />
            <LandingForWho />
            <LandingTestimonials />
            <LandingFAQ />
            <LandingCTA />
        </div>
    )
}
