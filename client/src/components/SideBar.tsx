"use client";

import { Tooltip } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";

import ContactPicker from "./common/ContactPicker";
import { useState } from "react";

export default function SideBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative h-screen flex flex-col justify-start items-start p-5 ">
      {/* Search Bar */}
      <div className="sticky top-5 left-2 right-2 flex gap-2 mb-2 backdrop-filter backdrop-blur-md bg-white bg-opacity-30 z-10 rounded-lg">
        <Tooltip title="Add Contact">
          <button
            type="button"
            className="text-white bg-purple-400 px-3 rounded-lg hover:bg-purple-500 duration-300"
          >
            <IoMdPersonAdd className="text-xl" />
          </button>
        </Tooltip>

        <div className="flex w-full">
          <div className="flex items-center justify-center bg-purple-200 pl-2 py-2 rounded-l-lg">
            <CiSearch className="text-2xl" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
            className="bg-purple-200 px-2 py-2 rounded-r-lg text-black focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Contacts */}
      <div className="space-y-2">
        <ContactPicker
          isActive={true}
          name="Tarun Jaikishan"
          recentChat="1234567890"
          chatCount={0}
        />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => {
          return (
            <ContactPicker
              name={`Test ${i + 1}`}
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
    </div>
  );
}
