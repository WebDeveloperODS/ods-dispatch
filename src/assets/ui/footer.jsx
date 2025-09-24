import { ArrowRight } from "lucide-react"
import { HeaderMenu } from "../../lib/headerMenu"
import { P1, P2 } from "./components/descriptions"
import { H2, H3 } from "./components/heading-1"


const Footer = () => {
  return (
    <div className='bg-slate-900'>
        <div className='container flex lg:grid lg:grid-cols-3 gap-8 pt-15 pb-10'>
            <div className="flex flex-col gap-2">
              <H2 extraCss={'text-neutral-100 font-bold uppercase underline underline-offset-3 decoration-3 decoration-red-800 tracking-wider'}>ODS Dispatch</H2>
              <P2 extraClass="text-neutral-100 font-light capitalize tracking-wide">
                ODS Dispatch is a trusted dispatching partner across North America, providing specialized services for dry vans, reefers, car haulers, and towing companies. Our professional night dispatch solutions help carriers of every size cut costs, improve efficiency, and scale with confidence. With ODS Dispatch, you gain reliable, dedicated, and cost-effective dispatching support that keeps your business moving forward.
              </P2>
            </div>
            <div className="flex flex-col gap-2">
              <H3 extraCss={'text-neutral-100 font-bold capitalize tracking-wider'}>Quick Access</H3>
              {
                HeaderMenu.map((menu) => <a className="text-neutral-100 flex items-center gap-2 border-b-2 hover:border-red-800" href={menu.link}><ArrowRight className="h-4 w-auto" /> {menu.title}</a>)
              }
            </div>
            <div className="flex flex-col gap-2">
              <H2 extraCss={'text-neutral-100 font-bold uppercase underline underline-offset-3 decoration-3 decoration-red-800 tracking-wider'}>ODS Dispatch</H2>
              <P2 extraClass="text-neutral-100 font-light capitalize tracking-wide">
                ODS Dispatch is a trusted dispatching partner across North America, providing specialized services for dry vans, reefers, car haulers, and towing companies. Our professional night dispatch solutions help carriers of every size cut costs, improve efficiency, and scale with confidence. With ODS Dispatch, you gain reliable, dedicated, and cost-effective dispatching support that keeps your business moving forward.
              </P2>
            </div>
        </div>
    </div>
  )
}

export default Footer