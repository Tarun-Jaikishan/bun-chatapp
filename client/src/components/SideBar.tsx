import ContactPicker from "./common/ContactPicker";

export default function SideBar() {
  return (
    <aside className="flex flex-col justify-start items-start">
      <div>
        <input type="text" placeholder="Search" className="" />
      </div>
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
    </aside>
  );
}
