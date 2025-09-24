export const taskMessage = (total: number, progress: number) => {
  if (total === 0) return "No tasks today yet 📌";
  if (progress === 0) return "Let’s get started 💪";
  if (progress < 100) return "Nice work, keep it up 🚀";
  return "All tasks done 🎉 Great job!";
};
