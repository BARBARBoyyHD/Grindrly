import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase/supabase";
import type { NewTask } from "../types/task";

export function useNewTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: NewTask) => {
      const { data, error } = await supabase.from("tasks").insert([task]).select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
