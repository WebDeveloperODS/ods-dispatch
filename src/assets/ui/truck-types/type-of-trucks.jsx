import { MoveDownIcon } from "lucide-react";
import { P1 } from "../components/descriptions"
import { H2 } from "../components/heading-1"
import { ArrowDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { PageButton } from "../components/buttons";


const T_O_T_Descriptions = () => {
    const TrucksDetails = [
        {
        label: 'Dry Van',
        id:'dry-van',
        description:
            'The most versatile and commonly used trailer in the trucking industry, dry vans are perfect for hauling general freight, packaged goods, and non-perishable items. At ODS Dispatch, we connect dry van operators with high-paying loads that maximize efficiency and minimize deadhead miles.',
        image: '/images/truck-types/dry-van.png',
        },
        {
        label: 'Straight Box',
        id:'straight-box',
        description:
            'Straight box trucks, also known as box trucks or cube vans, are ideal for local and regional deliveries. ODS Dispatch helps box truck operators find consistent freight opportunities tailored to their capacity and routes.',
        image: '/images/truck-types/straight-box.jpg',
        },
        {
        label: 'Flatbed',
        id:'flatbed',
        description:
            'Flatbed trailers are designed for oversized or oddly shaped cargo that doesn’t fit in enclosed trailers. At ODS Dispatch, we secure profitable flatbed loads while ensuring proper routing and compliance with safety regulations.',
        image: '/images/truck-types/flatbed.png',
        },
        {
        label: 'Reefer',
        id:'reefer',
        description:
            'Refrigerated trailers, or reefers, transport temperature-sensitive goods like produce, dairy, meat, and pharmaceuticals. ODS Dispatch specializes in reefer dispatching, keeping your truck loaded with reliable, profitable freight year-round.',
        image: '/images/truck-types/reefer.png',
        },
        {
        label: 'Hotshot',
        id:'hotshot',
        description:
            'Hotshot trucking is perfect for time-sensitive, smaller loads using pickup trucks and trailers. ODS Dispatch ensures hotshot operators get urgent and profitable freight while minimizing downtime and empty miles.',
        image: '/images/truck-types/hotshot.png',
        },
        {
        label: 'Step Deck',
        id:'step-deck',
        description:
            'Step deck trailers, also known as drop decks, allow for taller loads that can’t be transported on standard flatbeds. ODS Dispatch connects step deck operators with diverse and high-paying freight opportunities.',
        image: '/images/truck-types/step-deck.png',
        },
        {
        label: 'RGN & Heavy Haul',
        id:'rgn-heavy-haul',
        description:
            'Removable Gooseneck (RGN) and heavy haul trailers are used for transporting oversized equipment and machinery. ODS Dispatch provides specialized dispatching solutions for operators in this niche, ensuring safety, compliance, and maximum profitability.',
        image: '/images/truck-types/heavy-haul.png',
        },
        {
        label: 'Power Only',
        id:'power-only',
        description:
            'Power only trucking involves providing just the tractor to haul pre-loaded trailers. ODS Dispatch helps power-only operators find consistent freight, reducing downtime and boosting earnings.',
        image: '/images/truck-types/power-only.png',
        }
    ];

    return (
    <div className="pt-24">
        <div className="container mb-24! relative rounded-xl bg-cover bg-fixed bg-center" style={{backgroundImage:'url(/images/truck-types/bg.jpg)'}}>
            <div id="dry-vans" className="bg-neutral-800/60 p-10 rounded-xl flex flex-col gap-3 items-center justify-center min-h-30">
                <H2 extraCss={'uppercase tracking-wider text-neutral-100 underline underline-offset-5 decoration-3 decoration-red-800 text-shadow-lg/30'}>The Equipment We Dispatch Across the Nation</H2>
                <P1 extraClass="text-neutral-100 capitalize font-semibold text-shadow-lg/30 tracking-wide">We provide expert dispatch services for all major truck types, ensuring smooth nationwide operations.</P1>
                <HashLink smooth to={'#trucks'} className={'pb-2 pt-4 rounded-full text-neutral-100 border-2 cursor-pointer'}><MoveDownIcon className="animate-bounce"/></HashLink>
            </div>
        </div>
        <div id="trucks">
            {
                TrucksDetails.map((truck, index) => 
                <div id={truck.id} className={`w-full grid grid-cols-2 relative`} key={index}>    
                    { index%2 === 0 ? <div className=""></div> : null }
                    <div>
                        <img src={truck.image}  className="object-center object-cover max-h-100 w-full"/>
                    </div>
                    { index%2!==0 ? <div> </div> : null }
                    <div className="absolute container h-full top-0 left-0 right-0 grid grid-cols-2 ">
                        { index%2 === 0 ? <div className="flex flex-col gap-2 h-full justify-center my-5 pr-12">
                            <H2 extraCss={'underline underline-offset-4 decoration-red-800 decoration-3'}>{truck.label}</H2>
                            <P1 extraClass="tracking-wide">{truck.description}</P1>
                            <PageButton addressLink={'/carriers-setup'} extraClass={'bg-red-800 rounded-xl mt-3 text-neutral-100 w-fit transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Get your setup with ODS</PageButton>
                        </div> : null }
                        <div>
                        </div>
                        { index%2!==0 ? <div className="flex flex-col gap-2 h-full justify-center my-5 pl-12">
                            <H2 extraCss={'underline underline-offset-4 decoration-red-800 decoration-3'}>{truck.label}</H2>
                            <P1 extraClass="tracking-wide">{truck.description}</P1>
                            <PageButton addressLink={'/carriers-setup'} extraClass={'bg-red-800 rounded-xl mt-3 text-neutral-100 w-fit transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Get your setup with ODS</PageButton>
                        </div> : null }
                    </div>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default T_O_T_Descriptions