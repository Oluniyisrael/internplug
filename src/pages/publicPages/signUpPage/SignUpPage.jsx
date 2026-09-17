// SignupPage.jsx
import { useState, useEffect } from "react"
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import SignupRoleSelection from "./assets/SignUpRoleSelection"
import SignupForm from "./assets/SignUpForm"
import { toast } from "sonner"

export default function SignUpPage({ displayMessage }) {
    const [showRoleSelection, setShowRoleSelection] = useState(true)
    const [userType, setUserType] = useState(null)
    const [currentStep, setCurrentStep] = useState(1)

    const [signupData, setSignupData] = useState({
        // Common fields
        fullName: '',
        email: '',
        phone: { code: '+234', number: '' },
        location: '',
        password: '',
        confirmPassword: '',

        // Engineer-specific fields
        businessName: '',
        specialization: '',
        yearsExperience: '',
        workTypes: [],
        bio: '',
        profilePhoto: null,
        governmentId: null,
        certifications: null,
    })
    const [emailOTP, setEmailOTP] = useState("")
    const [formState, setFormState] = useState({
        signupForm: true,
        verifyEmailForm: false,
        accountCreated: false,

    })

    const [skipTransition, setSkipTransition] = useState(false)
    const [transformLength, setTransformLength] = useState("translate-x-[0%]")

    const [submitingFormState, setSubmitingFormState] = useState({
        creatingAccount: false,
        verifyingEmail: false,
    })

    const handleRoleSelect = (role) => {
        setUserType(role)
        setShowRoleSelection(false)
    }

    useEffect(() => {
        if (submitingFormState.creatingAccount) {
            // Validation logic here
            const { email, password, confirmPassword, fullName, phone, location } = signupData

            if (!email || !password || !fullName || !phone.number || !location) {
                toast.info("Please fill all required fields", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, creatingAccount: false }))
            }

            if (password !== confirmPassword) {
                toast.info("Passwords do not match", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, creatingAccount: false }))
            }

            if (password.length < 8) {
                toast.info("Password must be at least 8 characters", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, creatingAccount: false }))
            }

            if (userType === 'engineer') {
                if (!signupData.specialization || !signupData.businessName || !signupData.yearsExperience || !signupData.profilePhoto || !signupData.governmentId) {
                    toast.info("Please complete all engineer verification steps", "text-white")
                    return setSubmitingFormState(prev => ({ ...prev, creatingAccount: false }))
                }
            }

            // Simulate API call
            setTimeout(() => {
                if (userType === "engineer") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } toast.info("Account created! Please verify your email.", "text-white")
                setFormState(prev => ({ ...prev, signupForm: true, verifyEmailForm: true }))
                setTransformLength("translate-x-[-100%]")
                setSubmitingFormState(prev => ({ ...prev, creatingAccount: false }))
                setTimeout(() => {
                    setSkipTransition(true)
                    setFormState(prev => ({ ...prev, signupForm: false, verifyEmailForm: true }))
                    setTransformLength("translate-x-[0%]")
                }, 600)
            }, 1500)
        }
        if (submitingFormState.verifyingEmail) {

            if (emailOTP === "") {
                toast.info(`Please fill in token sent to ${signupData.email}`)
                return setSubmitingFormState(prev => ({ ...prev, verifyingEmail: false }))
            }

            if (emailOTP.length < 6) {
                toast.info(`Invalid token provided`)
                return setSubmitingFormState(prev => ({ ...prev, verifyingEmail: false }))
            }
            console.log(signupData)
            setTimeout(() => {
                toast.success(userType === "engineer" ? "Account pending ultimate verification, but you can log in" : "Account verified! Congratulations!! ")
                setFormState(prev => ({ ...prev, verifyEmailForm: true, accountCreated: true }))
                setTransformLength("translate-x-[-100%]")
                setSkipTransition(false)
                setSubmitingFormState(prev => ({ ...prev, verifyingEmail: false }))
                setTimeout(() => {
                    setSkipTransition(true)
                    setFormState(prev => ({ ...prev, verifyEmailForm: false, accountCreated: true }))
                    setTransformLength("translate-x-[0%]")
                }, 600)
            }, 1500)
        }
    }, [submitingFormState])

    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-[#0a0712] via-[#011b38] to-[#0a0712]
 min-h-screen">

            {showRoleSelection && (
                <SignupRoleSelection onSelectRole={handleRoleSelect} onClose={() => window.location.href = '/'} />
            )}

            {!showRoleSelection && (
                <SignupForm {...{ signupData, setSignupData, submitingFormState, setSubmitingFormState, formState, transformLength, skipTransition, userType, currentStep, setCurrentStep, emailOTP, setEmailOTP }} />
            )}
        </div>
    )
}