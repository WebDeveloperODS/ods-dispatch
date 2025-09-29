import { useState } from "react"
import logo from '/images/logo-3.png'
import { useEffect } from "react"
import { HeaderMenu } from "../../lib/headerMenu";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import SideBar from "./sidebar"

export default function Header() {
  const [callSticky, setCallSticky] = useState(false);
  const [openDropIndex, setOpenDropIndex] = useState(null); // Track which dropdown is open by index
  const location = useLocation()
  // const [homeCheck , setHomeCheck] = useState(true)
  
  
  useEffect(() => {
    let lastPosition = window.pageYOffset;
    const handleScroll = () => {
      let currentPosition = window.pageYOffset 
      // console.log('Current position: ', currentPosition, lastPosition)
      if(currentPosition > 800 && lastPosition > currentPosition){
        setCallSticky(true)
        lastPosition=currentPosition
      }else{
        setCallSticky(false)
        lastPosition=currentPosition
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  const handleMouseEnter = (index, hasChildPages) => {
    if (hasChildPages) {
      setOpenDropIndex(index);
    }
  }

  const handleMouseLeave = () => {
    setOpenDropIndex(null);
  }

  // useEffect(() => {
  //   if(location.pathname !== '/'){
  //     setHomeCheck(false)
  //   }
  // },[location])

  return (
    <>
    <div className="relative flex flex-col">
      <div className="hidden lg:block bg-red-800">
        <div className="container flex place-items-center items-center gap-3 pt-[5px] pb-[2px]">
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">MCLEOD TRAINED DISPATCHERS</a>
          <div className="border-r-1 border-neutral-100 h-4 -mt-1"/>
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">After hours dispatch</a>
          <div className="border-r-1 border-neutral-100 h-4 -mt-1"/>
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">Night dispatch</a>
        </div>
      </div>
      <div className={`w-full transition-all ease-in-out duration-300 ${callSticky ? 'fixed top-0 z-50 bg-white py-1 translate-y-0 shadow-sm shadow-neutral-300': 'absolute top-0 lg:top-7 z-10'} left-0 right-0 `}>
        <div className={`container flex justify-between items-center`}>
          <div className="flex items-center py-1">
            <img src={logo} alt="logo" className={`${callSticky ? 'h-21 lg:h-26':'h-25 lg:h-30'} w-auto cursor-pointer`} onClick={() => window.location.href='/'}/>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-center gap-5">
              {HeaderMenu.map((menu, index) => (
                <li key={index} 
                    className="flex items-center relative" 
                    onMouseEnter={() => handleMouseEnter(index, menu.childPages)}
                    onMouseLeave={handleMouseLeave}>
                  <a
                    className={`${callSticky ? 'text-neutral-800' :'text-neutral-100'} flex items-center justify-center gap-2 font-semibold text-sm uppercase ${ location.pathname === menu.link ? 'border-b-2 border-red-700 font-bold! text-shadow-xs':''} hover:border-b-2 hover:border-red-800 transition-all duration-200`}
                    href={menu.link}
                  >
                    {menu.title} 
                    {menu.childPages && (
                      <ChevronDown className={`h-4 w-auto stroke-3 -mt-[0.2em] transition-transform duration-200 ${openDropIndex === index ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                  {index !== HeaderMenu.length - 1 && (
                    <div className={`border-r ${callSticky ? 'border-neutral-800' :'border-neutral-400'} h-4 -mt-1 ml-5`} />
                  )}

                  {/* Dropdown Menu */}
                  {menu.childPages && (
                    <div 
                      className={`absolute top-full left-0 mt-2 min-w-60 bg-white rounded-lg shadow-lg border border-neutral-200 transition-all duration-200 transform ${
                        openDropIndex === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setOpenDropIndex(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {menu.childPages.map((child, childIndex) => (
                          <HashLink 
                            key={childIndex}
                            smooth
                            to={child.link || '#'}
                            className="block px-4 py-2 font-semibold text-sm text-neutral-700 hover:bg-red-50 hover:text-red-800 transition-colors duration-150 capitalize"
                          >
                            {child.title}
                          </HashLink>
                        ))}
                      </div>
                      {/* Arrow pointer */}
                      <div className="absolute -top-1 left-6 w-2 h-2 bg-white border-l border-t border-neutral-200 transform rotate-45"></div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3 lg:gap-5">
            <SideBar removeWhite={callSticky}/>
            <FaPhoneVolume className={`hidden lg:block h-3 lg:h-[1.1em] w-auto cursor-pointer ${callSticky ? 'text-neutral-800':'text-neutral-200'} hover:text-red-800 hover:stroke-3 transition-colors duration-200`}/>
            <div className="hidden lg:block border-r-1 border-neutral-400 h-4 "/>
            <AiFillMessage className={`hidden lg:block h-3 lg:h-[1.1em] w-auto cursor-pointer ${callSticky ? 'text-neutral-800':'text-neutral-200'} hover:text-red-800 hover:stroke-3 transition-colors duration-200`}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}