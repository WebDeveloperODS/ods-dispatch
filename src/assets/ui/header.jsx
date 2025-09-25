import { useState } from "react"
import logo from '/images/logo-3.png'
import { useEffect } from "react"
import SideBar from "./sidebar"
export default function Header() {
  const [callSticky, setCallSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentPosition = window.pageYOffset 
      // console.log('Current position: ', currentPosition)
      if(currentPosition > 940){
        setCallSticky(true)
      }else{
        setCallSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <>
    <div className="relative flex flex-col">
      <div className="bg-red-800">
        <div className="container flex place-items-center items-center gap-3 pt-[5px] pb-[2px]">
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">MCLEOD TRIANED DISPATCHERS</a>
          <div className="border-r-1 border-neutral-100 h-4 -mt-1"/>
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">After hours dispatch</a>
          <div className="border-r-1 border-neutral-100 h-4 -mt-1"/>
          <a href="/" className="text-neutral-100 font-[500] text-sm uppercase hover:text-neutral-100 hover:stroke-3 cursor-pointer">Night dispatch</a>
        </div>
      </div>
      <div className={`w-full tranistion-all ease-in-out duration-0 ${callSticky ? 'fixed top-0 z-60 bg-white py-1 translate-y-0 shadow-sm shadow-neutral-300': 'absolute top-7 z-10'} left-0 right-0 `}>
        <div className={`container flex justify-between items-center`}>
          <div className="flex items-center py-1">
            <img src={logo} alt="logo" className={`${callSticky ? 'h-26':'h-30'} w-auto cursor-pointer`} onClick={() => window.location.href='/'}/>
          </div>
          {/* <nav>
            <ul className="flex items-center justify-center gap-5">
              {HeaderMenu.map((menu, index) => (
                <li key={index} className="flex items-center">
                  <a
                    className={`${callSticky ? 'text-neutral-800' :'text-neutral-100'} font-semibold text-sm uppercase ${menu.active === true ? 'text-red-700!':''} hover:border-b-2 hover:border-red-800`}
                    href={menu.link}
                  >
                    {menu.title}
                  </a>
                  {index !== HeaderMenu.length - 1 && (
                    <div className={`border-r ${callSticky ? 'border-neutral-800' :'border-neutral-400'} h-4 -mt-1 ml-5`} />
                  )}
                </li>
              ))}
            </ul>
          </nav> */}
          <div className="flex items-center gap-5">
            <SideBar removeWhite={callSticky}/>
            {/* <PhoneCall className={`h-[1.1em] w-auto cursor-pointer ${callSticky ? 'text-neutral-800':'text-neutral-200'} hover:text-red-800 hover:stroke-3`}/>
            <div className="border-r-1 border-neutral-400 h-4 "/>
            <MessageSquareText className={`h-[1.1em] w-auto cursor-pointer ${callSticky ? 'text-neutral-800':'text-neutral-200'} hover:text-red-800 hover:stroke-3`}/> */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}