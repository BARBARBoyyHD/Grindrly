import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNewTask } from "../../../hooks/useTask";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import TimePicker from "../../UI/TimePicker";

interface NewTaskFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTaskForm({ isOpen, onClose }: NewTaskFormProps) {
  const newTask = useNewTask();
  const user = useCurrentUser();

  // ✅ local form state
  const [formTask, setFormTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "", // new field for clock
    progress: "Not started",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return; // safety check

    newTask.mutate(
      {
        user_id: user.id,
        title: formTask.title,
        description: formTask.description,
        progress: formTask.progress, // now user-selected
        is_complete: formTask.progress === "Completed", // optional logic
        due_date: new Date(formTask.dueDate),
        due_time: formTask.dueTime,
      },
      {
        onSuccess: () => {
          setFormTask({
            title: "",
            description: "",
            dueDate: "",
            progress: "Not started",
            dueTime: "",
          });
        },
      }
    );

    onClose(); // close modal after submit
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
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Task title"
                value={formTask.title}
                onChange={(e) =>
                  setFormTask({ ...formTask, title: e.target.value })
                }
                required
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />
              <textarea
                placeholder="Task description"
                value={formTask.description}
                onChange={(e) =>
                  setFormTask({ ...formTask, description: e.target.value })
                }
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />
              <input
                type="date"
                value={formTask.dueDate}
                onChange={(e) =>
                  setFormTask({ ...formTask, dueDate: e.target.value })
                }
                required
                min={new Date().toISOString().split("T")[0]}
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              />
              {/* NEW: Progress select */}
              <select
                value={formTask.progress}
                onChange={(e) =>
                  setFormTask({ ...formTask, progress: e.target.value })
                }
                className="p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE9A5D]"
              >
                <option className="text-black" value="Not started">
                  Not started
                </option>
                <option className="text-black" value="In progress">
                  In progress
                </option>
                <option className="text-black" value="Completed">
                  Completed
                </option>
              </select>
              <TimePicker
                value={formTask.dueTime}
                onChange={(time) => setFormTask({ ...formTask, dueTime: time })}
                // optional: you can pass 15, 30, 60 minutes
              />

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
                  disabled={newTask.isPending}
                  className="px-4 py-2 rounded-lg bg-[#FE9A5D] hover:bg-[#e07c3f] transition"
                >
                  {newTask.isPending ? "Adding..." : "Add Task"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
