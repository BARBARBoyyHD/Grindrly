import { useSignOut } from "@/hooks/useSignOut";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { sideBarItem } from "./sideBarItem";

interface SudeBarMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function SudeBarMenu({ isOpen, toggle }: SudeBarMenuProps) {
  const { mutate: signOut } = useSignOut();
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
          {sideBarItem.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="hover:text-[#FE9A5D] transition">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-4 w-full">
            <button
              onClick={() => signOut()}
              className="bg-[#FE9A5D] w-full text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
