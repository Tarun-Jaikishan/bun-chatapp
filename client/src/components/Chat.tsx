"use client";

import { useEffect, useRef, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { faker } from "@faker-js/faker";
import { CiSearch } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

import ReceiverChat from "./common/ReceiverChat";
import SenderChat from "./common/SenderChat";

type props = {
  name: string;
};

export default function Chat({ name }: props) {
  const [text, setText] = useState("");
  const [chats, setChats] = useState<any[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const date = Date.now();

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const type = faker.helpers.arrayElement(["sender", "receiver"]);
      const text = faker.lorem.sentences();
      const date = faker.date.recent();

      setChats((prev) => [...prev, { type, text, date }]);
    }
  }, []);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    setChats((prev) => [...prev, { type: "sender", text, date: Date.now() }]);
    setText("");

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="p-5 relative h-screen">
      {/* Top Bar */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <div className="flex items-center gap-3">
          <Tooltip title="Search">
            <IconButton>
              <CiSearch />
            </IconButton>
          </Tooltip>

          <IconButton>
            <HiDotsVertical />
          </IconButton>
        </div>
      </div>

      {/* Chats */}
      <div className="mt-5 space-y-2 overflow-y-auto h-[calc(100vh-120px)] hide-scrollbar">
        {/* Messages */}

        {chats.map((item, i) => {
          if (item.type === "receiver")
            return <ReceiverChat text={item.text} date={item.date} key={i} />;
          else return <SenderChat text={item.text} date={item.date} key={i} />;
        })}

        <br />
        <br />

        {/* Chat Box */}
        <form
          onSubmit={handleSend}
          className="absolute bottom-0 left-0 right-0 flex gap-2 px-20 py-4 backdrop-filter backdrop-blur-md bg-white bg-opacity-30"
        >
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-slate-200 pl-2 py-2 rounded-l-lg">
              <CiSearch className="text-2xl" />
            </div>
            <input
              type="text"
              onChange={handleChange}
              value={text}
              placeholder="Your Message"
              className="bg-slate-200 px-2 py-2 rounded-r-lg text-black focus:outline-none w-full"
              required
            />
          </div>
          {text.length > 0 ? (
            <Tooltip title="Send">
              <button
                type="submit"
                className="text-white bg-purple-400 px-3 rounded-lg hover:bg-purple-500 duration-300"
              >
                <IoSend className="text-lg" />
              </button>
            </Tooltip>
          ) : (
            <button
              type="button"
              className="text-white bg-purple-400 px-3 rounded-lg duration-300"
              disabled
            >
              <IoSend className="text-lg" />
            </button>
          )}
        </form>
      </div>

      <audio className="hidden" ref={audioRef} controls>
        <source src={"/audio/sound1.mp3"} type="audio/mpeg" />
      </audio>
    </div>
  );
}
