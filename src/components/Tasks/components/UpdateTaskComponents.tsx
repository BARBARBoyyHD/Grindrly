import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useUpdateTask, useGetSingleTask } from "../../../hooks/useTask";
import TimePicker from "../../UI/TimePicker";

interface updateTaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export default function UpdateTaskForm({
  isOpen,
  onClose,
  id,
}: updateTaskFormProps) {
  const updateTask = useUpdateTask();
  const user = useCurrentUser();
  const { data: singleTask, isLoading } = useGetSingleTask(id);

  // ✅ local form state
  const [formTask, setFormTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    progress: "Not started",
  });

  // ✅ Prefill form when singleTask is loaded
  useEffect(() => {
    if (singleTask) {
      setFormTask({
        title: singleTask.title || "",
        description: singleTask.description || "",
        dueDate: singleTask.due_date
          ? new Date(singleTask.due_date).toISOString().split("T")[0]
          : "",
        dueTime: singleTask.due_time || "",
        progress: singleTask.progress || "Not started",
      });
    }
  }, [singleTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    updateTask.mutate(
      {
        id: id,
        user_id: user.id,
        title: formTask.title,
        description: formTask.description,
        progress: formTask.progress,
        is_complete: formTask.progress === "Completed",
        due_date: new Date(formTask.dueDate), // already YYYY-MM-DD
        due_time: formTask.dueTime,
      },
      {
        onSuccess: () => {
          setFormTask({
            title: "",
            description: "",
            dueDate: "",
            dueTime: "",
            progress: "Not started",
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
            <h2 className="text-xl font-semibold mb-4">Update Task</h2>

            {isLoading ? (
              <motion.p
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                Loading task...
              </motion.p>
            ) : (
              <motion.form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <input
                  type="text"
                  placeholder="Task title"
                  value={formTask.title}
                  onChange={(e) =>
                    setFormTask({ ...formTask, title: e.target.value })
                  }
                  required
                  className="p-2 rounded-lg bg-white/20 border border-white/30 text-white"
                />

                <textarea
                  placeholder="Task description"
                  value={formTask.description}
                  onChange={(e) =>
                    setFormTask({ ...formTask, description: e.target.value })
                  }
                  className="p-2 rounded-lg bg-white/20 border border-white/30 text-white"
                />

                <input
                  type="date"
                  value={formTask.dueDate}
                  onChange={(e) =>
                    setFormTask({ ...formTask, dueDate: e.target.value })
                  }
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="p-2 rounded-lg bg-white/20 border border-white/30 text-white"
                />

                <select
                  value={formTask.progress}
                  onChange={(e) =>
                    setFormTask({ ...formTask, progress: e.target.value })
                  }
                  className="p-2 rounded-lg bg-white/20 border border-white/30 text-white"
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
                  onChange={(time) =>
                    setFormTask({ ...formTask, dueTime: time })
                  }
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
                    disabled={updateTask.isPending}
                    className="px-4 py-2 rounded-lg bg-[#FE9A5D] hover:bg-[#e07c3f] transition"
                  >
                    {updateTask.isPending ? "Updating..." : "Update Task"}
                  </button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
