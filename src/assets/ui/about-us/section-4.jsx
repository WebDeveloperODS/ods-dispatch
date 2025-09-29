import React from 'react'
import { H2 } from '../components/heading-1'
import { P2 } from '../components/descriptions'
import { MoveRight } from 'lucide-react'

const MainServices = () => {
    const Services = [
        {
            title: 'Truck Dispatch Solutions',
            img: '/images/about-us/icon-1.png',
            points: [
            'Secure high-paying loads nationwide with trusted brokers',
            'Complete handling of paperwork, rate confirmations, and negotiations',
            'Reduce downtime and keep your fleet consistently moving',
            'Round-the-clock support for drivers and carriers',
            'A dedicated dispatcher assigned exclusively to your fleet',
            'You stay focused on driving—we take care of the rest'
            ]
        },
        {
            title: 'Digital Presence Utilization',
            img: '/images/about-us/icon-2.png',
            points: [
            'Professional branding to strengthen your trucking company’s online presence',
            'Custom content creation: engaging posts, videos, and graphics',
            'Lead generation campaigns to attract shippers, drivers, and partners',
            'Full management of platforms: Facebook, Instagram, LinkedIn, TikTok, and YouTube',
            'Targeted paid ads to reach the right audience at the right time',
            'We ensure your company is visible, trusted, and the top choice in the market'
            ]
        }
    ]

    return (
    <div className='container flex lg:grid lg:grid-cols-[50%_50%] divide-x divide-neutral-300 py-24'>
        {
            Services.map((service,index) => <div key={index} className='flex flex-col gap-3'>
                <img className='h-40 w-45 object-fit mx-auto' src={service.img}/>
                <H2 extraCss={'tracking-wide mx-auto'}>{service.title}</H2>
                <ul className='w-[70%] mx-auto flex flex-col gap-3'>
                    {service.points.map((point, index) => (
                        <li className='flex gap-3' key={index}>
                        <div className="flex-shrink-0 w-6 h-7 flex items-center justify-center">
                            <MoveRight className="text-red-700 stroke-3" size={18} />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>)
        }
    </div>
  )
}

export default MainServices