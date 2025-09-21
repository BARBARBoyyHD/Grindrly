import { Navigate } from "react-router-dom";
import { useAuthSignUp } from "../../hooks/useSignUp";
import SignUpUI from "./SignUpUI";

export default function SupabaseSignUpAuthComponents() {
  const { session } = useAuthSignUp();

  if (!session) {
    return <SignUpUI />;
  }
  return <Navigate to="/waitlist" replace />;
}
