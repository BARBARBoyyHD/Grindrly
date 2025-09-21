import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/grindrlylogo.svg";

export default function Loader() {

  return (
    <AnimatePresence>
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#232224] text-white z-50 gap-4"
          initial={{ y: 0, opacity: 1 }} // start in place
          exit={{ y: "100%", opacity: 1 }} // swipe down off-screen
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex gap-2">
            <img src={Logo} alt="Grindrly Logo" className="animate-bounce" />
          </div>
        </motion.div>
    </AnimatePresence>
  );
}
