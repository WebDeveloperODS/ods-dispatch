import { useState } from "react";
import { H2 } from "../components/heading-1";
import { P2 } from "../components/descriptions";
import { PageButton } from "../components/buttons";

export default function TruckTypes(){
    // const SERVER = import.meta.env.VITE_IMAGES_SERVER ;
    const [activeTitle, setActiveTitle] = useState(0);
    const trucks = [
        {
            title: 'Dry Vans',
            content: 'Searching for the right Dry Van Dispatcher? At ODS Dispatch, we specialize in booking profitable dry van freight that keeps your fleet moving and earning more. Our professional Dispatchers focus on efficient route planning, reliable load management, and strong broker negotiations to maximize your profitability. With our dedicated dry van dispatch services, you get the loads you want—without the stress.',
            image: '/images/home/10.png',
            pageLink:'',
            buttonText:'About dry vans',
        },
        {
            title: 'Straight Box',
            content: 'Looking for a dependable Straight Box Truck Dispatcher? At ODS Dispatch, our experienced team takes the hassle out of booking and managing loads for your box truck. From securing consistent, high-paying freight to optimizing routes for on-time deliveries, we keep your box truck working efficiently and profitably. Partner with our dedicated dispatchers today and let ODS Dispatch help you drive steady growth and success in your business.',
            image: '/images/home/17.png',
            pageLink:'',
            buttonText:'About straight box',
        },
        {
            title: 'Flatbed',
            content: 'Need a Flatbed Dispatcher you can count on? ODS Dispatch provides expert flatbed and Conestoga trailer dispatching tailored to your hauling needs. Our independent dispatch services connect serious truck drivers with profitable freight, handle broker communication, and keep your trailer loaded. Maximize your specialized hauling potential and stay ahead with our dedicated flatbed dispatch solutions.',
            image: '/images/home/11.png',
            pageLink:'',
            buttonText:'About Flatbeds',
        },
        {
            title: 'Hotshot',
            content: 'Looking for a skilled Hotshot Truck Dispatcher? At ODS Dispatch, we specialize in managing urgent, time-sensitive loads with speed and precision. Our expert dispatchers secure the best-paying hotshot freight, coordinate efficient routes, and handle broker communication so you can stay focused on the road. With us, your hotshot truck keeps moving, your earnings stay strong, and your business keeps growing.',
            image: '/images/home/15.png',
            pageLink:'',
            buttonText:'About hotshots',
        },
        {
            title: 'Reefer',
            content: 'Looking for a reliable Reefer Dispatcher? At ODS Dispatch, our expert team specializes in managing temperature-sensitive freight with precision and care. From securing profitable reefer loads to ensuring timely deliveries, we keep your cargo moving smoothly and efficiently. Connect with our dedicated reefer Dispatchers today and let us help you achieve your business goals with confidence.',
            image: '/images/home/12.png',
            pageLink:'',
            buttonText:'About Reefers',
        },
        {
            title: 'Step Deck',
            content: 'Put your Step Deck Trailer to work with confidence. At ODS Dispatch, our experienced team specializes in moving oversized loads, heavy machinery, and construction equipment with precision and care. Through our dedicated step deck dispatch services, we secure profitable loads while managing the complexities of transport—so you enjoy higher earnings and complete peace of mind knowing your valuable cargo is expertly handled.',
            image: '/images/home/13.png',
            pageLink:'',
            buttonText:'About Step Decks',
        },
        {
            title: 'RGN & Heavy Haul',
            content: 'Unlock the full potential of your RGN with ODS Dispatch. Our specialized RGN dispatch services connect you to the most profitable loads while managing permits for oversize and overweight hauls across multiple states. We make sure your equipment stays active, your routes stay compliant, and your profits keep climbing. Don’t let your RGN sit idle—trust our dispatch experts to keep you moving and earning more.',
            image: '/images/home/14.png',
            pageLink:'',
            buttonText:'About RGN & Heavy Haul',
        },
    ]
    return(
        <div className="container py-24 flex flex-col items-center justify-center">
            <H2 extraCss={'uppercase underline underline-offset-5 decoration-3 decoration-red-800'}>Types Of Trucks ODS Deals With</H2>
            {/* Menu */}
            <div className="flex gap-3 justify-center items-center my-5 ">
                {
                    trucks.map((menu, index) => <button onClick={() => setActiveTitle(index)} className={`${activeTitle===index ? 'text-red-800':'text-neutral-600'} border-2 px-2 py-1 rounded-full cursor-pointer hover:bg-red-800 hover:text-white hover:border-transparent`} key={index}>{menu.title}</button>)
                }
            </div>
            {
                trucks.map((truck,index) => <div style={{backgroundImage: `url(${truck.image})`}} 
                className={`relative bg-cover bg-no-repeat bg-left min-h-140 w-[90%] rounded-xl ${activeTitle===index ? 'opacity-full flex':'opacity-0 hidden'} transition-all ease-in-out duration-400`}>
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl inset-0 bg-neutral-800/20 pl-10 flex items-center">
                        <div className="flex flex-col max-w-100 w-100 gap-2 bg-neutral-800/80 p-8 rounded-xl shadow-sm shadow-neutral-800">
                            <H2 extraCss={'text-neutral-100 tracking-wide '}>{truck.title}</H2>
                            <P2 extraClass="text-neutral-100 tracking-wider">{truck.content}</P2>
                            <PageButton addressLink={truck.pageLink} extraClass={'mt-3 bg-red-800 text-white w-fit text-sm! tracking-wide hover:-translate-y-1/12'}>{truck.buttonText}</PageButton>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}