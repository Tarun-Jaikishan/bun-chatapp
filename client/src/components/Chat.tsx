"use client";

import { IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

import ReceiverChat from "./common/ReceiverChat";
import SenderChat from "./common/SenderChat";

type props = {
  name: string;
};

export default function Chat({ name }: props) {
  const date = Date.now();

  return (
    <div className="p-5 relative h-screen">
      {/* Top Bar */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div className="flex items-center gap-3">
          <IconButton>
            <CiSearch />
          </IconButton>
          <IconButton>
            <HiDotsVertical />
          </IconButton>
        </div>
      </div>

      {/* Chats */}
      <div className="mt-5 space-y-2 overflow-y-auto h-[calc(100vh-120px)] hide-scrollbar">
        {/* Messages */}

        <ReceiverChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />
        {/* <ReceiverChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <SenderChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        /> */}

        <SenderChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <SenderChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <SenderChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <SenderChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <ReceiverChat
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut
          ipsa accusamus officiis nesciunt debitis saepe excepturi ab et sint.
          Placeat inventore quibusdam alias quaerat, facere aut libero odit
          nemo."
          date={date}
        />

        <br />
        <br />

        {/* Chat Box */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-20 py-4 backdrop-filter backdrop-blur-md bg-white bg-opacity-30">
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-slate-200 pl-2 py-2 rounded-l-lg">
              <CiSearch className="text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Your Message"
              className="bg-slate-200 px-2 py-2 rounded-r-lg text-black focus:outline-none w-full"
            />
          </div>
          <button
            type="button"
            className="text-white bg-purple-400 px-3 rounded-lg hover:bg-purple-500 duration-300"
            title="Add Contact"
          >
            <IoSend className="text-lg" title="Send" />
          </button>
        </div>
      </div>
    </div>
  );
}
