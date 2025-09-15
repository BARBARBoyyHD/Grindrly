import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

interface NavbarMobileButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function NavbarMobileButton({ isOpen, toggle }: NavbarMobileButtonProps) {
  return (
    <button onClick={toggle} className="text-white text-2xl">
      {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
    </button>
  );
}
