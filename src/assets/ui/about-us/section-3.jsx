import React from 'react'
import { H2, H3 } from '../components/heading-1'
import { P1, P2 } from '../components/descriptions'
import { PageButton } from '../components/buttons'
import { ArrowUpRightFromCircle } from 'lucide-react'

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
                <PageButton addressLink={'/truck-types'} extraClass={'flex gap-2 justify-center items-center text-red-800 border-2 hover:border-transparent hover:bg-red-800 hover:text-neutral-100 mt-10 leading-tight hover:scale-[1.05]' }> Explore Trucks We Deal <ArrowUpRightFromCircle className="w-4 stroke-3 h-auto -mt-1"/></PageButton>
            </div>
        </div>
    </div>
  )
}

export default FourPoints