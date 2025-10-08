import React from 'react'
import Seo from '../assets/ui/components/Seo'
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
import WhyNeedSocialMedia from '../assets/ui/home/section-11'

const Home = () => {
  return (
    <div className='bg-white'>
      <Seo
        title={'ODS Dispatch | Truck Dispatching, Brokerage & Carrier Services'}
        description={'Professional truck dispatching, load booking, rate negotiation, paperwork, and carrier setup services. Keep your trucks moving profitably with ODS Dispatch.'}
        path={'/'}
        image={'/images/home/19.jpg'}
        type={'website'}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ODS Dispatch',
          url: typeof window !== 'undefined' ? window.location.origin : undefined,
          logo: '/logo-3.png',
          sameAs: [
            'https://www.facebook.com/',
            'https://www.instagram.com/'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'info@ods-dispatch.com',
          }
        }}
      />
      <IntroWithSlider />
      <WhoWeAre />
      <ThreeContents />
      <PointingServices />
      <BenefitsOfUsingODS />
      <TruckTypes />
      <ODS_Best_Option />
      <WhyNeedSocialMedia />
      <GettingStartedWithODS />
      <TestimonialsDisplay />
      <ContactForm />
    </div>
  )
}

export default Home