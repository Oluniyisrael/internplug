import Footer from "../../../components/footer/Footer.jsx"
import NavBar from "../../../components/navbar/Navbar.jsx"
import AboutHero from "./assets/AboutHero.jsx"
import AboutStory from "./assets/AboutStory.jsx"
import AboutMissionVision from "./assets/AboutMissionVision.jsx"
import AboutTeam from "./assets/AboutTeam.jsx"
import AboutWhyChooseUs from "./assets/AboutWhyChooseUs.jsx"
import AboutCTA from "./assets/AboutCTA.jsx"

export default function AboutPage({ }) {
    return (
        <div className="w-full overflow-x-hidden bg-[#0a0712] min-h-screen">
            {/* <NavBar/> */}
            <AboutHero/>
            <AboutStory/>
            <AboutMissionVision/>
            <AboutWhyChooseUs/>
            <AboutTeam/>
            <AboutCTA/>
            {/* <Footer/> */}
        </div>
    )
}