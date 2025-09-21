import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase/supabase";
import type { NewTask, DeleteTask, UpdateTask } from "../types/task";
import { useCurrentUser } from "./useCurrentUser";

export function useGetTask() {
  const user_id = useCurrentUser()?.id;
  return useQuery({
    queryKey: ["tasks", user_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user_id);
      console.log(data);
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user_id,
  });
}

export function useNewTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (task: NewTask) => {
      const { data, error } = await supabase
        .from("tasks")
        .insert([task])
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask(task_id: DeleteTask | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", task_id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useGetSingleTask(task_id: number | null) {
  const userId = useCurrentUser()?.id;

  return useQuery({
    queryKey: ["task", task_id, userId],
    queryFn: async () => {
      if (!task_id || !userId) return null;

      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", task_id)
        .eq("user_id", userId) // ✅ ensures task belongs to the current user
        .single(); // ✅ directly get one row

      if (error) throw error;
      return data;
    },
    enabled: !!task_id && !!userId, // ✅ only run when both exist
  });
}

export function useUpdateTask(task_id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: UpdateTask) => {
      const { data, error } = await supabase
        .from("tasks")
        .update(task)
        .eq("id", task_id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
