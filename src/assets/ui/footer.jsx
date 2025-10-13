import { ArrowRight } from "lucide-react"
import { HeaderMenu } from "../../lib/headerMenu"
import { P1, P2 } from "./components/descriptions"
import { H2, H3 } from "./components/heading-1"
import { PhoneCall } from "lucide-react"
import { MailIcon } from "lucide-react"
import { MapPin } from "lucide-react"
import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"
// import { LinkedinIcon } from "lucide-react"


const Footer = () => {
  const trucks = [
    {
      title: 'Dry vans', link: '/truck-types#dry-vans'
    },
    {
      title: 'Straight box', link: '/truck-types#straight-box'
    },
    {
      title: 'Flatbed', link: '/truck-types#flatbed'
    },
    {
      title: 'Hotshot', link: '/truck-types#hotshot'
    },
    {
      title: 'Reefer', link: '/truck-types#reefer'
    },
    {
      title: 'Step Deck', link: '/truck-types#step-deck'
    },
    {
      title: 'RGN & Heavy haul', link: '/truck-types#rgn-heavy-haul'
    },
  ]
  return (
    <div className='bg-slate-900'>
        <div className='container flex flex-col lg:grid lg:grid-cols-[30%_19%_19%_31%] gap-8 pt-15 pb-10'>
            <div className="flex flex-col gap-2">
              <H2 extraCss={'text-neutral-100 font-bold uppercase underline underline-offset-3 decoration-3 decoration-red-800 tracking-wider'}>ODS Dispatch</H2>
              <P2 extraClass="text-neutral-100 font-light capitalize tracking-wide">
                ODS Dispatch is a trusted dispatching partner across North America, providing specialized services for dry vans, reefers, car haulers, and towing companies. Our professional night dispatch solutions help carriers of every size cut costs, improve efficiency, and scale with confidence. With ODS Dispatch, you gain reliable, dedicated, and cost-effective dispatching support that keeps your business moving forward.
              </P2>
            </div>
            <div className="flex flex-col gap-2">
              <H3 extraCss={'text-neutral-100 font-bold capitalize tracking-wider'}>Quick Access</H3>
              {
                HeaderMenu.map((menu,index) => <a key={index} className="text-neutral-100 flex items-center gap-2 w-fit border-b-1 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05] hover:border-red-800" href={menu.link}><ArrowRight className="h-4 w-auto" /> {menu.title}</a>)
              }
            </div>
            <div className="flex flex-col gap-2">
              <H3 extraCss={'text-neutral-100 font-bold capitalize tracking-wider'}>Truck Types Deal</H3>
              {
                trucks.map((truck,index) => <a key={index} className="text-neutral-100 flex items-center gap-2 w-fit border-b-1 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05] hover:border-red-800" href={truck.link}><ArrowRight className="h-4 w-auto" /> {truck.title}</a>)
              }
            </div>
            <div className="flex flex-col gap-3">
              <H3 extraCss={'text-neutral-100 font-bold capitalize tracking-wider'}>Others</H3>
              
              <a className="text-neutral-100 flex items-start gap-2 w-fit underline decoration-1 decoration-transparent underline-offset-6 transition-all ease-in-out duration-300 hover:scale-[1.05] hover:decoration-red-800"
                href={'tel:+13012024083'}>
                <PhoneCall className="h-4 w-auto mt-[0.175em]" /> (301) 202 4083
              </a>
              <a className="text-neutral-100 flex items-start gap-2 w-fit underline decoration-1 decoration-transparent underline-offset-6 transition-all ease-in-out duration-300 hover:scale-[1.05] hover:decoration-red-800"
                href={'mailto:info@odsdispatch.com'}>
                <MailIcon className="h-4 w-auto mt-[0.175em]" /> info@odsdispatch.com
              </a>
              <a className="text-neutral-100 flex items-start gap-2 w-fit underline decoration-1 decoration-transparent underline-offset-6 transition-all ease-in-out duration-300 hover:scale-[1.05] hover:decoration-red-800"
                href={''}>
                <MapPin className="h-4 w-auto mt-[0.175em]" /> 3911 Concord Pike, Wilmington, DE, USA - 19803
              </a>
              <H3 extraCss={'text-neutral-100 font-bold capitalize tracking-wider'}>Follow us at</H3>
              <div className="flex gap-3 text-neutral-100 -mt-2">
                <a href="https://www.facebook.com/odsdispatch" className="p-1 rounded-xl border-2 hover:bg-red-800 hover:border-transparent hover:stroke-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.1]">
                  <Facebook className="h-5 w-auto "/>
                </a>
                <a href="https://www.instagram.com/ods_dispatch27/?hl=en" className="p-1 rounded-xl border-2 hover:bg-red-800 hover:border-transparent hover:stroke-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.1]">
                  <Instagram className="h-5 w-auto "/>
                </a>
                {/* <a className="p-1 rounded-xl border-2 hover:bg-red-800 hover:border-transparent hover:stroke-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.1]">
                  <LinkedinIcon className="h-5 w-auto "/>
                </a> */}
              </div>
            </div>
        </div>
        <div className="flex items-center justify-center border-t container py-1 text-neutral-100">
          <h5 className="text-sm capitalize tracking-wide">All rights reserved by <span className="text-red-800 font-bold">ODS Dispatch</span> © 2025</h5>
        </div>
    </div>
  )
}

export default Footer
