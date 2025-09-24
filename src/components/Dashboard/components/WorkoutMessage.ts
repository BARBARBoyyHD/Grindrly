export const workoutMessages = (progress: number) => {
  if (progress === 100) return "Beast mode! Workout complete 🔥";
  if (progress >= 70) return "Strong performance, don’t stop 💯";
  if (progress >= 40) return "Nice grind, keep building endurance 💪";
  if (progress > 0) return "Warm-up done, keep pushing 🏃";
  return "Ready to train? 🏋️";
};
