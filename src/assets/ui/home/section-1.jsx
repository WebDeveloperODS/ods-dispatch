import React from 'react'
import SlideShow from './slide-show'
import { H1, H2, H3 } from '../components/heading-1'
import { P1 } from '../components/descriptions'
import { FunctionButton, PageButton } from '../components/buttons'
import { useState } from 'react'

const IntroWithSlider = () => {
  const [quoteCalled, setQuoteCalled] = useState(false);
  return (
    <div>
      <SlideShow>
        <div className='container bg-transparent-1 p-15 rounded-xl flex flex-col'>
            <div className='flex flex-col gap-3'>
                <H1 extraCss={'text-neutral-100 underline underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>Smart Dispatching & Powerful Marketing</H1>
                <H2 extraCss={'capitalize text-neutral-100 text-shadow-lg/30'}>
                  Maximize profits with reliable dispatch services and modern social media marketing strategies—all in one place.
                </H2>
                <P1 extraClass={'text-neutral-100 font-normal capitalize tracking-wide text-shadow-lg/30'}>
                {`we help trucking businesses achieve lasting success by combining reliable dispatch services with modern social media marketing strategies. From securing profitable loads to strengthening your online presence, our all-in-one solutions are designed to maximize efficiency, boost profits, and keep your trucks moving forward.`}
                </P1>
                <div className='flex gap-7 mt-4'>
                    <PageButton extraClass={'text-neutral-100 border-2 bg-blue-950 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'} addressLink={'/'}>Explore Our Service</PageButton>
                    <FunctionButton extraClass={'bg-red-800 text-neutral-100 border-2 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'} actionCall={setQuoteCalled}>Request a quote</FunctionButton>
                </div>
            </div>
        </div>
      </SlideShow>
    </div>
  )
}

export default IntroWithSlider