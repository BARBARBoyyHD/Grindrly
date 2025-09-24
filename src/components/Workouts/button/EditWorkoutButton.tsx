import { FaPencilAlt } from "react-icons/fa";

interface UpdateWorkoutButtonProps {
  onOpen: () => void;
  id: string;
}

export default function UpdateWorkoutButton({
  onOpen,
}: UpdateWorkoutButtonProps) {
  return (
    <div>
      <button
        onClick={onOpen}
        className=" px-4 py-2 text-white font-semibold transition"
      >
        <FaPencilAlt />
      </button>
    </div>
  );
}
