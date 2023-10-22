'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import {BsFillPlayCircleFill} from 'react-icons/bs'


interface listITemProps {
    image:string
    href:string
    name:string
}

const ListITem:React.FC<listITemProps> = ({image,href,name}) => {
    const router = useRouter()
    const onClick = ()=> {
        //add auth before push
        router.push(href)
    }
    return ( 
    <button onClick={onClick} className="relative group flex items-center rounded-lg overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20
    transition pr-4"
    >
        <div className="relative min-h-[70px] min-w-[70px]">
            <Image className=" object-cover " fill src={image} alt="image"/>
        </div>
        <p className="font-medium truncate py-5">
            {name}
        </p>
        <div className="absolute right-5 transition text-black bg-black rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center hover:scale-110">

        <BsFillPlayCircleFill color='#49CD2E' size= {40}/>
        </div>
    </button> );
}
 
export  {ListITem};