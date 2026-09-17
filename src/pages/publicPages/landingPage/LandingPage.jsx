import LandingHero from "./assets/LandingHero"
import LandingAboutUs from "./assets/LandingAboutUs"
import LandingHowWeWork from "./assets/LandingHowWeWork"
import LandingTestimonials from "./assets/LandingTestimonials"
import LandingBlogs from "./assets/LandingBlogs"
import LandingFAQ from "./assets/LandingFAQ"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


export default function LandingPage({ howItWorksRef }) {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
        if (location.hash === '#howItWorks') {
            howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location])
    return (
        <div className="w-full bg-[#0a0712] h-full overflow-hidden ">
            {/* <NavBar/> */}
            <LandingHero {...{ howItWorksRef }} />
            <LandingAboutUs />
            <LandingHowWeWork {...{ howItWorksRef }} />
            <LandingTestimonials />
            <LandingBlogs />
            <LandingFAQ />
            {/* <Footer/> */}
        </div>
    )
}