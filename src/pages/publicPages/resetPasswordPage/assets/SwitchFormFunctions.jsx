import { toast } from "sonner";

// SwitchFormFunctions.jsx
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const switchToVerifyToken = async (setFormState, setSubmitingFormState, setTransformLength, setSkipTransition, message) => {
    await wait(300)
    setFormState(prev => ({ ...prev, verifyTokenForm: true }))
    await wait(100)
    toast.info(message)
    setTransformLength(`translate-x-[-100%]`)
    setSubmitingFormState(prev => ({ ...prev, sendingCodeToEmail: false }))
    await wait(650)
    setSkipTransition(true)
    setFormState(prev => ({ ...prev, verifyEmailForm: false }))
    setTransformLength(`translate-x-[0%]`)
    await wait(100)
    setSkipTransition(false)
}

const switchToSetNewPassword = async (setFormState, setSubmitingFormState, setTransformLength, setSkipTransition, message) => {
    await wait(300)
    setFormState(prev => ({ ...prev, verifyNewPasswordForm: true }))
    await wait(100)
    toast.info(message)
    setTransformLength(`translate-x-[-100%]`)
    setSubmitingFormState(prev => ({ ...prev, confirmingCodeFromEmail: false }))
    await wait(650)
    setSkipTransition(true)
    setFormState(prev => ({ ...prev, verifyTokenForm: false }))
    setTransformLength(`translate-x-[0%]`)
    await wait(100)
    setSkipTransition(false)
}

const switchToSuccessfulPasswordReset = async (setFormState, setSubmitingFormState, setTransformLength, setSkipTransition, message) => {
    await wait(300)
    setFormState(prev => ({ ...prev, successfulPasswordReset: true }))
    await wait(100)
    toast.info(message)
    setTransformLength(`translate-x-[-100%]`)
    setSubmitingFormState(prev => ({ ...prev, settingNewPassword: false }))
    await wait(650)
    setSkipTransition(true)
    setFormState(prev => ({ ...prev, verifyNewPasswordForm: false }))
    setTransformLength(`translate-x-[0%]`)
    await wait(100)
    setSkipTransition(false)
}

export { switchToVerifyToken, switchToSetNewPassword, switchToSuccessfulPasswordReset }