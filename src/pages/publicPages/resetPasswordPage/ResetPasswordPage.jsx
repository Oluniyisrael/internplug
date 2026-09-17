// ResetPasswordPage.jsx
import { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer"
import ResetPasswordForm from "./assets/ResetPasswordForm";
import { switchToVerifyToken, switchToSetNewPassword, switchToSuccessfulPasswordReset } from "./assets/SwitchFormFunctions";
import { toast } from "sonner";

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function ResetPasswordPage({  }) {
    const [resetFormData, setResetFormData] = useState({
        email: '',
        token: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const [formState, setFormState] = useState({
        verifyEmailForm: true,
        verifyTokenForm: false,
        verifyNewPasswordForm: false,
        successfulPasswordReset: false,
    })

    const [skipTransition, setSkipTransition] = useState(false)
    const [transformLength, setTransformLength] = useState("translate-x-[0%]")

    const [submitingFormState, setSubmitingFormState] = useState({
        sendingCodeToEmail: false,
        confirmingCodeFromEmail: false,
        settingNewPassword: false
    });

    useEffect(() => {
        // Handle sending code to email
        if (submitingFormState.sendingCodeToEmail) {
            if (resetFormData.email === "") {
                toast.info("Email field cannot be empty!", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, sendingCodeToEmail: false }))
            }
            if (!isValidEmail(resetFormData.email)) {
                toast.info("Please enter a valid email", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, sendingCodeToEmail: false }))
            }

            // Simulate API call
            setTimeout(() => {
                switchToVerifyToken(
                    setFormState,
                    setSubmitingFormState,
                    setTransformLength,
                    setSkipTransition,
                    "Reset code sent to your email!"
                )
            }, 1500)
        }

        // Handle verifying token
        if (submitingFormState.confirmingCodeFromEmail) {
            if (resetFormData.token === "") {
                toast.info("Token field cannot be empty!", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, confirmingCodeFromEmail: false }))
            }
            if (resetFormData.token.length !== 6) {
                toast.info("Please enter the complete 6-digit code", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, confirmingCodeFromEmail: false }))
            }

            // Simulate API call
            setTimeout(() => {
                switchToSetNewPassword(
                    setFormState,
                    setSubmitingFormState,
                    setTransformLength,
                    setSkipTransition,
                    "Code verified successfully!"
                )
            }, 1500)
        }

        // Handle setting new password
        if (submitingFormState.settingNewPassword) {
            if (resetFormData.newPassword === "") {
                toast.info("Password field cannot be empty", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, settingNewPassword: false }))
            }
            if (resetFormData.newPassword !== resetFormData.confirmNewPassword) {
                toast.info("Passwords do not match", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, settingNewPassword: false }))
            }
            if (resetFormData.newPassword.trim().length < 8) {
                toast.info("Password should be at least 8 characters long", "text-white")
                return setSubmitingFormState(prev => ({ ...prev, settingNewPassword: false }))
            }

            // Simulate API call
            setTimeout(() => {
                switchToSuccessfulPasswordReset(
                    setFormState,
                    setSubmitingFormState,
                    setTransformLength,
                    setSkipTransition,
                    "Password changed successfully!"
                )
            }, 1500)
        }
    }, [submitingFormState])

    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-[#0a0712] via-[#011b38] to-[#0a0712]
 min-h-screen">
            <ResetPasswordForm {...{ resetFormData, setResetFormData, submitingFormState, setSubmitingFormState, formState, transformLength, skipTransition }} />
        </div>
    )
}