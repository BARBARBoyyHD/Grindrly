import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface NavbarMobileProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function NavbarMobile({ isOpen, toggle }: NavbarMobileProps) {
  const navigate = useNavigate()
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggle}
          className="fixed inset-0 backdrop-blur-sm z-40 w-full h-screen"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 z-50 transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggle}
            className="text-white text-2xl hover:text-[#FE9A5D] transition"
          >
            <RiCloseLine />
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col items-start gap-6 p-6 pt-2 text-white font-medium">
          <li>
            <a href="#Home"  className="hover:text-[#FE9A5D]">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-[#FE9A5D]">
              About
            </a>
          </li>
          <li>
            <a
              href="#Support"
              
              className="hover:text-[#FE9A5D]"
            >
              Support
            </a>
          </li>
          <li className="mt-4 w-full">
            <button
              onClick={()=>{navigate("/auth/user/login")}}
              className="bg-[#FE9A5D] w-full text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
