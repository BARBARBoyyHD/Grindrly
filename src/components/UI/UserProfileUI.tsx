import { useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { formattedDate } from "../../lib/formatDate";
import SideBarButton from "../Dashboard/SideBarButton";
import SideBarMenu from "../Dashboard/SideBarMenu";
export default function UserProfileUI() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const user = useCurrentUser();

  return (
    <div className="text-white bg-gradient-to-r from-[#FE9A5D] to-[#232224] p-6 rounded-xl rounded-t-none shadow-lg">
      <div>
        <div className="flex justify-end">
          <SideBarButton isOpen={isOpen} toggle={toggleMenu} />
        </div>

        <SideBarMenu isOpen={isOpen} toggle={toggleMenu} />
      </div>
      <div className="flex flex-col sm:flex-row  sm:justify-between gap-4">
        {/* Left side: avatar + user info */}
        <div className="flex items-center gap-4">
          <img
            src={user?.user_metadata.avatar_url}
            alt=""
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-2 border-white"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold truncate">
              {user?.user_metadata.name}
            </h1>
            <h1 className="text-sm sm:text-lg truncate">{user?.email}</h1>
          </div>
        </div>

        {/* Right side: created at */}
        <div className="text-right text-sm font-bold sm:text-base mt-auto opacity-80">
          {formattedDate(user?.created_at)}
        </div>
      </div>
    </div>
  );
}
