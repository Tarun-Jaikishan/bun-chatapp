import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/5 sticky top-0 h-screen overflow-y-auto hide-scrollbar">
        <SideBar />
      </div>
      <div className="w-4/5 overflow-y-auto">asad</div>
    </div>
  );
}
