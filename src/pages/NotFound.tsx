import { useNavigate } from "react-router-dom";
import Logo from "../assets/grindrlylogo.svg";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col h-screen bg-[#232224] justify-center ">
      <div className="p-4 items-center flex flex-col">
        <img src={Logo} alt="" />
        <h1 className="text-[#FE9A5D] font-bold text-2xl">404</h1>
        <h2 className="text-white font-bold text-4xl">Page Not Found</h2>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => navigate("/")}
          className="bg-[#FE9A5D] p-2 rounded-md text-white px-4 py-2 cursor-pointer"
        >
          Go Back To Home
        </button>
      </div>
    </main>
  );
}
