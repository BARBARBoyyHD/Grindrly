import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import type { User } from "@supabase/supabase-js"; // 👈 import type for clarity

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // ✅ Get current user on mount
    supabase.auth.getUser().then(({ data, error }) => {
      if (error) {
        console.error("Error fetching user:", error);
        return data;
      }
    });
    // ✅ Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return user; // 👈 now returns the whole user object
}
