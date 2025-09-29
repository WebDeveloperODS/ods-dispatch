import { useState } from "react";
import { P1, P2 } from "../components/descriptions";
import { H3 } from "../components/heading-1";

export default function ThreeContents(){
    const [mouseOn, setMouseOn] = useState(-1);
    const SERVER = import.meta.env.VITE_IMAGES_SERVER;
    // console.log(SERVER)
    const content = [
        {
            title: 'Reliability That Drives Success', tagline: 'Consistent, quality service for every load you move.',
            description: 'We focus on dependable operations, seamless communication, and superior load options that strengthen your business and customer satisfaction.',   
            bg_image:`${SERVER}/images/home/4.jpg`, bg_overlay: ['bg-transparent-blue-2','bg-transparent-blue-1'], button: {title:'Explore about ODS', button_bg: 'bg-red-600 hover:bg-red-700 text-white', button_link:'/'}
        },{
            title: 'Driving Respect & Communication', tagline: 'Empowering dispatchers and drivers to work hand in hand.',
            description: 'Promoting healthy interactions, teamwork, and professional respect to achieve efficiency, satisfaction, and long-term success together.',   
            bg_image:`${SERVER}/images/home/6.png`, bg_overlay: ['bg-transparent-red-2','bg-transparent-red-1'], button: {title:'Services by ODS', button_bg: 'bg-blue-800 hover:bg-blue-900 text-white', button_link:'/'}
        },{
            title: 'Optimizing Business, Maximizing Profits', tagline: 'Delivering smart strategies for efficient business by using media growth.',
            description: 'Helping trucking companies thrive with smart dispatch solutions and media-driven strategies that boost efficiency, visibility, and profitability.',   
            bg_image:`${SERVER}/images/home/7.jpg`, bg_overlay: ['bg-transparent-blue-2','bg-transparent-blue-1'], button: {title:'Connect with ODS', button_bg: 'bg-red-600 hover:bg-red-700 text-white', button_link:'/'}
        },
    ]
    return(
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
            {
                content.map((item,index) =>  <div 
                        key={index}
                        className="relative min-h-96 w-full text-center overflow-hidden group"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url('${item.bg_image}')` }}
                        ></div>
                        <div 
                            onMouseEnter={() => setMouseOn(index)} 
                            onMouseLeave={() => setMouseOn(-1)} 
                            className={`${mouseOn === index ? item.bg_overlay[0] : item.bg_overlay[1]} absolute inset-0 flex flex-col px-6 md:px-8 lg:px-14 justify-center items-center transition-all ease-in-out duration-500 cursor-pointer z-5`}
                        >
                            <H3 extraCss={'font-semibold text-white mb-4 border-b-2 border-red-500 pb-2'}>{item.title}</H3>
                            <P1 extraClass="font-normal text-gray-100 capitalize tracking-wider mb-4">{item.tagline}</P1>
                            
                            {/* Always render the content but control opacity and transform */}
                            <div className={`transition-all duration-500 ease-in-out ${
                                mouseOn === index 
                                    ? 'opacity-100 transform translate-y-0 max-h-96' 
                                    : 'opacity-0 transform translate-y-4 max-h-0'
                            } overflow-hidden`}>
                                <P2 extraClass="text-white font-light capitalize tracking-wide mb-4 leading-relaxed">{item.description}</P2>
                                <a 
                                    href={item.button.button_link} 
                                    className={`inline-block ${item.button.button_bg} font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}
                                >
                                    {item.button.title}  
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}