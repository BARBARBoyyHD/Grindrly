import { Navigate, Outlet } from "react-router-dom";
import supabase from "../supabase/supabase";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";

export default function ProtectedRoutes() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []); // 👈 remove [session], only run once

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white bg-[#232224]">
        Checking session...
      </div>
    );
  }

  if (session) {
    return <Outlet />;
  }

  return <Navigate to="/auth/user/login" replace />;
}
