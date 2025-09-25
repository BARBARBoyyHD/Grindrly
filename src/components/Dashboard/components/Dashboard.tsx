import TaskStat from "./TaskStat";
import WorkoutStat from "./WorkoutStat";

export default function Dashboard() {
  return (
    <section className="mt-4">
      <div className=" p-6 w-full bg-gradient-to-r from-[#FE9A5D] to-[#232224] h-auto rounded-2xl flex-col sm:flex-row flex items-center justify-center gap-6">
        <div className="p-4 w-full rounded-[6px] bg-black/30 shadow-md border-black/30 backdrop-blur-md ">
          <TaskStat />
        </div>
        <div className="p-4 w-full rounded-[6px] bg-black/30 shadow-md border-black/30 backdrop-blur-md">
          <WorkoutStat />
        </div>
      </div>
    </section>
  );
}
