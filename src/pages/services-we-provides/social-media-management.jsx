import React from 'react'
import ServiceIntro from '../../assets/ui/services-by-ods/section-1'
import ServicePlusPoint from '../../assets/ui/services-by-ods/section-2'
import GettingStartedWithODS from '../../assets/ui/home/section-8'
import TestimonialsDisplay from '../../assets/ui/home/section-9'
import Seo from '../../assets/ui/components/Seo'

const SocialMediaManagement = () => {
  
  return (
    <div>
      <Seo
        title={'Social Media Management for Trucking | ODS Dispatch'}
        description={'Grow your trucking brand with strategic social media content, ads, and reputation-building. Designed for carriers and fleets.'}
        path={'/services-by-ods/social-media-management'}
        image={'/images/services/social-media/1.jpg'}
      />
      <ServiceIntro headline={'Turn Visibility Into Opportunity'}  
      descript={'In the trucking industry, a strong online presence goes far beyond likes and shares—it defines your reputation and sets you apart from competitors. At ODS Dispatch, we manage your social media with a strategic approach designed to showcase your professionalism, highlight your reliability, and keep your brand active where it matters most. '}
      btnLink={'/carriers-setup'}
      btnText={`Let's get highlight socially`}
      image='url(/images/services/social-media/3.jpg)'
      />
      <ServicePlusPoint heading={'Engage, Build, and Grow'}
      tagline='Empower social presence'  image={'/images/services/social-media/2.jpg'}
      desc='We create engaging posts, run targeted ad campaigns, and share customer stories that highlight your credibility. By showcasing your strengths, we help you gain attention from brokers, shippers, and drivers.'
      btnLink={'/to-contact-ods-dispatch'} btnType='page' reverse={true} btnText='Lets Query a call'/> 
      <GettingStartedWithODS />
      <TestimonialsDisplay />
    </div>
  )
}

export default SocialMediaManagement