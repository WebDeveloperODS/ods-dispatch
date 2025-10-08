import React from 'react'
import Seo from '../assets/ui/components/Seo'
import About_ODS_Dispatch from '../assets/ui/about-us/section-1'
import WhyChooseUS from '../assets/ui/about-us/section-2'
import FourPoints from '../assets/ui/about-us/section-3'
import MainServices from '../assets/ui/about-us/section-4'
import BenefitsbyODS from '../assets/ui/about-us/section-5'
import ContactForm from '../assets/ui/home/section-10'

const AboutUs = () => {
  return (
    <div>
      <Seo
        title={'About ODS Dispatch | Trusted Truck Dispatch & Brokerage Partner'}
        description={'Learn about ODS Dispatch—our mission, values, and how we help carriers with reliable dispatch, brokerage support, and operations management.'}
        path={'/about-ods-dispatch'}
        image={'/images/about-us/1.jpg'}
      />
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