import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import { useLoader } from "./hooks/useLoader";
import Loader from "./components/UI/Loader";
import pages from "./pages/index";
import ProtectedRoutes from "./utils/ProtectedRoutes";

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
              <Route path="/" element={<pages.LandingPages />} />
              <Route path="/auth/user/login" element={<pages.LoginPages />} />
              <Route
                path="/auth/user/signup"
                element={<pages.SignUpPages />}
                key="signup"
              />
              <Route element={<ProtectedRoutes />}>
                <Route path="/waitlist" element={<pages.WaitlistPages />} />
                <Route path="/task" element={<pages.TaskPages />} />
                <Route path="/dashboard" element={<pages.Dashboards />} />
                <Route path="/workout" element={<pages.WorkoutPages />} />
              </Route>

              <Route path="*" element={<pages.NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
