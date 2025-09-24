import Dashboard from "@/components/Dashboard/components/Dashboard";
import TaskListUserComponents from "../../components/Tasks/TaskListUserComponents";
import UserProfileUI from "../../components/UI/UserProfileUI";
import WorkoutsListComponents from "@/components/Workouts/WorkoutsListComponents";


export default function Dashboards() {
  return (
    <main className="flex flex-col min-h-screen bg-[#232224]">
      <UserProfileUI />
      <Dashboard/>
      <TaskListUserComponents />
      <WorkoutsListComponents />
    </main>
  );
}
