import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { NewWorkout } from "@/types/workouts";
import { useCurrentUser } from "./useCurrentUser";
import supabase from "@/supabase/supabase";


export function useGetWorkouts(){
    const user = useCurrentUser();
    return useQuery({
        queryKey: ["workouts", user?.id],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("workouts")
                .select("id,user_id,exercise,sets,reps,weight,weight_unit,is_complete,created_at")
                .eq("user_id", user?.id);
            if (error) throw error;
            return data ?? [];
        }
    })
}

export function useNewWorkouts() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (workout: NewWorkout) => {
      const { data, error } = await supabase
        .from("workouts")
        .insert([workout])
        .select("user_id, exercise, sets, reps, weight, weight_unit, is_complete");
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}
