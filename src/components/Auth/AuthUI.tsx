import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from '../../supabase/supabase'
import { BASE_URL } from "../../config/BASE_URL";

export default function AuthUI() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#232224]">
        <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
          <Auth
            supabaseClient={supabase}
            redirectTo={`${BASE_URL}/waitlist`}
            providers={["google"]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#FE9A5D",
                    brandAccent: "#e07c3f",
                    inputBackground: "#f9fafb",
                    inputText: "#111827",
                  },
                },
              },
              className: {
                button:
                  "flex items-center justify-center gap-2 bg-[#FE9A5D] hover:bg-[#e07c3f] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-200",
                input:
                  "rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FE9A5D]",
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  social_provider_text: "Continue with {{provider}} 🚀",
                },
              },
            }}
          />
        </div>
      </div>
  )
}
