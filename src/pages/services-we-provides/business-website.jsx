import React from 'react'
import ServiceIntro from '../../assets/ui/services-by-ods/section-1'
import ServicePlusPoint from '../../assets/ui/services-by-ods/section-2'
import GettingStartedWithODS from '../../assets/ui/home/section-8'
import TestimonialsDisplay from '../../assets/ui/home/section-9'

const BusinessWebsiteDevelopment = () => {
  return (
    <div>
        <ServiceIntro headline={'Your Website, Your First Impression'}  
        descript={'In today’s digital-first world, your website is often the very first interaction potential shippers, brokers, or drivers have with your company. At ODS Dispatch, we design professional, responsive, and secure websites tailored specifically for trucking businesses to create lasting impressions.'}
        btnLink={'/'}
        btnText={`Apply for web services`}
        image='url(/images/services/development/4.jpg)'
        />

        <ServicePlusPoint heading={'Smart Tech Solutions Built for the Road Ahead'}
        tagline='full stack solutions'  image={'/images/services/development/1.jpg'}
        desc='Stay competitive in trucking with our Full-Stack IT Solutions. From front-end design to back-end management, we deliver secure, scalable, and industry-focused technology that streamlines operations and supports long-term growth—starting with a free consultation.'
        btnLink={'/to-contact-ods-dispatch'} btnType='page' reverse={true} btnText='Lets Query a call'/> 

        <ServicePlusPoint heading={'Custom Digital Solutions to Drive Your Business Forward'}
        tagline='WordPress Development Services'  image={'/images/services/development/2.jpg'}
        desc='Boost your digital presence with our trucking-focused WordPress Development Services. We specialize in creating secure, user-friendly, and customized websites—from themes to plugins—ensuring your site looks professional, functions seamlessly, and strengthens customer engagement. Free consultations available.'
        btnLink={'/to-contact-ods-dispatch'} btnType='page' reverse={false} btnText='Lets Query a call'/> 

        <ServicePlusPoint heading={'Targeted Social Media Growth for Carriers and Fleets'}
        tagline='Meta-Facebook Specialization'  image={'/images/services/development/3.jpg'}
        desc='Enhance your trucking business with our Meta-Facebook Specialization service. We deliver tailored strategies, targeted ads, and optimized content that boost visibility, build engagement, and drive results. Start with a free consultation from our social media experts.'
        btnLink={'/to-contact-ods-dispatch'} btnType='page' reverse={true} btnText='Lets Query a call'/> 

        <GettingStartedWithODS />
        <TestimonialsDisplay />
    </div>
  )
}

export default BusinessWebsiteDevelopment