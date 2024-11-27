import { CiSearch } from "react-icons/ci";

import ContactPicker from "./common/ContactPicker";

export default function SideBar() {
  return (
    <aside className="flex flex-col justify-start items-start p-5 space-y-2">
      <div className="flex w-full">
        <div className="flex items-center justify-center bg-purple-200 pl-2 py-2 rounded-l-lg">
          <CiSearch className="text-2xl" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-purple-200 px-2 py-2 rounded-r-lg text-black focus:outline-none w-full"
        />
      </div>
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
      <ContactPicker />
    </aside>
  );
}
