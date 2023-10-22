import { componentsProps } from "@/app/lib/data";
import { twMerge } from "tailwind-merge";

/** 
interface BoxProps {
    children: React.ReactNode
    className?: string
}
*/
export const Box: React.FC<componentsProps> = ({children,className}) => {
    return (  
    <div className={twMerge(`bg-neutral-900 
    rounded-lg
    h-fit
    w-full
  `,className)}>
        {children}
        </div>);
}
 
