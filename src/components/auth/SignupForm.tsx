
import React from "react";
import { useSignupFlow } from "@/hooks/useSignupFlow";
import { CredentialsStep } from "./signup/CredentialsStep";
import { AttorneyVerificationForm } from "./AttorneyVerificationForm";
import { VerificationPending } from "./VerificationPending";

interface SignupFormProps {
  navigateBasedOnRole: (userId: string) => Promise<void>;
  onSwitchToLogin: () => void;
}

export const SignupForm = ({ navigateBasedOnRole, onSwitchToLogin }: SignupFormProps) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    userRole,
    handleRoleChange,
    currentStep,
    handleInitialSignup,
    handleVerificationSubmit,
    handleCancelVerification
  } = useSignupFlow({ navigateBasedOnRole });

  // Render the appropriate step
  const renderStep = () => {
    switch (currentStep) {
      case "verification":
        return (
          <AttorneyVerificationForm
            onSubmit={handleVerificationSubmit}
            onCancel={handleCancelVerification}
          />
        );
      case "pending":
        return <VerificationPending />;
      case "credentials":
      default:
        return (
          <CredentialsStep
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            userRole={userRole}
            handleRoleChange={handleRoleChange}
            handleSubmit={handleInitialSignup}
            isLoading={isLoading}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
    }
  };

  return <div className="space-y-4">{renderStep()}</div>;
};
