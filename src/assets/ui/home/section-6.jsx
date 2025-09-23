import { useState } from "react";
import { H2 } from "../components/heading-1";



export default function TruckTypes(){
    const [activeTitle, setActiveTitle] = useState(0);
    const trucks = [
        {
            title: 'Dry Vans',
            content: 'Searching for the right dry van dispatcher? At ODS Dispatch, we specialize in booking profitable dry van freight that keeps your fleet moving and earning more. Our professional dispatchers focus on efficient route planning, reliable load management, and strong broker negotiations to maximize your profitability. With our dedicated dry van dispatch services, you get the loads you want—without the stress.',
            image: '',
            pageLink:'',
        },
        {
            title: 'Flatbed',
            content: 'Need a flatbed dispatcher you can count on? ODS Dispatch provides expert flatbed and Conestoga trailer dispatching tailored to your hauling needs. Our independent dispatch services connect serious truck drivers with profitable freight, handle broker communication, and keep your trailer loaded. Maximize your specialized hauling potential and stay ahead with our dedicated flatbed dispatch solutions.',
            image: '',
            pageLink:'',
        },
        {
            title: 'Reefer',
            content: 'Looking for a reliable reefer dispatcher? At ODS Dispatch, our expert team specializes in managing temperature-sensitive freight with precision and care. From securing profitable reefer loads to ensuring timely deliveries, we keep your cargo moving smoothly and efficiently. Connect with our dedicated reefer dispatchers today and let us help you achieve your business goals with confidence.',
            image: '',
            pageLink:'',
        },
        {
            title: 'Step Deck',
            content: 'Put your step deck trailer to work with confidence. At ODS Dispatch, our experienced team specializes in moving oversized loads, heavy machinery, and construction equipment with precision and care. Through our dedicated step deck dispatch services, we secure profitable loads while managing the complexities of transport—so you enjoy higher earnings and complete peace of mind knowing your valuable cargo is expertly handled.',
            image: '',
            pageLink:'',
        },
        {
            title: 'RGN & Heavy Haul',
            content: 'Unlock the full potential of your RGN with ODS Dispatch. Our specialized RGN dispatch services connect you to the most profitable loads while managing permits for oversize and overweight hauls across multiple states. We make sure your equipment stays active, your routes stay compliant, and your profits keep climbing. Don’t let your RGN sit idle—trust our dispatch experts to keep you moving and earning more.',
            image: '',
            pageLink:'',
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
                trucks.map((truck,index) => <div className={` min-h-140 w-full border rounded-xl ${activeTitle===index ? 'opacity-full flex':'opacity-0 hidden'} transition-all ease-in-out duration-400`}>
                    {truck.title}
                </div>)
            }
        </div>
    )
}