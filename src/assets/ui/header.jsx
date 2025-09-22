import { useState } from "react"
import logo from '/images/logo.png'
import { HeaderMenu } from "../../lib/headerMenu"
import { PhoneCall } from "lucide-react"
import { MessageSquareText } from "lucide-react"
export default function Header() {
  
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
      <div className="w-full absolute left-0 right-0 top-7 z-10">
        <div className={`container flex justify-between items-center`}>
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-28 w-auto " />
          </div>
          <nav>
            <ul className="flex items-center justify-center gap-5">
              {HeaderMenu.map((menu, index) => (
                <li key={index} className="flex items-center">
                  <a
                    className="text-neutral-100 font-semibold text-sm uppercase hover:border-b-2 hover:border-red-800"
                    href={menu.link}
                  >
                    {menu.title}
                  </a>
                  {index !== HeaderMenu.length - 1 && (
                    <div className="border-r border-neutral-400 h-4 -mt-1 ml-5" />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <PhoneCall className="h-[1.1em] w-auto cursor-pointer text-neutral-200 hover:text-red-800 hover:stroke-3"/>
            <div className="border-r-1 border-neutral-400 h-4 "/>
            <MessageSquareText className="h-[1.1em] w-auto cursor-pointer text-neutral-200 hover:text-red-800 hover:stroke-3"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}