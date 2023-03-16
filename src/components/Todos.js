import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function Todos() {
  return (
    <div className=" sm: w-[70%] md: w-[60%] lg: w-[40%] pt-3rem w-[90%] mx-auto">
      <h1 className="text-2 font-medium text-center">Tailwind Todo List</h1>
      {/* Text input using a form */}
      <div>
        <form className="flex items-start gap-2 pt-2rem ">
          <div className="w-full bg-todo rounded-sm relative p-2 flex items-end">
            <textarea
              className="w-full bg-transparent outline-none resize-none text-sm"
              cols={30}
              rows={2}
              placeholder="Write your text"
            ></textarea>
            <span>
              <BsEmojiSmile />
            </span>
          </div>
          <button>
            <AiOutlinePlus />
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
