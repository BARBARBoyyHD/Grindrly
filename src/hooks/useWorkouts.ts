import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { NewWorkout } from "@/types/workouts";
import { useCurrentUser } from "./useCurrentUser";
import supabase from "@/supabase/supabase";
import type { EditWorkout } from "@/types/workouts";

export function useGetWorkouts() {
  const user = useCurrentUser();
  return useQuery({
    queryKey: ["workouts", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("workouts")
        .select(
          "id,user_id,exercise,sets,reps,weight,weight_unit,is_complete,created_at"
        )
        .eq("user_id", user?.id);
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user?.id,
  });
}

export function useGetSingleWorkout(workout_id: string | null) {
  const user = useCurrentUser();
  return useQuery({
    queryKey: ["workouts", workout_id, user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("workouts")
        .select(
          "id,user_id,exercise,sets,reps,weight,weight_unit,is_complete,created_at"
        )
        .eq("id", workout_id)
        .eq("user_id", user?.id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!workout_id && !!user?.id,
  });
}

export function useNewWorkouts() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (workout: NewWorkout) => {
      const { data, error } = await supabase
        .from("workouts")
        .insert([workout])
        .select(
          "user_id, exercise, sets, reps, weight, weight_unit, is_complete"
        );
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}

export function useDeleteWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (workout_id: string | null) => {
      const { data, error } = await supabase
        .from("workouts")
        .delete()
        .eq("id", workout_id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}

export function useUpdateWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...workout }: EditWorkout) => {
      const { data, error } = await supabase
        .from("workouts")
        .update(workout)
        .eq("id", id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}
