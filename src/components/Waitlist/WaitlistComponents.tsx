import { motion } from "framer-motion";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/grindrlylogo.svg";

export default function WaitlistComponents() {
  const navigate = useNavigate();

  return (
    <section className="mt-[70px] h-screen flex items-center flex-col px-4 w-full justify-center">
      {/* Logo */}
      <motion.img
        src={Logo}
        alt="Grindrly Logo"
        className="w-32 md:w-40 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-white text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        🎉 Thanks for joining <span className="text-[#FE9A5D]">Grindrly</span>!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-white text-lg md:text-xl mb-8 px-2 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        You’re officially on the waitlist and will be notified by email as soon
        as we launch. Get ready to track your daily wins, crush your goals, and
        level up your routine. We can’t wait to have you on board!
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {/* Back Button */}
        <motion.button
          className="bg-[#FE9A5D] text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          ← Home
        </motion.button>

        {/* Check Updates Button */}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-4 flex-col mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <motion.h1
          whileHover={{ scale: 1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-[#FE9A5D] transition-colors text-center duration-200 md:text-[40px]"
        >
          Check Out The Updates Here 👇👇👇
        </motion.h1>
        <motion.div className="flex items-center justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/muhammad-nahrul-hayat/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-white text-3xl hover:text-[#FE9A5D] transition-colors duration-200"
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@notuwithelifter"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="text-white text-3xl hover:text-[#FE9A5D] transition-colors duration-200"
          >
            <AiFillTikTok size={40} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
