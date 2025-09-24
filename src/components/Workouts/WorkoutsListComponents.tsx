import { useGetWorkouts } from "@/hooks/useWorkouts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WorkoutsListComponents() {
  const { data: workoutList, isLoading } = useGetWorkouts();

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
        <Link to={"/workout"}>
          <p className="text-white font-bold">see more</p>
        </Link>
      </motion.div>
      {isLoading && (
        <p className="text-white font-bold text-center">Loading workouts...</p>
      )}
      {workoutList?.length === 0 && (
        <div className="flex justify-center items-center flex-col border-2 border-[#FE9A5D] rounded-3xl w-full p-8 ">
          <div className="rounded-3xl text-center text-white font-bold ">
            No workouts for today ? Add Some !!!
          </div>
          <Link to={"/workout"} className="text-white hover:text-[#FE9A5D]">
            Add Your workout Here !!!
          </Link>
        </div>
      )}
      <motion.div
        className="text-white flex gap-2 sm:flex-row flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {workoutList?.slice(0, 4).map((workout) => (
          <motion.div
            key={workout.id}
            className="bg-gradient-to-r from-[#FE9A5D] to-[#232224] 
                          hover:from-[#232224] hover:to-[#FE9A5D] 
                          w-full sm:w-1/2 lg:w-1/4
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

              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
