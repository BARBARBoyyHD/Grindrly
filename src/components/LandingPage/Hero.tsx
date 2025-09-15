import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Bar from "../../assets/bar.svg"; // background image
import useMobile from "../../hooks/useMobile";

export default function Hero() {
  const isMobile = useMobile(768);
  const navigate = useNavigate();

  return (
    <section
    id="Home"
      className="mt-[70px] h-[100vh] flex justify-center items-center flex-col px-4"
      style={{
        backgroundImage: `url(${Bar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Headings */}
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isMobile ? (
            <div className="flex flex-col text-center w-full">
              <h1 className="text-white text-4xl font-bold mb-2">
                Your Daily Wins
              </h1>
              <h2 className="text-4xl font-bold text-white mb-6">
                All in One Place.
              </h2>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <h1 className="text-white text-6xl font-bold mb-2">
                Your Daily Wins
              </h1>
              <h2 className="text-6xl font-bold text-white mb-6 ml-[170px]">
                All in One Place.
              </h2>
            </div>
          )}
        </motion.div>

        {/* Subtext */}
        <motion.p
          className={`text-zinc-200 leading-relaxed mb-8 text-center ${
            isMobile ? "" : "text-[18px]"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Grindrly is your all-in-one personal tracker — manage your daily
          tasks, log workouts, and track your mood effortlessly. See your
          progress over time, compete on leaderboards, and stay motivated every
          day.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/auth/user/login")}
          className="bg-[#FE9A5D] cursor-pointer hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.8,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join The Waitlist
        </motion.button>
      </div>
    </section>
  );
}
