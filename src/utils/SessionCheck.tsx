import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { sessionSupabaseKey } from "../config/supabaseKey";

export default function SessionCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const getSessionKey = localStorage.getItem(sessionSupabaseKey);

  useEffect(() => {
    console.log(getSessionKey)
    if (getSessionKey) {
      setIsAuthenticated(true);
    }
    setIsAuthenticated(false);
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/auth/user/login" replace={true} />
      )}
    </>
  );
}
