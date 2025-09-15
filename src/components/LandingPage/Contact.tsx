import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/grindrlylogo.svg";
export default function Contact() {
  return (
    <footer id="Contact" className="bg-[#FE9A5D]">
      <div className="flex items-center py-2 justify-center gap-2">
        <img src={Logo} alt="Grindrly Logo" className="w-[100px]" />
        <h1 className="text-2xl font-bold text-white">Grindrly</h1>
      </div>
      <div className="flex items-center text-2xl py-2 justify-center text-white font-semibold gap-4">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Support">Support</a>
      </div>
      <div className="flex text-white justify-center gap-4 mb-2">
        <Link to={"https://www.instagram.com/notuwithelifter/"}>
          <RiInstagramFill size={40} />
        </Link>
        <Link to={"https://www.tiktok.com/@notuwithelifter"}>
          <AiFillTikTok size={40} />
        </Link>
        <Link to={"https://www.linkedin.com/in/muhammad-nahrul-hayat/"}>
          <FaLinkedin size={40} />
        </Link>
      </div>
    </footer>
  );
}
