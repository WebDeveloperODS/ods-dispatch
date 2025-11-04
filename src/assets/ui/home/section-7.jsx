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
            line:'Paperwork management for smooth documentation and reduced administrative load'
        },{
            line:'Border crossing handling to ensure uninterrupted operations across regions'
        },{
            line: 'ODS Dispatch experts trained and prepared from the start'
        }
    ]
    return(
        <div className="w-full relative bg-slate-900 min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - empty space for absolute positioned content */}
            <div className="hidden lg:block"/>
            
            {/* Right side - Video */}
            <div className="relative min-h-85 lg:min-h-80">
                <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={`${import.meta.env.VITE_IMAGES_SERVER}/images/home/home-video-1.mp4`}
                />
                {/* Video overlay */}
                <div className="hidden lg:flex lg:absolute inset-0 bg-blue-950/70"></div>
            </div>
            
            {/* Absolute positioned content container */}
            <div className="lg:absolute top-0 left-0 bottom-0 h-full inset-0 z-10">
                <div className="container mx-auto h-full p-4 lg:py-0 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 h-full">
                        {/* Content section */}
                        <div className="flex flex-col justify-center items-start gap-2 lg:gap-6">
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
                                    </span> keeps trucking simple and profitable.
                                </span> Unlike companies that spend weeks training new staff, our dispatchers bring proven expertise from day one. With years of hands-on industry experience, we manage load planning, broker communications, and paperwork effortlessly—freeing you to focus on driving and growing your business.
                                <br/><br/>
                                Proudly serving carriers and owner-operators across the U.S., ODS Dispatch is committed to securing the best loads, negotiating top rates, and providing the dedicated support your trucking business deserves.
                            </P1>
                            
                            <div className="mt-4">
                                <a href="/about-ods-dispatch" className="bg-red-600 hover:bg-red-700 text-neutral-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 ">
                            <H2 extraCss="text-neutral-100 tracking-wide underline decoration-2 underline-offset-5">Your Dispatch Edge from Day One</H2>
                            <div className="flex flex-col gap-2 lg:gap-6">
                                {
                                    Points.map((point,index) => <P1 extraClass="text-neutral-100 inline-flex gap-2 items-start stroke-3 capitalize " key={index}><ChevronRightCircle className="w-6 lg:w-5 h-auto stroke-3 mt-1 flex-shrink-0"/> {point.line}</P1>)
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