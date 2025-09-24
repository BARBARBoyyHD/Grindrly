import { useWorkoutDashboard } from "@/hooks/useDashboard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { workoutMessages } from "./WorkoutMessage";


export default function WorkoutStat() {
  const { data, isLoading, error } = useWorkoutDashboard();

  if (isLoading) {
    return <p className="text-white">Loading task stats...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading stats</p>;
  }

  const total = data?.total || 0;
  const completed = data?.completed || 0;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
  const message = workoutMessages(progress);

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center text-white">
        <div className="w-[100px] h-[100px] mb-4">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#FE9A5D",
              trailColor: "rgba(255,255,255,0.2)",
            })}
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold">
          {completed} / {total} Workout Done
        </h1>
        <p className="text-sm opacity-80 mt-1">{message}</p>
      </div>
    </section>
  );
}
