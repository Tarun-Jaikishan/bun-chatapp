import Image from "next/image";
import { twMerge } from "tailwind-merge";

import profile from "@/assets/profile.jpg";

type props = {
  className?: string;
};

export default function ContactPicker({ className = "" }: props) {
  return (
    <button
      type="button"
      className={twMerge(
        "flex items-center hover:bg-slate-200 duration-300 py-3 pl-3 text-start rounded-lg w-full",
        className
      )}
    >
      <Image src={profile} alt="profile" className="w-16 rounded-lg" />
      <div className="pl-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Tarun Jaikishan</h3>
          <h5 className="text-slate-400 text-sm">5m</h5>
        </div>
        <p className="text-sm min-w-[14rem] max-w-[14rem] whitespace-nowrap overflow-hidden text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
          eligendi, quibusdam minima facilis laudantium, deserunt ab beatae vero
          quia aliquid voluptatibus numquam obcaecati magni similique labore!
          Sequi, repudiandae rerum?
        </p>
      </div>
    </button>
  );
}
