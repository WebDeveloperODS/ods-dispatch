import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

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
        <div onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className={`${callSticky ? 'flex':'hidden'} fixed bottom-5 right-5 w-fit bg-red-700 p-2 rounded-full cursor-pointer shadow-xs shadow-neutral-500 z-100`}>
            <ArrowUp className="stroke-3 text-neutral-100"/>
        </div>
    )
}