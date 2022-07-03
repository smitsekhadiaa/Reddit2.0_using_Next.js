import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
type Props={
    seed?:string
    large?:boolean
}
function Avatar({seed, large}:Props){
    const {data:session}=useSession();

    return(
        <div className={`relative h-10 w-10 rounded-full border-gray-300 outline-none bg-white overflow-hidden ${large && 'h-20 2-20'}`}>
            <Image layout="fill" src={`https://avatars.dicebear.com/api/adventurer/${seed || session?.user?.name || 'placeholder'}.svg`}/>
        </div>
    )
}
export default Avatar