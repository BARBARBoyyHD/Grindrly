import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="flex justify-center px-6">
      <div className="max-w-3xl mt-8">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The Grindrly Story
        </motion.h1>

        {/* Content */}
        <div className="space-y-6 text-gray-200">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Grindrly was born out of a very real problem: waking up after
            graduation and not knowing what to do with my day. No clear tasks,
            no routine, just endless scrolling and overthinking. I realized I
            wasn’t alone — a lot of us struggle with staying consistent,
            building habits, and tracking the small wins that actually move us
            forward.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            That’s why I built Grindrly — a simple, all-in-one tool to track
            your daily tasks, log your workouts, and even check in with your
            mood. It’s designed for anyone who wants to bring more structure,
            motivation, and accountability into their life — without feeling
            overwhelmed by complicated apps. With Grindrly, you can:
          </motion.p>

          <motion.ul
            className="text-left space-y-3 mx-auto max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <li>✅ Organize your daily to-dos so you know exactly what to focus on.</li>
            <li>💪 Log workouts and track your fitness progress.</li>
            <li>😊 Keep tabs on your mood and energy to spot patterns over time.</li>
            <li>🏆 Compete on leaderboards and celebrate consistency with friends.</li>
          </motion.ul>

          <motion.p
            className="italic text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            It’s not about being <span className="font-bold">perfect</span> — it’s about{" "}
            <span className="font-bold">showing up every day</span> and making{" "}
            <span className="font-bold">small wins</span> add up to{" "}
            <span className="font-bold">big progress</span>. Grindrly helps you turn
            “I don’t know what to do today” into “
            <span className="font-bold">I crushed it today</span>.”
          </motion.p>
        </div>
      </div>
    </section>
  );
}
