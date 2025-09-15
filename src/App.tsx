import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./assets/grindrlylogo.svg";
import LoginPages from "./pages/Auth/LoginPages";
import LandingPages from "./pages/LandingPages";
import WaitlistPages from "./pages/WaitlistPages";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      // maybe wait for session or assets
      await new Promise((resolve) => setTimeout(resolve, 500)); // optional tiny delay
      setLoading(false);
    };
    init();
  }, []);

  return (
    <BrowserRouter>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
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
        )}
      </AnimatePresence>

      {/* Main app */}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/auth/user/login" element={<LoginPages />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/waitlist" element={<WaitlistPages />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
