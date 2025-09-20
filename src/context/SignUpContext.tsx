// context/AuthContext.tsx
import type { Session } from "@supabase/supabase-js";
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import type { AuthContextType } from "../types/AuthContextType";

const SignUpAuthContext = createContext<AuthContextType | undefined>(undefined);

export function SignUpAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);

        if (session?.user) {
          const { id, email, user_metadata } = session.user;

          // Check if user already exists in your custom "users" table
          const { data: existingUser, error: selectError } = await supabase
            .from("users")
            .select("id")
            .eq("id", id)
            .maybeSingle();

          if (selectError) {
            console.error("Error checking user:", selectError);
            return;
          }

          if (!existingUser) {
            // Insert new user into "users" table
            const { error: insertError } = await supabase.from("users").insert({
              id,
              email,
              role: "user",
              full_name: user_metadata?.full_name ?? null,
              avatar_url: user_metadata?.avatar_url ?? null,
            });

            if (insertError) {
              console.error("Error inserting user:", insertError);
            } else {
              console.log("✅ New user inserted into users table:", email);
            }
          }
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    session,
    user: session?.user ?? null,
    loading,
  };

  return (
    <SignUpAuthContext.Provider value={value}>
      {children}
    </SignUpAuthContext.Provider>
  );
}

export { SignUpAuthContext };
