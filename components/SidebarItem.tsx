import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    label:string
    icon:IconType
    href:string
    active?:boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({label,icon:Icon,href,active}) => {
    return (
        <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full g-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-500 py-1`, active && 'text-white')}> 
        <Icon size={20}/>
        <p className='truncate w-full'>{label}</p>

        </Link>
      );
}
 