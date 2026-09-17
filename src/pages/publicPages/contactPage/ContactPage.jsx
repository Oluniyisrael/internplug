// ContactPage.jsx
import { useState } from "react"
import ContactPageHero from "./assets/ContactPageHero"
import ContactPageForm from "./assets/ContactPageForm"
import ContactPageInfo from "./assets/ContactPageInfo"

export default function ContactPage({ }) {
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState(false)
    const [color, setColor] = useState("#0080ff")

    return (
        <div className="w-full overflow-hidden bg-[#0a0712]">
            <ContactPageHero />
            <ContactPageForm {...{ setMessage, setDisplay, setColor }} />
            <ContactPageInfo />
        </div>
    )
}