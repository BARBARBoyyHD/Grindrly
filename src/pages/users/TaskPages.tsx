import TaskListComponents from "../../components/Tasks/TaskListComponents";
import UserProfileUI from "../../components/UI/UserProfileUI";
export default function TaskPages() {
  return (
    <main className="flex flex-col min-h-screen bg-[#232224]">
      <UserProfileUI />
      <TaskListComponents />
    </main>
  );
}
