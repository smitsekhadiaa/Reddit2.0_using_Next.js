import Image from "next/image";
import React from "react";
import {ChevronDownIcon,HomeIcon, MenuIcon, SearchIcon, } from '@heroicons/react/solid';
import {BellIcon,ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon} from '@heroicons/react/outline';
import { signIn,signOut,useSession} from "next-auth/react";
function Header(){
    const {data : session}=useSession();
    return (
    <div className="sticky top-0 z-50 flex px-4 py-2 bg-white shadow-sm items-center">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image objectFit="contain" src="https://links.papareact.com/fqy" layout="fill"></Image>
        </div>
        <div className="flex item-center mx-7 xl:min-w-[300px] ">
            <HomeIcon className="h-5 w-5"/>
            <p className="flex-1 ml-2 hidden xl:inline cursor-pointer">Home</p>
            <ChevronDownIcon className="h-5 w-5"/>
        </div>
        <form className="flex flex-1 items-center space-x-2 rounded-sm border border-grey-200 bg-gray-100 px-3 py-1">
            <SearchIcon className="h-6 w-6 text-gray-400"/>
            <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search Reddit" />
            <button type="submit" hidden/>
        </form>
        <div className="flex mx-5 items-center space-x-2 text-gray-500 hidden lg:inline-flex">
            <BellIcon className="icon"/>
            <ChatIcon className="icon"/>
            <GlobeIcon className="icon"/>
            <hr className="h-10 border-gray-200"/>
            <SpeakerphoneIcon className="icon"/>
            <PlusIcon className="icon"/>
            <SparklesIcon className="icon"/>
            <VideoCameraIcon className="icon"/>
        </div>
        <div className="ml-5 flex items-center lg:hidden">
            <MenuIcon className="icon"/>
        </div>
        {/* SIGNIN and signout using sessions */}
        {session?(
             <div onClick={()=>{signOut()}} className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex cursor-pointer">
             <div className="relative h-5 w-5 flex-shrink-0">
                 <Image src="https://links.papareact.com/23l" layout="fill" alt="" objectFit="contain"/>
             </div>
             <p className="text-gray-600 trauncate">{session?.user?.name}</p>
             <ChevronDownIcon className="icon"/>
             
         </div>
        ):(
            <div onClick={()=>{signIn()}} className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex cursor-pointer">
            <div className="relative h-5 w-5 flex-shrink-0">
                <Image src="https://links.papareact.com/23l" layout="fill" alt="" objectFit="contain"/>
            </div>
            <p className="text-gray-400">Sign In</p>
            
        </div>
        )}
        
       
    </div>
    )
}
export default Header