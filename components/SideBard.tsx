"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Box } from "./box";
import { SidebarItem } from "./SidebarItem";
import {AlbumLibrary} from "./AlbumLibrary";
interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    
      <aside className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[330px] p-2">
          <Box>
            <div
              className="
            flex flex-col gap-y-4 px-5"
            >
              {routes.map((route) => (
                <SidebarItem key={route.label} {...route} />
              ))}
            </div>
          </Box>
          <Box className="overflow-y-auto h-full ">
            <AlbumLibrary></AlbumLibrary>
          </Box>
          
        </div>
        <main className="h-full flex-1 overflow-auto py-2">{children}</main>
      </aside>
    
  );
};
