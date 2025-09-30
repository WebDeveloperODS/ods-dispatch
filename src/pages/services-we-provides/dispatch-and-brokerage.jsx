import React from 'react'
import ServiceIntro from '../../assets/ui/services-by-ods/section-1'
import ServicePlusPoint from '../../assets/ui/services-by-ods/section-2'
import GettingStartedWithODS from '../../assets/ui/home/section-8'
import TestimonialsDisplay from '../../assets/ui/home/section-9'

const DispatchAndBrokerage = () => {
  const onClickFunc = () => {
    alert('Button clicked')
  }
  return (
    <div>
      <ServiceIntro headline={'Keep Your Trucks Moving, Profitably'}
      descript={'At ODS Dispatch, we understand that every mile matters. Our dispatch and brokerage services are designed to keep your trucks loaded with consistent, high-paying freight so you can maximize revenue and reduce downtime.'} 
      btnLink={'/carrier-setup'} 
      btnText={`Lets set carrier`} 
      image={'url(/images/services/dispatch/2.png)'}
      />
      <ServicePlusPoint tagline={'Dispatch by us'} heading={'End-to-End Dispatch Support'} image={'/images/services/dispatch/1.jpg'}
      desc={'We handle everything from finding loads and negotiating rates to paperwork and route planning, so your trucks stay moving profitably while you focus on driving instead of back-office tasks.'}
      btnText={'Apply to get benify'} btnType={'function'} btnLink={onClickFunc} reverse={false}
      />
      <GettingStartedWithODS />
      <TestimonialsDisplay />
    </div>
  )
}

export default DispatchAndBrokerage