import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../../supabase/supabase";
import AuthUI from "./AuthUI";

export default function SupabaseAuthComponents() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };

    initSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // Show loader until session is known
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#232224] text-white">
        Loading...
      </div>
    );
  }

  // No session → show Auth
  if (!session) {
    return <AuthUI />;
  }

  // Session exists → redirect
  return <Navigate to="/waitlist" replace />;
}
