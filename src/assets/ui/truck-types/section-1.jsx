import { PageButton } from "../components/buttons"
import { P1 } from "../components/descriptions"
import { H1 } from "../components/heading-1"

const TruckTypesIntro = () => {
  return (
    <div className='relative h-[calc(100vh-8em)] bg-cover bg-fixed bg-center' style={{backgroundImage:'url(/images/truck-types/1.png)'}}>
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-700/20 flex items-end justify-end pb-20">
            <div className="container bg-neutral-950/80 min-h-30 p-15 rounded-xl flex flex-col gap-3">
                <H1 extraCss={'text-neutral-100 underline underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>Truck Types We Dispatch at ODS Dispatch</H1>
                <P1 extraClass="text-neutral-100 font-normal capitalize tracking-wide text-shadow-lg/30">{`At ODS Dispatch, we proudly provide top-notch dispatch services for a wide range of truck types. Whether you’re an owner-operator or a small fleet, our expert dispatchers ensure you’re always loaded with profitable freight while keeping your wheels moving.`}</P1>
                <PageButton addressLink={'/carriers-setup'} extraClass={'w-fit text-neutral-100 border-2 bg-red-800 border-transparent transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Get Setup with ODS</PageButton>
            </div>
        </div>
    </div>
  )
}

export default TruckTypesIntro