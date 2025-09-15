import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/grindrlylogo.svg";
import useMobile from "../../hooks/useMobile";
import useScrollDown from "../../hooks/useScrollDown";
import NavbarMobile from "./NavbaMobile";
import NavbarMobileButton from "./NavbarMobileButton";
export default function NavBar() {
  const scrollDirection = useScrollDown();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMobile(768); // isMobile,
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
     className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 transition-transform duration-300 z-50
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Grindrly Logo" className="w-[40px]" />
        <h1 className="text-xl font-bold text-white">Grindrly</h1>
      </div>

      {/* Desktop nav */}
      {!isMobile && (
        <div className="flex flex-row items-center gap-[200px]">
          <ul className="flex items-center gap-8 text-white font-medium cursor-pointer">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Support">Support</a>
            </li>
          </ul>
          <button onClick={() => navigate("/auth/user/login")} className="bg-[#FE9A5D] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition cursor-pointer">
            Sign in
          </button>
        </div>
      )}

      {/* Mobile nav */}
      {isMobile && (
        <>
          <NavbarMobileButton isOpen={isOpen} toggle={toggleMenu} />
          <NavbarMobile isOpen={isOpen} toggle={toggleMenu} />
        </>
      )}
    </nav>
  );
}
