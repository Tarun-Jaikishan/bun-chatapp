import { CiSearch } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

import ContactPicker from "./common/ContactPicker";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-start items-start p-5 space-y-2">
      <div className="flex gap-2">
        <button
          type="button"
          className="text-white bg-purple-400 px-3 rounded-lg hover:bg-purple-500 duration-300"
          title="Add Contact"
        >
          <IoMdPersonAdd className="text-xl" />
        </button>
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
      </div>

      <ContactPicker
        isActive={true}
        name="Tarun Jaikishan"
        recentChat="1234567890"
        chatCount={0}
      />

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
        return (
          <ContactPicker
            name="Test 1"
            recentChat="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
          eligendi, quibusdam minima facilis laudantium, deserunt ab beatae vero
          quia aliquid voluptatibus numquam obcaecati magni similique labore!
          Sequi, repudiandae rerum?"
            chatCount={200}
            key={i}
          />
        );
      })}
    </div>
  );
}
