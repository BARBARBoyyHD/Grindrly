import { Navigate } from "react-router-dom";
import AuthUI from "./AuthUI";
import { useAuth } from "../../hooks/useAuth";

export default function SupabaseAuthComponents() {
  const { session } = useAuth();

  if (!session) {
    return <AuthUI />;
  }
  return <Navigate to="/waitlist" replace />;
}
