import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetTodaysTasks } from "../../hooks/useTask";
import { formattedDate } from "../../lib/formatDate";
import { formatTime } from "../../lib/timeFormat";

export default function WorkoutsListComponents() {
  const { data: taskList, isLoading } = useGetTodaysTasks();

  return (
    <section className="p-4">
      <motion.div
        className="flex items-center justify-between mb-4 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-4xl text-white font-bold truncate">
          Today's Workout
        </h1>
        <Link to={"/task"}>
          <p className="text-white font-bold">see more</p>
        </Link>
      </motion.div>
      {isLoading && (
        <p className="text-white font-bold text-center">Loading tasks...</p>
      )}
      {taskList?.length === 0 && (
        <div className="flex justify-center items-center flex-col border-2 border-[#FE9A5D] rounded-3xl w-full p-8 ">
          <div className="rounded-3xl text-center text-white font-bold ">
            No tasks for today ? Add Some !!!
          </div>
          <Link to={"/workout"} className="text-white hover:text-[#FE9A5D]">
            Add Your Task Here !!!
          </Link>
        </div>
      )}
      <motion.div
        className="text-white flex gap-2 sm:flex-row flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {taskList?.slice(0, 4).map((task) => (
          <motion.div
            key={task.id}
            className="bg-gradient-to-r from-[#FE9A5D] to-[#232224] 
           hover:from-[#232224] hover:to-[#FE9A5D] 
           p-6 w-[330px] h-[150px] rounded-[50px] 
           transition-all duration-500 hover:scale-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between ">
              <p className="font-bold text-sm truncate">
                {formatTime(task.due_time)}
              </p>
              <p className="font-bold text-sm truncate">
                {formattedDate(task.due_date)}
              </p>
            </div>

            <h1 className="text-2xl font-bold truncate max-w-auto"> {task.title}</h1>
            <div className="flex justify-between items-center text-sm font-medium text-white/90 mt-6">
              <p>Progress: {task.progress}</p>
              <p
                className={`${
                  task.is_complete ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {task.is_complete ? "Completed" : "Not Completed"}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
