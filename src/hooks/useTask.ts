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
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user_id,
  });
}

export function useGetSingleTask(task_id: string | null) {
  const userId = useCurrentUser()?.id;

  return useQuery({
    queryKey: ["tasks", task_id, userId],
    queryFn: async () => {
      if (!task_id || !userId) return null;

      const { data, error } = await supabase
        .from("tasks")
        .select("id,user_id,title,description,progress,is_complete,due_date,due_time")
        .eq("id", task_id)
        .eq("user_id", userId) // ✅ ensures task belongs to the current user
        .single(); // ✅ directly get one row

      if (error) throw error;
      return data;
    },
    enabled: !!task_id && !!userId, // ✅ only run when both exist
  });
}

export function useGetTodaysTasks() {
  const user_id = useCurrentUser()?.id;

  return useQuery({
    queryKey: ["tasks", user_id],
    queryFn: async () => {
      if (!user_id) return [];

      // Get today's date in YYYY-MM-DD
      const today = new Date().toISOString().split("T")[0];

      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user_id)
        .eq("due_date", today) // since due_date is a date type
        .order("due_date", { ascending: false });

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
        .select("user_id,title,description,progress,is_complete,due_date,due_time");
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (task_id: DeleteTask | null) => {
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

export function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({id, ...task}: UpdateTask) => {
      const { data, error } = await supabase
        .from("tasks")
        .update(task)
        .eq("id", id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
