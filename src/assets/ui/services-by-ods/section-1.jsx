import React from 'react'
import { PageButton } from '../components/buttons'
import { P1 } from '../components/descriptions'
import { H1 } from '../components/heading-1'

const ServiceIntro = ({headline, descript, btnLink, btnText,image}) => {
  return (
    <div className='relative h-screen lg:h-[calc(100vh-1em)] bg-cover bg-[30%] lg:bg-center bg-fixed' style={{backgroundImage:image}}>
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-700/20 flex items-end justify-end pb-10 lg:pb-20">
            <div className="container bg-neutral-950/80 min-h-30 p-6 lg:p-15 rounded-xl flex flex-col gap-3">
                <H1 extraCss={'text-neutral-100 underline underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>{headline}</H1>
                <P1 extraClass="text-neutral-100 font-normal capitalize tracking-wide text-shadow-lg/30">{descript}</P1>
                <PageButton addressLink={btnLink} extraClass={'w-fit text-neutral-100 border-2 bg-red-800 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'}>{btnText}</PageButton>
            </div>
        </div>
    </div>
  )
}

export default ServiceIntro