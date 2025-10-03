import { ArrowUpRightFromCircle } from "lucide-react"
import { PageButton } from "../components/buttons"
import { P1, P2 } from "../components/descriptions"
import { H2, H3 } from "../components/heading-1"

export default function PointingServices(){
    const SERVER = import.meta.env.VITE_IMAGES_SERVER
    const services=[
        {
            heading: 'Expert Freight Booking',
            desc: 'We secure the best available freight to keep your trucks loaded and moving profitably.',
            icon: `${SERVER}/images/home/icons/expert-freight-booking.png`,
        },
        {
            heading: 'Rate Negotiation',
            desc: 'Our dispatchers negotiate hard with brokers to get you the highest-paying loads.',
            icon: `${SERVER}/images/home/icons/rate-negotiation.png`,
        },
        {
            heading: 'Broker Communication',
            desc: 'We handle all broker calls, updates, and follow-ups so you can focus on driving.',
            icon: `${SERVER}/images/home/icons/broker-communication.png`,
        },
        {
            heading: 'Paperwork Management',
            desc: 'From filling out carrier packets to ensuring compliance, we take care of the paperwork.',
            icon: `${SERVER}/images/home/icons/paperwork-management.png`,
        },
        // {
        //     heading: 'Support with Lumper & Detention',
        //     desc: 'We fight on your behalf to get detention and lumper fees paid fairly.',
        //     icon: `/images/home/icons/expert-freight-booking.png`,
        // },
        // {
        //     heading: 'Dedicated Dispatcher',
        //     desc: 'Each carrier gets a personal dispatcher for real-time communication and support.',
        //     icon: `/images/home/icons/expert-freight-booking.png`,
        // },
        // {
        //     heading: 'Tailored Dispatch Solutions',
        //     desc: 'Our strategies are customized to your operations to maximize efficiency and long-term growth.',
        //     icon: `/images/home/icons/expert-freight-booking.png`,
        // },
    ]
    return(
        <div className="bg-gray-100 w-full relative ">
            <div className={`bg-center bg-contain bg-no-repeat bg-fixed w-full h-full`} style={{backgroundImage: `url(${import.meta.env.VITE_IMAGES_SERVER}/images/home/map.png)`}}>
                <div className="container flex flex-col items-center py-24 gap-3">
                    <H2 extraCss={'uppercase underline underline-offset-5 decoration-3 text-center decoration-red-800'}>Your Success, Our Dispatch Mission</H2>
                    <P1 extraClass="capitalize tracking-wider font-[500]  text-center">
                        With expert dispatchers and tailored solutions, we help carriers grow sustainably long term.
                    </P1>
                    <div className="flex flex-wrap justify-center mt-5 gap-8">
                        {
                            services.map((service, index)=> <div key={index} 
                            className="flex flex-col w-[85%] lg:w-[22%] text-center items-center gap-2 px-6 py-8 rounded-lg shadow-md shadow-zinc-400 bg-neutral-200/70">
                                <img className="w-auto h-26 lg:h-30" src={service.icon} alt={`${service.heading}'s icon`}/>
                                <H3 extraCss={'text-blue-800 font-bold tracking-wide'}>{service.heading}</H3>
                                <P2 extraClass="capitalize tracking-wide">{service.desc}</P2>
                            </div>)
                        }
                    </div>
                    <PageButton addressLink={'/truck-types'} extraClass={'flex gap-2 justify-center items-center text-red-800 border-2 hover:border-transparent hover:bg-red-800 hover:text-neutral-100 mt-10 leading-tight hover:scale-[1.05]' }> Explore More <ArrowUpRightFromCircle className="w-4 stroke-3 h-auto -mt-1"/></PageButton>
                </div>
            </div>
        </div>
    )
}