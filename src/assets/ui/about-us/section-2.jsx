import React from 'react'
import { H2, TagHead } from '../components/heading-1'
import { P1 } from '../components/descriptions'

const WhyChooseUS = () => {
  return (
    <div className='container mx-auto flex lg:grid flex-col-reverse lg:grid-cols-2 gap-6 py-16 lg:py-24'>
        <div className=' flex flex-col gap-3 justify-center'>
            <TagHead extraCss={'underline underline-offset-3 decoration-2 decoration-red-800'}>Why choose us?</TagHead>
            <H2 className=''>Fueling Business Growth Together</H2>
            <P1 extraClass="capitalize tracking-wide">
            We’re not just a dispatch service — we’re your growth partner. Backed by years of hands-on experience in logistics and digital strategy, our team combines industry knowledge with modern technology to keep carriers and owner-operators ahead of the curve.
            </P1>
        </div>
        <img className='rounded-xl shadow-sm shadow-neutral-500' src={`${import.meta.env.VITE_IMAGES_SERVER}/images/about-us/3.jpg`}/>
    </div>
  )
}

export default WhyChooseUS