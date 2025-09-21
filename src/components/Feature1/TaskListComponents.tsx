import { useState } from "react";
import NewTaskButton from "./button/NewTaskButton";
import NewTaskForm from "./components/NewTaskComponents";
import { useGetTask } from "../../hooks/useTask";

export default function TaskListComponents() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: taskList, isLoading, error } = useGetTask();
  return (
    <section className="h-screen p-4 ">
      <h1 className="text-center text-2xl text-white">Your Task's</h1>
      <div>
        <NewTaskButton onOpen={() => setIsOpen(true)} />
        <NewTaskForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="text-white flex justify-center items-center flex-col gap-2">
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>Error loading tasks: {error.message}</p>}
        {taskList?.map((task) => (
          <div key={task.id} className="bg-[#FE9A5D] p-2 rounded-md">
            <h1>Title : {task.title}</h1>
            <p>Description : {task.description}</p>
            <p>Progress : {task.progress}</p>
            <p>Due Date : {task.due_date}</p>
            <p>Due Time : {task.due_time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
