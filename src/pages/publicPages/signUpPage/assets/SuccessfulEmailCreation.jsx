import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function SuccessfulEmailCreation() {
    const [countdown, setCountdown] = useState(5)
    const navigate = useNavigate()

    // Countdown logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    // Navigation logic (separate effect)
    useEffect(() => {
        if (countdown <= 0) {
            navigate("/login")
        }
    }, [countdown, navigate])

    return (
        <div className="min-w-full grow p-8 text-center bg-white rounded-3xl">
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-white" />
                </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0a0712]">
                Account Created Successfully!
            </h2>

            <p className="text-gray-600 mb-6">
                Your account has been created successfully. You can now log in and start exploring.
            </p>

            <p className="text-sm text-gray-500">
                Redirecting to login in{" "}
                <span className="font-bold text-[#0080ff]">{countdown}</span> seconds...
            </p>
        </div>

    )
}
