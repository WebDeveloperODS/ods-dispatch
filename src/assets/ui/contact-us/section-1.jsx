import React from 'react'
import { PageButton } from '../components/buttons'
import { P1 } from '../components/descriptions'
import { H1 } from '../components/heading-1'

const ContactPageHead = () => {
  return (
    <div className='relative h-[calc(100vh-8em)] bg-cover bg-center' style={{backgroundImage:'url(/images/contact-us/1.png)'}}>
        <div className="absolute top-0 left-0 w-full h-full bg-popup-bg flex items-end justify-end pb-20">
            <div className="container bg-transparent-1 min-h-30 p-15 rounded-xl flex flex-col gap-3">
                <H1 extraCss={'text-neutral-100 underline underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>Get in Touch with ODS Dispatch</H1>
                <P1 extraClass="text-neutral-100 font-normal capitalize tracking-wide text-shadow-lg/30">{`At ODS Dispatch, we prioritize clear communication and reliable support to build strong partnerships with shippers, drivers, and fleet owners. Our team is committed to answering your questions, guiding you through our services, and providing fast, hassle-free assistance so you can maximize profitability and keep your business moving smoothly—no matter the size of your operation.`}</P1>
                <PageButton addressLink={'/carriers-setup'} extraClass={'w-fit text-neutral-100 border-2 bg-red-800 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'}>{`Share your details`}</PageButton>
            </div>
        </div>
    </div>
  )
}

export default ContactPageHead