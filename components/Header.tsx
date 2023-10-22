"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Button } from "./Buttom";

interface headerProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<headerProps> = ({ children, className }) => {
  const router = useRouter();
  const handlerLogOut = () => {
    //
  };
  return (
    <header
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-700 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-80 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={32} className=" text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-80 transition"
            onClick={() => router.forward}
          >
            <RxCaretRight size={32} className=" text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
            <button className="flex items-center justify-center bg-white rounded-full
            p-2 hover:opacity-80 transition">
                <HiHome size ={18} className="text-black"/>
                
            </button>
            <button className="flex items-center justify-center bg-white rounded-full
            p-2 hover:opacity-80 transition">
                <BiSearch size ={18} className="text-black"/>
            </button>
        </div>
        <div className=" flex justify-between items-center gap-x-4">
            <>
            <div>
                <Button onClick={()=> {} } className="bg-transparent text-neutral-300 font-medium">
                    sing up
                </Button>
            </div>
            <div>
                <Button onClick={()=> {} } className="bg-white
                 text-neutral-800 
                 px-6
                 py-2
                 font-medium">
                    log in
                </Button>
            </div>
            </>
        </div>
      </div>
        {children}
    </header>
  );
};

export { Header };