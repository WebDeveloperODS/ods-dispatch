import { ChevronRightCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { P1 } from "../components/descriptions";
import { H2, TagHead } from "../components/heading-1";

export default function ODS_Best_Option(){
    const Points = [
        {
            line: 'Transparent flat-rate dispatching for smarter financial planning'
        },{
            line: 'Around-the-clock coverage across America, no stress or burnout'
        },{
            line: 'Seamless integration with your existing systems and workflow'
        },{
            line:'Reliable, compliance-ready reporting and timely updates'
        },{
            line: 'ODS Dispatch experts trained and prepared from the start'
        }
    ]
    return(
        <div className="w-full relative bg-slate-900 min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - empty space for absolute positioned content */}
            <div className="hidden lg:block"/>
            
            {/* Right side - Video */}
            <div className="relative min-h-96 lg:min-h-80">
                <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={`${import.meta.env.VITE_IMAGES_SERVER}/images/home/home-video-1.mp4`}
                />
                {/* Video overlay */}
                <div className="absolute inset-0 bg-blue-950/70"></div>
            </div>
            
            {/* Absolute positioned content container */}
            <div className="absolute inset-0 z-10">
                <div className="container mx-auto h-full px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
                        {/* Content section */}
                        <div className="flex flex-col justify-center items-start gap-6">
                            <TagHead extraCss={'text-neutral-100 border-b-2 border-red-500 pb-1 flex gap-2 items-center'}>
                                <ArrowRight className="h-4 w-auto stroke-3" /> About ODS
                            </TagHead>
                            
                            <H2 extraCss={'text-neutral-100 uppercase tracking-wider leading-tight'}>
                                Why companies choose our dispatch experts?
                            </H2>
                            
                            <P1 extraClass="text-neutral-100 font-light tracking-wide leading-relaxed">
                                <span className="font-medium capitalize">
                                    <span className="decoration-2 font-semibold decoration-red-500 underline underline-offset-3">
                                        ODS Dispatch
                                    </span> makes trucking operations smoother and smarter.
                                </span> Unlike companies that take weeks to train new staff, our dispatchers bring proven expertise from day one. With years of hands-on industry experience, we handle load management, broker communication, and paperwork seamlessly—so you can focus on driving and growing. Serving carriers and owner-operators across America, ODS Dispatch ensures you get the best loads, the best rates, and the dedicated support your business deserves.
                            </P1>
                            
                            <div className="mt-4">
                                <button className="bg-red-600 hover:bg-red-700 text-neutral-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center items-start gap-10 ">
                            <H2 extraCss="text-neutral-100 tracking-wide underline decoration-2 underline-offset-5">Your Dispatch Edge from Day One</H2>
                            <div className="flex flex-col gap-6">
                                {
                                    Points.map((point,index) => <P1 extraClass="text-neutral-100 flex items-center gap-2 stroke-3 capitalize text-nowrap" key={index}><ChevronRightCircle className="w-5 h-auto stroke-3"/> {point.line}</P1>)
                                }
                            </div>
                            <P1 extraClass="text-white capitalize tracking-wider font-[400]">{`Whether you’re expanding quickly or need steady support for night operations, ODS Dispatch is equipped to deliver results immediately.`}</P1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}