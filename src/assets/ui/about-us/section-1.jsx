import React from 'react'
import { PageButton } from '../components/buttons'
import { P1 } from '../components/descriptions'
import { H1 } from '../components/heading-1'

const About_ODS_Dispatch = () => {
  return (
    <div className='relative h-[calc(100vh-8em)] bg-cover bg-center' style={{backgroundImage:'url(/images/about-us/1.jpg)'}}>
        <div className="absolute top-0 left-0 w-full h-full bg-popup-bg flex items-end justify-end pb-20">
            <div className="container bg-transparent-1 min-h-30 p-15 rounded-xl flex flex-col gap-3">
                <H1 extraCss={'text-neutral-100 underline underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>Truck Types We Dispatch at ODS Dispatch</H1>
                <P1 extraClass="text-neutral-100 font-normal capitalize tracking-wide text-shadow-lg/30">{`At ODS Dispatch, we live and breathe trucking. We know that every mile matters, and that success in this industry comes down to smart planning, reliable support, and keeping your trucks moving profitably. Our mission is to keep your wheels rolling profitably and your brand visible online. Whether you run one truck or a whole fleet, we provide the tools, strategies, and support to grow your business.`}</P1>
                <PageButton addressLink={'/carriers-setup'} extraClass={'w-fit text-neutral-100 border-2 bg-red-800 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'}>{`Let's get start`}</PageButton>
            </div>
        </div>
    </div>
  )
}

export default About_ODS_Dispatch