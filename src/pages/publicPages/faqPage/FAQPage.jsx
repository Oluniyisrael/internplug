import Footer from "../../../components/footer/Footer"
import NavBar from "../../../components/navbar/Navbar"
import FAQHero from "./assets/FAQHero"
import FAQCategories from "./assets/FAQCategories"
import FAQContact from "./assets/FAQContact"
import { useState } from "react"

export default function FAQPage({ }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="w-full overflow-x-hidden bg-[#0a0712] min-h-screen">
            {/* <NavBar /> */}
            <FAQHero {...{ searchTerm, setSearchTerm, openIndex, setOpenIndex }} />
            <FAQCategories {...{ searchTerm, setSearchTerm, openIndex, setOpenIndex }} />
            <FAQContact />
            {/* <Footer /> */}
        </div>
    )
}