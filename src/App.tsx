import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import { useLoader } from "./hooks/useLoader";
import LoginPages from "./pages/Auth/LoginPages";
import LandingPages from "./pages/LandingPages";
import NotFound from "./pages/NotFound";
import TaskPages from "./pages/users/TaskPages";
import WaitlistPages from "./pages/WaitlistPages";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SignUpPages from "./pages/Auth/SignUpPages";
import Loader from "./components/UI/Loader";

function App() {
  const loading = useLoader();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<LandingPages />} />
              <Route path="/auth/user/login" element={<LoginPages />} />
              <Route path="/auth/user/signup" element={<SignUpPages />}  key="signup"/>
              <Route element={<ProtectedRoutes />}>
                <Route path="/waitlist" element={<WaitlistPages />} />
              </Route>
              <Route path="/task" element={<TaskPages />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
