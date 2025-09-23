import { useEffect } from "react";
import { useState } from "react"

export default function SlideShow({children}){
    const SERVER = import.meta.env.VITE_IMAGES_SERVER
    const BgImages = [
        `${SERVER}/images/home/1.jpg`,
        `${SERVER}/images/home/2.jpg`,
        `${SERVER}/images/home/3.jpg`,
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BgImages.length);
        }, 4000);

        return () => clearInterval(interval);
    },[])
    return(
        <div className="relative w-full h-[calc(100vh-1rem)] overflow-hidden">
            {BgImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 -z-10 transition-all duration-3000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            ))}
            <div className="relative z-2 h-full flex items-end justify-end pb-20 bg-popup-bg">
                {children}
            </div>
        </div>
    )
}