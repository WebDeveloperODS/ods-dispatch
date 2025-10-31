import { H2 } from '../components/heading-1'
import { P1 } from '../components/descriptions'
import { X } from 'lucide-react'
import { useState } from 'react';
import { PageButton } from '../components/buttons';
// import { MoveRight } from 'lucide-react'

const ServicesDesc = () => {
      const [targetDemo, setTargetDemo] = useState(-1);
    const Services = [
        {
            title: 'Business Web Development',
            desc: 'Professional business web development service delivering responsive, SEO-optimized, and scalable websites designed to enhance brand presence and drive growth.',
            projects: [
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-1.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-1-display`,
                  },
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-2.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-2-display.png`,
                  },
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-3.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-3-display.png`,
                  },
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-4.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-4-display.png`,
                  },
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-5.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-5-display.jpg`,
                  },
                  {
                        cover: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-6.png`,
                        display: ` ${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/web-6-display.png`,
                  }
            ]
        },
        {
            title: 'Social Media Management',
            desc: 'Comprehensive social media marketing services enhancing brand visibility, engagement, and growth through strategic content creation, audience targeting, and performance optimization.',
            projects: [ 
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/1.png`,
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/2.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/3.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/4.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/5.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/6.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/7.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/8.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/9.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/10.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/11.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/12.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/13.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/14.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/15.png`, 
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/16.png`,
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/17.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/18.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/19.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/20.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/21.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/22.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/23.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/24.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/25.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/26.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/27.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/28.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/29.png`,  
                  `${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/smm/30.png`,  
            ]
        }
    ]
    const getMasonrySpan = (index) => {
    const patterns = ['row-span-1 lg:row-span-2', 'row-span-2 lg:row-span-3', 'row-span-1 lg:row-span-2', 'row-span-2 lg:row-span-3', 'row-span-1 lg:row-span-2'];
    return patterns[index % patterns.length];
  };

    return (
      <div className='flex flex-col gap-10 py-24'>
            <div className='container flex flex-col gap-10 justify-center items-center '>
                  <div className='relative rounded-xl bg-fit lg:bg-contain bg-fixed bg-center' style={{backgroundImage:`url(${import.meta.env.VITE_IMAGES_SERVER}/images/truck-types/bg.jpg)`}}>
                        <div className='bg-neutral-800/60 px-4 py-10 text-center lg:p-10 rounded-xl flex flex-col gap-3 items-center justify-center min-h-30'>
                              <H2 extraCss={'uppercase tracking-wider text-neutral-100 underline underline-offset-5 decoration-3 decoration-red-800 text-shadow-lg/30'}>{Services[0].title}</H2>
                              <P1 extraClass="text-neutral-100 capitalize font-semibold text-shadow-lg/30 tracking-wide">{Services[0].desc}</P1>
                        </div>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full'>
                        {
                              Services[0].projects.map((project, index = Range(0,30)) => <div className='rounded-xl relative min-h-60 bg-center bg-cover shadow-lg border border-neutral-300 shadow-neurtal-800' key={index} alt='Web App Demo' style={{backgroundImage: `url(${project.cover})`}}>
                                    <div className='absolute top-0 left-0 w-full h-full bg-neutral-900/30 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4'>
                                          <button onClick={() => setTargetDemo(index)} className='text-[1em] cursor-pointer hover:bg-neutral-200 bg-neutral-100 font-bold text-red-600 uppercase px-3 py-2 rounded-md leading-tight'>Explore View</button>
                                    </div>
                                    <div 
                                          className={`fixed inset-0 bg-black/80 ${targetDemo === index ? 'flex':'hidden'} justify-center items-center z-50 transition-all duration-300 ease-in-out p-4`} 
                                          id={`project-display-${index}`}
                                          onClick={() => setTargetDemo(-1)}
                                    >
                                          <button 
                                                className='absolute top-4 right-4 bg-white cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-colors z-10'
                                                onClick={() => setTargetDemo(-1)}
                                                aria-label="Close modal"
                                          >
                                                <X className='w-6 h-6 text-gray-800' />
                                          </button>
                                          <div
                                                className='demo-pop-up-scroll max-w-7xl max-h-[94vh] overflow-auto bg-white rounded-lg shadow-2xl'
                                                onClick={(e) => e.stopPropagation()}
                                          >
                                                <img src={project.display} alt='Project display' className='w-full h-auto'/>
                                          </div>
                                    </div>
                              </div>
                              )
                        }
                  </div>
                  <PageButton addressLink={'/application-to-avail-services'} extraClass={'w-fit text-red-800 border-2 bg-transparent border-red-800 rounded-full! px-4! py-2! transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Apply For Business Web</PageButton>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center '>
                  <div className='container relative rounded-xl bg-fit lg:bg-contain bg-fixed bg-center' style={{backgroundImage:`url(${import.meta.env.VITE_IMAGES_SERVER}/images/truck-types/bg.jpg)`}}>
                        <div className='bg-neutral-800/60 px-4 py-10 text-center lg:p-10 rounded-xl flex flex-col gap-3 items-center justify-center min-h-30'>
                              <H2 extraCss={'uppercase tracking-wider text-neutral-100 underline underline-offset-5 decoration-3 decoration-red-800 text-shadow-lg/30'}>{Services[1].title}</H2>
                              <P1 extraClass="text-neutral-100 capitalize font-semibold text-shadow-lg/30 tracking-wide">{Services[1].desc}</P1>
                        </div>
                  </div>
                  <div className='mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 auto-rows-[180px] gap-3'>
                        {Services[1].projects.map((project, index) => (
                              <div
                              key={index}
                              className={`${getMasonrySpan(index)} relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200`}
                              >
                              <img
                              src={project}
                              alt={`Social media project ${index + 1}`}
                              className='w-full h-full object-fit group-hover:scale-110 transition-transform duration-500'
                              />
                              
                              </div>
                        ))}
                  </div>
                  <PageButton addressLink={'/application-to-avail-services'} extraClass={'w-fit text-red-800 border-2 bg-transparent border-red-800 rounded-full! px-4! py-2! transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Apply For Social Media Marketing</PageButton>
            </div>
      </div>
  )
}

export default ServicesDesc