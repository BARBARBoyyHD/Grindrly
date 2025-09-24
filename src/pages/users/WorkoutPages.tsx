import UserProfileUI from "../../components/UI/UserProfileUI";
import WorkoutListUserComponents from "@/components/Workouts/WorkoutListUserComponents";
export default function WorkoutPages() {
  return (
    <main className="flex flex-col min-h-screen bg-[#232224]">
      <UserProfileUI />
      <WorkoutListUserComponents />
    </main>
  );
}
