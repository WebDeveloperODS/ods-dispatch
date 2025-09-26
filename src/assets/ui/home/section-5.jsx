import { P1 } from "../components/descriptions";
import { H2 } from "../components/heading-1";

export default function BenefitsOfUsingODS(){
    return(
        <div className="container grid grid-cols-2 gap-10 py-24">
            <div className="flex flex-col gap-2 my-auto">
                <H2>How ODS Dispatch Empowers Trucking Companies & Professional Drivers</H2>
                <P1>At <span className="font-extrabold text-red-800 tracking-wide">ODS Dispatch</span>, We take the stress out of trucking so you can focus on driving. Our dispatchers handle broker calls, paperwork, lumper fees, detention pay, and negotiations—while you choose your lanes and enjoy the highest-paying rates. With access to multiple load boards, we secure reliable dry van, flatbed, step deck, RGN, and reefer loads to keep your business profitable. Beyond dispatching, we also help you grow online with smart social media marketing and SEO strategies that strengthen your brand, boost visibility on search engines, and expand your global presence.</P1>
            </div>
            <div className="">
                <img className="h-100 object-cover object-center rounded-xl shadow-md shadow-neutral-500" src={`/images/home/8.jpg`}/>
            </div>
        </div>
    )
}