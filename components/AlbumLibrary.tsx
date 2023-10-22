"use client";

import { BiLibrary } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai"

const AlbumLibrary = () => {
  const onClick = () => {
    //handler later
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className=" inline-flex items-center gap-2">
          <BiLibrary size={20} className="text-neutral-400" />
          <p className=" text-neutral-400 font-medium text-sm">Your library </p>
        </div>
        <AiOutlinePlus onClick={onClick} size={18} className= "text-neutral-400 cursor-pointer hover:text-white transition"/>
        
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        list of song
      </div>
    </div>
  );
};

export { AlbumLibrary };
