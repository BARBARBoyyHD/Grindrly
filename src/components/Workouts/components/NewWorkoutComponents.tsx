import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNewWorkouts } from "@/hooks/useWorkouts";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

interface NewWorkoutFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type WorkoutFormState = {
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  weight_unit: "kg" | "lbs";
  is_complete: boolean;
};

export default function NewWorkoutForm({ isOpen, onClose }: NewWorkoutFormProps) {
  const newWorkout = useNewWorkouts();
  const user = useCurrentUser();

  const [formWorkout, setFormWorkout] = useState<WorkoutFormState>({
    exercise: "",
    sets: 0,
    reps: 0,
    weight: 0,
    weight_unit: "kg",
    is_complete: false,
  });

  const handleChange = (
    key: keyof WorkoutFormState,
    value: string | number | boolean
  ) => {
    setFormWorkout((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    newWorkout.mutate(
      {
        user_id: user.id,
        exercise: formWorkout.exercise,
        sets: formWorkout.sets,
        reps: formWorkout.reps,
        weight: formWorkout.weight,
        weight_unit: formWorkout.weight_unit,
        is_complete: formWorkout.is_complete,
      },
      {
        onSuccess: () => {
          setFormWorkout({
            exercise: "",
            sets: 0,
            reps: 0,
            weight: 0,
            weight_unit: "kg",
            is_complete: false,
          });
          onClose();
        },
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 w-full max-w-md text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-xl font-semibold mb-4">Add New Workout</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Exercise */}
              <input
                type="text"
                placeholder="Exercise"
                value={formWorkout.exercise}
                onChange={(e) => handleChange("exercise", e.target.value)}
                required
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />

              {/* Sets */}
              <input
                type="number"
                placeholder="Sets"
                value={formWorkout.sets}
                onChange={(e) => handleChange("sets", Number(e.target.value))}
                required
                min={1}
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />

              {/* Reps */}
              <input
                type="number"
                placeholder="Reps"
                value={formWorkout.reps}
                onChange={(e) => handleChange("reps", Number(e.target.value))}
                required
                min={1}
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />

              {/* Weight */}
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Weight"
                  value={formWorkout.weight}
                  onChange={(e) => handleChange("weight", parseFloat(e.target.value))}
                  required
                  min={0}
                  className="flex-1 p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
                />
                <select
                  value={formWorkout.weight_unit}
                  onChange={(e) => handleChange("weight_unit", e.target.value as "kg" | "lbs")}
                  className="p-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
                  required
                >
                  <option className="text-black" value="kg">kg</option>
                  <option className="text-black" value="lbs">lbs</option>
                </select>
              </div>

              {/* Completion toggle */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formWorkout.is_complete}
                  onChange={(e) => handleChange("is_complete", e.target.checked)}
                  className="w-4 h-4"
                />
                Mark as completed
              </label>

              {/* Buttons */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-gray-500/40 hover:bg-gray-500/60 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={newWorkout.isPending}
                  className="px-4 py-2 rounded-lg bg-[#FE9A5D] hover:bg-[#e07c3f] transition"
                >
                  {newWorkout.isPending ? "Adding..." : "Add Workout"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
