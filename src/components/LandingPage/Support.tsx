import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Support() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const renderMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    renderMobile();
    window.addEventListener("resize", renderMobile);
    return () => window.removeEventListener("resize", renderMobile);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="Support" className="flex justify-center px-6 p-8 h-screen items-center">
      <div className="max-w-3xl mt-8 mb-8 w-full">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Support Us
        </motion.h1>

        {/* Content */}
        <motion.div
          className={`flex ${
            isMobile ? "flex-col gap-4 items-center" : "gap-8 items-start justify-center"
          }`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Saweria Support */}
          <motion.a
            href="https://saweria.co/notuwithelifter"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isMobile ? "w-full" : ""
            } px-6 py-3 rounded-[8px] bg-[#FE9A5D] text-white text-center font-semibold inline-block`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Support Grindrly (Saweria)
          </motion.a>

          {/* PayPal Support */}
          <motion.div
            className={`flex flex-col items-center ${isMobile ? "w-full" : ""}`}
            variants={itemVariants}
          >
            <motion.a
              href="https://paypal.me/Mnahrulhayat"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isMobile ? "w-full" : ""
              } px-6 py-3 rounded-[8px] bg-white text-black text-center font-semibold inline-block`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Support Grindrly (Paypal)
            </motion.a>

            <motion.p
              className="text-sm mt-2 text-white text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Accept Payment Outside Indonesia
            </motion.p>
          </motion.div>

          {/* Optional note for PayPal */}
        </motion.div>
      </div>
    </section>
  );
}
