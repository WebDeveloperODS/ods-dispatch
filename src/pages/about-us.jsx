import React from 'react'
import About_ODS_Dispatch from '../assets/ui/about-us/section-1'
import WhyChooseUS from '../assets/ui/about-us/section-2'
import FourPoints from '../assets/ui/about-us/section-3'
import MainServices from '../assets/ui/about-us/section-4'
import BenefitsbyODS from '../assets/ui/about-us/section-5'
import ContactForm from '../assets/ui/home/section-10'

const AboutUs = () => {
  return (
    <div>
      <About_ODS_Dispatch />
      <WhyChooseUS />
      <FourPoints />
      <MainServices />
      <BenefitsbyODS />
      <ContactForm />
    </div>
  )
}

export default AboutUs