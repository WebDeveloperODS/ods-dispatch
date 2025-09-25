import { P1 } from "../components/descriptions"
import { H2 } from "../components/heading-1"


const T_O_T_Descriptions = () => {
    const TrucksDetails = [
        {
        label: 'Dry Van',
        description:
            'The most versatile and commonly used trailer in the trucking industry, dry vans are perfect for hauling general freight, packaged goods, and non-perishable items. At ODS Dispatch, we connect dry van operators with high-paying loads that maximize efficiency and minimize deadhead miles.',
        image: '',
        },
        {
        label: 'Straight Box',
        description:
            'Straight box trucks, also known as box trucks or cube vans, are ideal for local and regional deliveries. ODS Dispatch helps box truck operators find consistent freight opportunities tailored to their capacity and routes.',
        image: '',
        },
        {
        label: 'Flatbed',
        description:
            'Flatbed trailers are designed for oversized or oddly shaped cargo that doesn’t fit in enclosed trailers. At ODS Dispatch, we secure profitable flatbed loads while ensuring proper routing and compliance with safety regulations.',
        image: '',
        },
        {
        label: 'Reefer',
        description:
            'Refrigerated trailers, or reefers, transport temperature-sensitive goods like produce, dairy, meat, and pharmaceuticals. ODS Dispatch specializes in reefer dispatching, keeping your truck loaded with reliable, profitable freight year-round.',
        image: '',
        },
        {
        label: 'Hotshot',
        description:
            'Hotshot trucking is perfect for time-sensitive, smaller loads using pickup trucks and trailers. ODS Dispatch ensures hotshot operators get urgent and profitable freight while minimizing downtime and empty miles.',
        image: '',
        },
        {
        label: 'Step Deck',
        description:
            'Step deck trailers, also known as drop decks, allow for taller loads that can’t be transported on standard flatbeds. ODS Dispatch connects step deck operators with diverse and high-paying freight opportunities.',
        image: '',
        },
        {
        label: 'RGN & Heavy Haul',
        description:
            'Removable Gooseneck (RGN) and heavy haul trailers are used for transporting oversized equipment and machinery. ODS Dispatch provides specialized dispatching solutions for operators in this niche, ensuring safety, compliance, and maximum profitability.',
        image: '',
        },
        {
        label: 'Power Only',
        description:
            'Power only trucking involves providing just the tractor to haul pre-loaded trailers. ODS Dispatch helps power-only operators find consistent freight, reducing downtime and boosting earnings.',
        image: '',
        },
        {
        label: 'Car Hauler',
        description:
            'Car haulers are built for transporting multiple vehicles safely and efficiently. ODS Dispatch matches car hauler operators with steady freight, keeping their trailers full and revenue strong.',
        image: '',
        },
    ];

    return (
    <div className="py-24">
        <div className="container relative rounded-xl bg-cover bg-fixed bg-center" style={{backgroundImage:'url(/images/truck-types/bg.jpg)'}}>
            <div className="bg-neutral-800/60 p-10 rounded-xl flex flex-col gap-3 items-center justify-center min-h-30">
                <H2 extraCss={'uppercase tracking-wider text-neutral-100 underline underline-offset-5 decoration-3 decoration-red-800 text-shadow-lg/30'}>The Equipment We Dispatch Across the Nation</H2>
                <P1 extraClass="text-neutral-100 capitalize font-semibold text-shadow-lg/30 tracking-wide">We provide expert dispatch services for all major truck types, ensuring smooth nationwide operations.</P1>
            </div>
            {/* {

            } */}
        </div>
    </div>
  )
}

export default T_O_T_Descriptions