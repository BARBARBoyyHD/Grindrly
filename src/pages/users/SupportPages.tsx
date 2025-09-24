import useMobile from "@/hooks/useMobile";
import { motion } from "framer-motion";
import { useState } from "react";
import SideBarButton from "@/components/Dashboard/SideBarButton";
import SideBarMenu from "@/components/Dashboard/SideBarMenu";

export default function Support() {
  const isMobile = useMobile(768);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <section className="flex justify-center px-6 p-8 h-screen items-center bg-[#232224]">
      <div className="max-w-3xl mt-8 mb-8 w-full">
        <div className="fixed top-0 right-0 p-4">
          <SideBarButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          <SideBarMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
        <div>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 text-center italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            “Every small contribution fuels our mission to keep building and
            inspiring 🚀”
          </motion.p>
        </div>
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
            isMobile
              ? "flex-col gap-4 items-center"
              : "gap-8 items-start justify-center"
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
