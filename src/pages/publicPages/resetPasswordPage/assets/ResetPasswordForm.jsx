// ResetPasswordForm.jsx
import VerifyEmail from "./VerifyEmail";
import VerifyToken from "./VerifyToken";
import SetNewPassword from "./SetNewPassword";
import SuccessfulPasswordReset from "./SuccessfulPasswordReset";

export default function ResetPasswordForm({ resetFormData, setResetFormData, submitingFormState, setSubmitingFormState, formState, transformLength, skipTransition }) {
    return (
        <div className="min-h-[600px] flex items-center sm:px-0 px-5 py-20">
            <div className="flex flex-1 items-center justify-center relative">
                <div className="absolute bg-white shadow-2xl items-center rounded-3xl w-full max-w-md overflow-hidden">
                    <div className={`flex transform ${transformLength} items-center ${!skipTransition && "transition duration-600"}`}>
                        {formState.verifyEmailForm && (
                            <VerifyEmail {...{ submitingFormState, setSubmitingFormState, resetFormData, setResetFormData }} />
                        )}
                        {formState.verifyTokenForm && (
                            <VerifyToken {...{ submitingFormState, setSubmitingFormState, resetFormData, setResetFormData }} />
                        )}
                        {formState.verifyNewPasswordForm && (
                            <SetNewPassword {...{ submitingFormState, setSubmitingFormState, resetFormData, setResetFormData }} />
                        )}
                        {formState.successfulPasswordReset && (
                            <SuccessfulPasswordReset />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}