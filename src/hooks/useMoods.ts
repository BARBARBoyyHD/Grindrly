import supabase from "@/supabase/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  NewUserMood,
  DeleteUserMood,
  UpdateUserMood,
} from "@/types/userMoods";
import { useCurrentUser } from "./useCurrentUser";

export function useGetMoods() {
  const user = useCurrentUser();
  return useQuery({
    queryKey: ["moods"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("moods")
        .select(
          "id, user_id, mood_id, ,mood_emoji, mood_score, note,logged_at, created_at"
        );
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });
}

export function useGetSingleMood() {
  const user = useCurrentUser();
  return useQuery({
    queryKey: ["moods"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("moods")
        .select(
          "id, user_id, mood_id, ,mood_emoji, mood_score, note,logged_at, created_at"
        );
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });
}

export function useNewMoods() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (mood: NewUserMood) => {
      const { data, error } = await supabase
        .from("moods")
        .insert([mood])
        .select(
          "id, user_id, mood_id, ,mood_emoji, mood_score, note,logged_at, created_at"
        );
      if (error) throw error;

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["moods"] });
    },
  });
}

export function useDeletMoods() {
  return useMutation({
    mutationFn: async (mood_id: DeleteUserMood) => {
      const { data, error } = await supabase
        .from("moods")
        .delete()
        .eq("id", mood_id);
      if (error) throw error;
      return data;
    },
  });
}

export function useUpdateMoods() {
  return useMutation({
    mutationFn: async ({ id, ...mood }: UpdateUserMood) => {
      const { data, error } = await supabase
        .from("moods")
        .update(mood)
        .eq("id", id);
      if (error) throw error;
      return data;
    },
  });
}
