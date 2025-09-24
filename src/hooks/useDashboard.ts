// hooks/useDashboard.ts
import { useQuery } from "@tanstack/react-query";
import supabase from "@/supabase/supabase";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function useTaskDashboard() {
  const user = useCurrentUser();
  const today = new Date().toISOString().split("T")[0];

  return useQuery<{ total: number; completed: number }>({
    queryKey: ["tasksDashboard", user?.id],
    queryFn: async () => {
      // total today’s tasks
      const { count: totalCount, error: totalError } = await supabase
        .from("tasks")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user?.id)
        .eq("due_date", today);

      if (totalError) throw totalError;

      // completed today’s tasks
      const { count: completedCount, error: completedError } = await supabase
        .from("tasks")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user?.id)
        .eq("due_date", today)
        .eq("is_complete", true);

      if (completedError) throw completedError;

      const stats = {
        total: totalCount ?? 0,
        completed: completedCount ?? 0,
      };

      // 👇 log the result so you can see in devtools console
      console.log("Task Dashboard Stats:", stats);

      return stats;
    },
  });
}

export function useWorkoutDashboard() {
  const user = useCurrentUser();

  return useQuery<{ total: number; completed: number }>({
    queryKey: ["workoutsDashboard", user?.id],
    queryFn: async () => {
      if (!user?.id) return { total: 0, completed: 0 };

      // total workouts (all time)
      const { count: totalCount, error: totalError } = await supabase
        .from("workouts")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

      if (totalError) throw totalError;

      // completed workouts (all time)
      const { count: completedCount, error: completedError } = await supabase
        .from("workouts")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("is_complete", true);

      if (completedError) throw completedError;

      return {
        total: totalCount ?? 0,
        completed: completedCount ?? 0,
      };
    },
  });
}
