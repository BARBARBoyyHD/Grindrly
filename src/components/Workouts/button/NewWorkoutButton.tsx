interface NewWorkoutButtonProps {
  onOpen: () => void;
}

export default function NewWorkoutButton({ onOpen }: NewWorkoutButtonProps) {
  return (
    <button
      onClick={onOpen}
      className="bg-[#FE9A5D] px-4 py-2 rounded-xl text-white font-semibold shadow-md hover:bg-[#e07c3f] transition"
    >
      + New Workout
    </button>
  );
}
