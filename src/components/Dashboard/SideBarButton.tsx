import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

interface SideBarButtonProps {
  isOpen: boolean;
  toggle: () => void;
}


export default function SideBarButton({ isOpen, toggle }: SideBarButtonProps) {
  return (
    <button onClick={toggle} className="text-white text-2xl">
      {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
    </button>
  );
}
