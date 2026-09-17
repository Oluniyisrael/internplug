// LoginPage.jsx
import { useState, useEffect } from "react"
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import LoginForm from "./assets/LoginForm"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export default function LoginPage({ }) {
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [submitingFormState, setSubmitingFormState] = useState({ loggingIn: false })
    const navigate = useNavigate()

    useEffect(() => {
        if (submitingFormState.loggingIn) {
            if (!loginData.email || !loginData.password) {
                toast.info("Please enter email and password", "text-white")
                return setSubmitingFormState({ loggingIn: false })
            }

            // Simulate API call
            setTimeout(() => {
                toast.success("Login successful!", "text-white")
                // Redirect or set user state
                navigate("/user/dashboard")
                setSubmitingFormState({ loggingIn: false })
            }, 1500)
        }
    }, [submitingFormState])

    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-[#0a0712] via-[#011b38] to-[#0a0712]
 min-h-screen">
            <LoginForm {...{ loginData, setLoginData, submitingFormState, setSubmitingFormState }} />
        </div>
    )
}