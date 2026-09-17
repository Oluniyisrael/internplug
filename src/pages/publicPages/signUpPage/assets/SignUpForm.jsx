// SignupForm.jsx
import UserSignupForm from "./UserSignupForm"
import EngineerSignupForm from "./EngineerSignupForm"
import VerifyEmail from "./VerifyEmail"
import SuccessfulEmailCreation from "./SuccessfulEmailCreation"

export default function SignUpForm({ signupData, setSignupData, submitingFormState, setSubmitingFormState, formState, transformLength, skipTransition, userType, currentStep, setCurrentStep, emailOTP, setEmailOTP }) {
    return (
        <div className="min-h-screen flex items-center px-4 sm:px-0">
            <div className="flex flex-1 justify-center relative">
                <div className="my-20 shadow-2xl w-full max-w-md overflow-hidden">
                    <div className={`flex transform ${transformLength} items-center ${!skipTransition && "transition duration-600"} `}>
                        {formState.signupForm && (
                            userType === 'user' ? (
                                <UserSignupForm {...{ signupData, setSignupData, submitingFormState, setSubmitingFormState }} />
                            ) : (
                                <EngineerSignupForm {...{ signupData, setSignupData, submitingFormState, setSubmitingFormState, currentStep, setCurrentStep }} />
                            )
                        )}
                        {formState.verifyEmailForm && (
                            <VerifyEmail {...{ signupData, submitingFormState, setSubmitingFormState, emailOTP, setEmailOTP }} />
                        )}
                        {formState.accountCreated && (
                            <SuccessfulEmailCreation {...{}} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}