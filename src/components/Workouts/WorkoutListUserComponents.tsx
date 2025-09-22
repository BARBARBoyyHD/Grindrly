import { motion } from "framer-motion";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDeleteTask, useGetTask } from "../../hooks/useTask";
import { formattedDate } from "../../lib/formatDate";
import { formatTime } from "../../lib/timeFormat";
import NewWorkoutButton from "./button/NewWorkoutButton";
import NewWorkoutForm from "./components/NewWorkoutComponents";
import UpdateWorkoutButton from "./button/EditWorkoutButton";
import UpdateWorkoutForm from "./components/UpdateWorkoutComponents";
export default function WorkoutListUserComponents() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: taskList, isLoading, error } = useGetTask();
  const { mutate: deleteTask } = useDeleteTask();

  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-4 px-6">
        <motion.h1
          className="text-center text-3xl sm:text-4xl text-white font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Workout's
        </motion.h1>
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <NewWorkoutButton onOpen={() => setIsOpen(true)} />
          <NewWorkoutForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </motion.div>
      </div>

      {isLoading && (
        <p className="text-white font-bold text-center">Loading tasks...</p>
      )}
      {error && (
        <p className="text-red-500 font-bold text-center">
          Error loading tasks: {error.message}
        </p>
      )}
      {taskList?.length === 0 && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-8 rounded-3xl text-center text-white font-bold">
            Add Your New Task Bro
          </div>
        </motion.div>
      )}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {taskList?.map((task) => (
          <motion.div
            key={task.id}
            className="bg-gradient-to-r from-[#FE9A5D] to-[#232224] 
                 hover:from-[#232224] hover:to-[#FE9A5D] 
                 p-6 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3 text-sm font-semibold text-white/90">
              <p>{formatTime(task.due_time)}</p>
              <p>{formattedDate(task.due_date)}</p>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate mb-4">
              {task.title}
            </h2>
            <p className="text-white/90 text-sm">{task.description}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm font-medium text-white/90">
              <p>Progress: {task.progress}</p>
              <div>
                <p
                  className={`${
                    task.is_complete ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {task.is_complete ? "Completed" : "Not Completed"}
                </p>
                <div className="flex gap-2">
                  <button onClick={() => deleteTask(task.id)}>
                    <FaTrash />
                  </button>
                  <UpdateWorkoutButton
                    onOpen={() => {
                      setSelectedId(task.id);
                      setIsUpdateOpen(true);
                    }}
                    id={task.id}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ONE modal outside the map */}
      {selectedId && (
        <UpdateWorkoutForm
          isOpen={isUpdateOpen}
          onClose={() => {
            setIsUpdateOpen(false);
            setSelectedId(null);
          }}
          id={selectedId}
        />
      )}
    </section>
  );
}
