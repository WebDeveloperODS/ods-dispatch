import { P1 } from "../components/descriptions";
import { H2 } from "../components/heading-1";

export default function BenefitsOfUsingODS(){
    return(
        <div className="container grid grid-cols-2 gap-10 py-24">
            <div className="flex flex-col gap-2 my-auto">
                <H2>How ODS Dispatch Empowers Trucking Companies & Professional Drivers</H2>
                <P1>At <span className="font-extrabold text-red-800 tracking-wide">ODS Dispatch</span>, We connect you directly with top freight brokers so you can focus entirely on driving. Our dispatchers handle broker follow-ups, lumper fees, and detention pay on your behalf. From paperwork to negotiations, we cover it all. You choose your preferred lanes, and we fight for the highest-paying rates and reliable routes. With access to multiple load boards, our team secures the best dry van, flatbed, step deck, RGN, and reefer loads—keeping you on the road and maximizing your earnings.</P1>
            </div>
            <div className="">
                <img className="h-100 object-cover object-center rounded-xl shadow-md shadow-neutral-500" src={`/images/home/8.jpg`}/>
            </div>
        </div>
    )
}