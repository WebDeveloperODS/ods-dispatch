import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { H2, H3 } from '../components/heading-1';


const ContactDetails = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us At',
      value: '(832) 430 1029',
      href: 'tel:+18324301029',
      type: 'phone'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@odsdispatch.com',
      href: 'mailto:info@odsdispatch.com',
      type: 'email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '3911 Concord pike, Wilmington, DE, USA - 19803',
      href: 'https://maps.app.goo.gl/1khs5HMDNwjdS3dh7',
      type: 'location'
    }
  ];

  return (
    <div className='container mx-auto px-4 py-20'>    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div 
                key={index}
                className='bg-fixed bg-cover bg-center rounded-xl shadow-lg shadow-neutral-300 hover:shadow-xl hover:shadow-neutral-400 transition-all duration-300 border border-neutral-200' style={{backgroundImage: `url(${import.meta.env.VITE_IMAGES_SERVER}/images/truck-types/bg.jpg`}}
              >
                <div className='flex flex-col items-center w-full h-full text-center gap-4 p-8 bg-neutral-700/50 rounded-xl'>
                    {/* Icon with Gradient Background */}
                    <div className='w-20 h-20 bg-gradient-to-br from-red-700 to-red-950 rounded-full flex items-center justify-center shadow-lg'>
                        <IconComponent className='w-10 h-10 text-white' strokeWidth={2} />
                    </div>
                    
                    {/* Contact Info */}
                    <div className='flex flex-col gap-2'>
                    <H2 extraCss='text-neutral-100 font-bold! text-shadow-md text-shadow-neutral-800'>
                        {contact.title}
                    </H2>
                    <a 
                        href={contact.href}
                        className='text-neutral-100 font-semibold text-base text-xl text-shadow-md text-shadow-neutral-900 transition-transform duration-300 hover:scale-[1.1]'
                        {...(contact.type === 'location' && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                        {contact.value}
                    </a>
                </div>
                
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default ContactDetails;
