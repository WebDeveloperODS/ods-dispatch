import { ArrowUpRightFromCircle } from "lucide-react";
import { PageButton } from "../components/buttons";
import { P1 } from "../components/descriptions";
import { H2 } from "../components/heading-1";

export default function WhyNeedSocialMedia(){
    return(
        <div className="container pt-24 flex flex-col items-center justify-center gap-5">
            <H2 extraCss={'uppercase underline underline-offset-5 decoration-3 decoration-red-800'}>Why Truckers Need Social Media Marketing</H2> 
            <P1 extraClass="text-center px-20 capitalize tracking-wide">{`Most trucking companies rely only on dispatchers or word-of-mouth for loads. But in today’s digital world, shippers, brokers, and even drivers are online. If your business isn’t visible there, you’re missing out.`}</P1>
            <img className="h-100 w-full object-center object-cover rounded-xl shadow-xl shadow-neutral-400" src="/images/home/19.png" />
            <PageButton addressLink={'/about-us#smm-by-ods'} extraClass={'flex gap-2 justify-center items-center text-red-800 border-2 hover:border-transparent hover:bg-red-800 hover:text-neutral-100 mt-10 leading-tight hover:scale-[1.05]'}>{`Let's try it`} <ArrowUpRightFromCircle className="w-4 stroke-3 h-auto -mt-1"/></PageButton>
        </div>
    )
}