import { useDeleteWorkout, useGetWorkouts } from "@/hooks/useWorkouts";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import UpdateWorkoutButton from "./button/EditWorkoutButton";
import NewWorkoutButton from "./button/NewWorkoutButton";
import NewWorkoutForm from "./components/NewWorkoutComponents";
import UpdateWorkoutForm from "./components/UpdateWorkoutComponents";
import type { Workouts } from "@/types/workouts";

export default function WorkoutListUserComponents() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: workoutList, isLoading, error } = useGetWorkouts();
  const { mutate: deleteWorkout } = useDeleteWorkout();

  return (
    <section className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-6">
        <motion.h1
          className="text-center text-3xl sm:text-4xl text-white font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Workouts
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

      {/* Loading / Error */}
      {isLoading && (
        <p className="text-white font-bold text-center">Loading Workouts...</p>
      )}
      {error && (
        <p className="text-red-500 font-bold text-center">
          Error loading Workouts: {error.message}
        </p>
      )}
      {workoutList?.length === 0 && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-8 rounded-3xl text-center text-white font-bold">
            Add Your New Workout Bro
          </div>
        </motion.div>
      )}

      {/* Workout Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {workoutList?.map((workout: Workouts) => (
          <motion.div
            key={workout.id}
            className="bg-gradient-to-r from-[#FE9A5D] to-[#232224] 
                 hover:from-[#232224] hover:to-[#FE9A5D] 
                 p-6 rounded-[50px] shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate mb-2">
              {workout.exercise}
            </h2>

            {/* Details */}
            <div className="text-white/90 text-sm mb-4">
              <p>
                <span className="font-semibold">Sets:</span> {workout.sets}
              </p>
              <p>
                <span className="font-semibold">Reps:</span> {workout.reps}
              </p>
              <p>
                <span className="font-semibold">Weight:</span> {workout.weight}{" "}
                {workout.weight_unit}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm font-medium text-white/90">
              <p
                className={`${
                  workout.is_complete ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {workout.is_complete ? "Completed" : "Not Completed"}
              </p>

              <div className="flex gap-2">
                <button onClick={() => deleteWorkout(workout.id)}>
                  <FaTrash />
                </button>
                <UpdateWorkoutButton
                  onOpen={() => {
                    setSelectedId(workout.id);
                    setIsUpdateOpen(true);
                  }}
                  id={workout.id}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Update Modal */}
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
