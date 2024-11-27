import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-full"></div>
    </div>
  );
}
