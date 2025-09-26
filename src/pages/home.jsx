import React from 'react'
import IntroWithSlider from '../assets/ui/home/section-1'
import WhoWeAre from '../assets/ui/home/section-2'
import ThreeContents from '../assets/ui/home/section-3'
import PointingServices from '../assets/ui/home/section-4'
import BenefitsOfUsingODS from '../assets/ui/home/section-5'
import TruckTypes from '../assets/ui/home/section-6'
import ODS_Best_Option from '../assets/ui/home/section-7'
import GettingStartedWithODS from '../assets/ui/home/section-8'
import TestimonialsDisplay from '../assets/ui/home/section-9'
import ContactForm from '../assets/ui/home/section-10'

const Home = () => {
  return (
    <div className='bg-white'>
      <IntroWithSlider />
      <WhoWeAre />
      <ThreeContents />
      <PointingServices />
      <BenefitsOfUsingODS />
      <TruckTypes />
      <ODS_Best_Option />
      <GettingStartedWithODS />
      <TestimonialsDisplay />
      <ContactForm />
    </div>
  )
}

export default Home