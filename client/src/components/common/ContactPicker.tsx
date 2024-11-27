import Image from "next/image";
import { twMerge } from "tailwind-merge";

import profile from "@/assets/profile.jpg";

type props = {
  className?: string;
  isActive?: boolean;
  name: string;
  recentChat: string;
  chatCount: number;
};

export default function ContactPicker({
  className = "",
  isActive = false,
  name,
  recentChat,
  chatCount,
}: props) {
  const isOneDigit = chatCount < 10;

  return (
    <button
      type="button"
      className={twMerge(
        `flex items-center hover:bg-slate-200 duration-300 py-3 pl-3 text-start rounded-lg w-full ${
          isActive ? "bg-slate-200" : ""
        }`,
        className
      )}
    >
      <Image src={profile} alt="profile" className="w-16 rounded-lg" />
      <div className="px-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <h5 className="text-slate-400 text-sm">5m</h5>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`text-sm min-w-[14rem] max-w-[14rem] whitespace-nowrap overflow-hidden text-ellipsis text-slate-500 ${
              isActive ? "text-purple-400" : ""
            }`}
          >
            {recentChat}
          </p>
          {chatCount > 0 ? (
            <div
              className={`${
                isOneDigit ? "w-6 h-6" : "w-6 h-6 px-1.5"
              } bg-purple-400 rounded-full text-white text-xs flex items-center justify-center`}
            >
              {chatCount}
            </div>
          ) : (
            <div className="w-6 h-6"></div>
          )}
        </div>
      </div>
    </button>
  );
}
