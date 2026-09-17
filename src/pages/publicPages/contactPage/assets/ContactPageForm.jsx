// ContactForm.jsx
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import Select2 from "../../../../components/select/Select2"
import numberCodes from "../../../../components/numberCodes/NumberCodes"
import { toast } from "sonner"

export default function ContactForm({ setMessage, setDisplay, setColor }) {

    const [formdata, setFormData] = useState({
        email: "",
        name: "",
        phone: {
            code: "+234",
            number: "",
        },
        message: "",
    })
    const [submitState, setSubmitState] = useState(false)

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const sanitisePhoneNumber = (phoneNumber) => {
        const noZeroNumber = parseInt(phoneNumber)
        const textNumber = noZeroNumber.toString()
        return textNumber
    }

    function correctFieldsCheck() {
        const emptyField = Object.keys(formdata).some((item) => {
            if (item === "phone") {
                return Object.keys(formdata.phone).some(
                    (item2) => formdata.phone[item2] === ""
                )
            }
            return formdata[item] === ""
        })
        const incompleteNumber = sanitisePhoneNumber(formdata.phone.number).length <= 9
        const invalidEmail = !isValidEmail(formdata.email)
        return emptyField || incompleteNumber || invalidEmail || submitState
    }


    const handleModalMessage = (message, setMessage, setDisplay, color, setColor) => {
        setMessage(message)
        setDisplay(true)
        setColor(color)
        setTimeout(() => setDisplay(false), 3000)
    }

    useEffect(() => {
        if (submitState) {
            (async () => {
                setTimeout(() => {
                    // handleModalMessage(
                    //     "Thank you! We've received your message and will get back to you soon.",
                    //     setMessage,
                    //     setDisplay,
                    //     "#0080ff",
                    //     setColor
                    // )
                    console.log(formdata)
                    setFormData({
                        email: "",
                        name: "",
                        phone: {
                            code: "+234",
                            number: "",
                        },
                        message: "",
                    })
                    setSubmitState(false)
                }, 1500)
            })()
        }
    }, [submitState])

    return (
        <div className="relative bg-gradient-to-b from-[transparent] via-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            {/* <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#85dbf2]/80 via-[#243c91]/40 to-transparent pointer-events-none" /> */}

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Send us a <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Message</span>
                    </h2>
                    <p className="text-lg text-gray-300">
                        Fill out the form below and we'll get back to you as soon as possible
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
                    <div className="space-y-6">
                        {/* Name */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <input type="text" value={formdata.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all" />
                        </div>

                        {/* Email */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address *
                            </label>
                            <input type="email" value={formdata.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} placeholder="john@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all" />
                        </div>

                        {/* Phone */}
                        <div data-aos="fade-up" data-aos-delay="300">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number *
                            </label>
                            <div className="flex gap-3 flex-col sm:flex-row">
                                <Select2 value={formdata.phone.code} onChange={(e) => setFormData((prev) => ({ ...prev, phone: { code: e.target.value, number: prev.phone.number } }))} className="p-3 py-1 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all cursor-pointer text-white" name={`Code`} style={{ color: '#ffffff' }}
                                    options={numberCodes}
                                />
                                <input type="tel" value={formdata.phone.number} onChange={(e) => setFormData((prev) => ({ ...prev, phone: { number: e.target.value.replace(/[^0-9]/g, "").slice(0, 11), code: prev.phone.code } }))} placeholder="8012345678" maxLength={11} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all" />
                            </div>
                        </div>

                        {/* Message */}
                        <div data-aos="fade-up" data-aos-delay="400">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message *
                            </label>
                            <textarea value={formdata.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value.slice(0, 500) }))} placeholder="Tell us how we can help you..." rows={6} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 focus:bg-white/10 transition-all resize-none" />
                            <div className="flex justify-between mt-2">
                                <p className="text-sm text-[#0080ff]">Please be concise</p>
                                <p className="text-sm text-gray-400">{formdata.message.length}/500</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div data-aos="fade-up" data-aos-delay="500">
                            <button onClick={() => { if (!correctFieldsCheck()) setSubmitState(true) }} disabled={correctFieldsCheck()} className="w-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#0080ff]/30 hover:shadow-xl hover:shadow-[#0080ff]/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
                                {submitState ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>x
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}