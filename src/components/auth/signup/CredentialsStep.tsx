
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RoleSelector } from "@/components/auth/RoleSelector";
import { Mail, Lock } from "lucide-react";

interface CredentialsStepProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  userRole: "client" | "attorney" | "admin";
  handleRoleChange: (role: "client" | "attorney" | "admin") => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onSwitchToLogin: () => void;
}

export const CredentialsStep: React.FC<CredentialsStepProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  userRole,
  handleRoleChange,
  handleSubmit,
  isLoading,
  onSwitchToLogin,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-purple" />
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-gray-300 focus-visible:ring-brand-purple"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-brand-purple" />
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-gray-300 focus-visible:ring-brand-purple"
        />
      </div>

      <RoleSelector userRole={userRole} setUserRole={handleRoleChange} />

      <Button 
        type="submit" 
        className="w-full bg-brand-purple hover:bg-brand-purple/90 shadow-md transition-all"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : userRole === "attorney" ? "Continue to Verification" : "Get Started"}
      </Button>

      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Button
            variant="link"
            className="p-0 h-auto text-brand-purple font-medium"
            onClick={onSwitchToLogin}
            type="button"
          >
            Sign in
          </Button>
        </p>
      </div>
    </form>
  );
};
