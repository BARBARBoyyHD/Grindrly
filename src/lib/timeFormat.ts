 export const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(Number(hour), Number(minute));
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };