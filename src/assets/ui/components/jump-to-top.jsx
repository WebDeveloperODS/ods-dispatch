import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function JumpToTop(){
    const [callSticky, setCallSticky]=useState(false)
    useEffect(() => {
        const handleScroll = () => {
            let currentPosition = window.pageYOffset 
            // console.log('Current position: ', currentPosition)
            if(currentPosition > 200){
                setCallSticky(true)
            }else{
                setCallSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return(
        <div className={`flex flex-col items-center gap-4 fixed bottom-5 lg:bottom-7 right-5 w-fit z-100`}>
            
            <div onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}  className={`${callSticky ? 'flex' : 'hidden'} bg-red-700 p-3 rounded-full cursor-pointer shadow-xs shadow-neutral-500 transition-all duration-300 ease-in-out hover:scale-[1.1]`}>
                <ArrowUp className="stroke-3 h-6 lg:h-7 w-auto text-neutral-100"/>
            </div>
            <div onClick={() => window.open(`https://wa.me/19714727066?text=Hello%20ODS%20Dispatch,%20I’m%20curious%20about%20the%20solutions%20you%20offer.%20Can%20we%20chat%20about%20how%20your%20services%20could%20help%20my%20business%3F`, '_blank', 'noopener, noreferrer')} className="bg-green-600 p-3 rounded-full cursor-pointer shadow-xs shadow-neutral-500 transition-transform duration-300 ease-in-out hover:scale-[1.1]">
                <FaWhatsapp className="stroke-3 h-6 lg:h-7 w-auto text-neutral-100"/>
            </div>
            
        </div>
    )
}