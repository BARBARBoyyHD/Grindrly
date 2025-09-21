import { FaPencilAlt } from "react-icons/fa";

interface UpdateTaskButtonProps {
  onOpen: () => void;
  id: string;
}

export default function UpdateTaskButton({ onOpen }: UpdateTaskButtonProps) {
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
