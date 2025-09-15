import { useEffect, useState, useCallback } from "react";

export default function useMobile(breakpoint: number) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
}
