import Chat from "@/components/Chat";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/5 overflow-y-auto hide-scrollbar">
        {/*Removing h-screen*/}
        <SideBar />
      </div>
      <div className="w-4/5 overflow-y-auto ">
        {/*Removing h-screen*/}
        <Chat name="Tarun" />
      </div>
    </div>
  );
}
