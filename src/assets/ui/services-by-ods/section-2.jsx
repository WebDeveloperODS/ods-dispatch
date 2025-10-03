import React from 'react'
import { H2, TagHead } from '../components/heading-1'
import { P1 } from '../components/descriptions'
import { FunctionButton, PageButton } from '../components/buttons'

const ServicePlusPoint = ({tagline,heading,desc,btnText, btnType,btnLink,image,reverse}) => {
  return (
    <div className={`container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 py-8 lg:py-24`}>
        <div className={` ${reverse ? 'hidden':'flex'} flex-col gap-3 justify-center `}>
            <TagHead extraCss={'underline underline-offset-3 decoration-2 decoration-red-800'}>{tagline}</TagHead>
            <H2 className=''>{heading}</H2>
        
            <P1 extraClass="capitalize tracking-wide">{desc}</P1>
            {
              btnType === 'function' ? <FunctionButton actionCall={btnLink} extraClass={'w-fit bg-red-700 text-neutral-100  mt-4'}>{btnText}</FunctionButton> : 
              <PageButton addressLink={btnLink} extraClass={'w-fit bg-red-700 text-neutral-100  mt-4'}>{btnText}</PageButton>
            }
        </div>
        <img className='rounded-xl shadow-sm shadow-neutral-500 w-full h-full' src={image}/>
        <div className={` ${!reverse ? 'hidden':'flex'} flex-col gap-3 justify-center `}>
            <TagHead extraCss={'underline underline-offset-3 decoration-2 decoration-red-800'}>{tagline}</TagHead>
            <H2 className=''>{heading}</H2>
        
            <P1 extraClass="capitalize tracking-wide">{desc}</P1>
            {
              btnType === 'function' ? <FunctionButton actionCall={btnLink} extraClass={'w-fit bg-red-700 text-neutral-100  mt-4'}>{btnText}</FunctionButton> : 
              <PageButton addressLink={btnLink} extraClass={'w-fit bg-red-700 text-neutral-100  mt-4'}>{btnText}</PageButton>
            }
        </div>
    </div>
  )
}

export default ServicePlusPoint