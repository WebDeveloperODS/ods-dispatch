import React from 'react'
import { H2, H3 } from '../components/heading-1'
import { P1, P2 } from '../components/descriptions'
import { PageButton } from '../components/buttons'
import { ArrowUpRightFromCircle } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const FourPoints = () => {
    const points = [
        {
            heading: 'Proven Expertise',
            desc: 'Years of combined experience in logistics and digital marketing.'
        },{
            heading: 'Cost-Effective Plans',
            desc: 'Flexible pricing designed for small to mid-size trucking companies.'
        },{
            heading: 'All-in-One Service',
            desc: 'Dispatching and marketing solutions under a single, trusted partner.'
        },{
            heading: 'Dedicated Support',
            desc: 'A committed team that treats your business as our own.'
        },
    ]
    const benefits = [
        {
            title: "Builds Trust & Credibility",
            description: "A professional online presence makes your company look reliable to shippers and drivers."
        },
        {
            title: "Attracts Shippers & Brokers",
            description: "Many customers check Facebook, LinkedIn, and Google before doing business."
        },
        {
            title: "Driver Recruitment",
            description: "Social media helps you find and hire drivers faster."
        },
        {
            title: "Competitive Advantage",
            description: "Stand out from other carriers who don’t market themselves."
        },
        {
            title: "Brand Awareness",
            description: "The more people recognize your company, the more opportunities you get."
        },
        {
            title: "Direct Leads",
            description: "Paid ads and targeted posts bring new clients directly to you."
        }
        ];

    return (
    <div className="bg-gray-100 w-full relative ">
        <div className={`bg-center bg-contain bg-no-repeat bg-fixed w-full h-full`} style={{backgroundImage: `url(${import.meta.env.VITE_IMAGES_SERVER}/images/home/map.png)`}}>
            <div className="container flex flex-col items-center py-24 gap-3">
                <H2 extraCss={'uppercase underline underline-offset-5 decoration-3 decoration-red-800'}>Comprehensive Solutions for Trucking Success</H2>
                <P1 extraClass="capitalize tracking-wider font-[500]">
                    Seamlessly blending dispatch expertise and digital marketing to drive growth and profitability.
                </P1>
                <div className="flex flex-wrap justify-center mt-5 gap-8">
                    {
                        points.map((point, index)=> <div key={index} 
                        className="flex flex-col w-[22%] text-center items-center gap-2 px-6 py-8 rounded-lg shadow-md shadow-zinc-400 bg-neutral-200/70">
                            {/* <img className="w-auto h-30" src={point.icon} alt={`${point.heading}'s icon`}/> */}
                            <H3 extraCss={'text-blue-800 font-bold tracking-wide'}>{point.heading}</H3>
                            <P2 extraClass="capitalize tracking-wide">{point.desc}</P2>
                        </div>)
                    }
                </div>
                <div className='grid grid-cols-[22%_77%] gap-0 w-full px-6 mt-6 '>
                    <div className='relative bg-cover bg-center bg-no-repeat min-h-100 h-full w-[25] rounded-xl shadow-xl shadow-neutral-600' style={{backgroundImage: 'url(/images/about-us/5.jpg'}}>
                        <div className='absolute top-0 left-0 w-full h-full rounded-xl px-4 pt-6 pb-3 text-center bg-radial-[at_50%_80%] from-transparent from-40% to-neutral-600/30 to-70% flex flex-col justify-between'>
                            <H3 extraCss={'text-red-600 uppercase font-bold italic underline decoration-neutral-800/80 underline-offset-3'}>100% managed social media presence</H3>
                            <PageButton addressLink={'/contact-us'} extraClass={'text-neutral-100 bg-red-700 rounded-full! text-sm! w-fit mx-auto hover:-translate-y-1'}>Discuss with us</PageButton>
                        </div>
                    </div>
                    <div className='flex flex-no-wrap gap-10 overflow-auto pl-8 pt-2 pb-6'>
                        {
                            benefits.map((bene, index) => <div className='relative min-w-[250px] rounded-lg shadow-md shadow-zinc-400 bg-neutral-200/80 flex flex-col gap-2 text-center pt-16 px-5' key={index}>
                                <H2 extraCss={'tracking-normal'}>{bene.title}</H2 >
                                <P1 extraClass='capitalize! tracking-wide'>{bene.description}</P1>
                                <PageButton extraClass={'text-red-700 text-sm! w-fit flex items-center gap-3 mx-auto px-1! pb-[2px]! rounded-none! mt-3 border-b-2 border-black'} >Apply Now <ArrowRight className='-mt-1 h-4 w-auto stroke-3' /></PageButton>
                            </div>)
                        }
                    </div>
                </div>
                <PageButton addressLink={'/truck-types'} extraClass={'flex gap-2 justify-center items-center text-red-800 border-2 hover:border-transparent hover:bg-red-800 hover:text-neutral-100 mt-10 leading-tight hover:scale-[1.05]' }> Explore Trucks We Deal <ArrowUpRightFromCircle className="w-4 stroke-3 h-auto -mt-1"/></PageButton>
            </div>
        </div>
    </div>
  )
}

export default FourPoints