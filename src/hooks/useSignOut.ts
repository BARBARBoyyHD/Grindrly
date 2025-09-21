import supabase from "@/supabase/supabase";
import { useMutation } from "@tanstack/react-query";

export function useSignOut() {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  });
}
