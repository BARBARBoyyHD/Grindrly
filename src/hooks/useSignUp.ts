import { useContext } from "react";
import { SignUpAuthContext } from "../context/SignUpContext";
export function useAuthSignUp() {
  const context = useContext(SignUpAuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}
