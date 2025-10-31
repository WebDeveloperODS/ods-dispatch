import { PageButton } from "../components/buttons"
import { P1 } from "../components/descriptions"
import { H1 } from "../components/heading-1"

const PortfolioHead = () => {
  return ( 
    <div className='relative h-screen lg:h-[77vh] bg-cover lg:bg-fit bg-fixed bg-center' style={ window.innerWidth >=1024 ? {backgroundImage:`url(${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/1.jpg)`} : {backgroundImage:`url(${import.meta.env.VITE_IMAGES_SERVER}/images/portfolio/6.jpg)`}}>
        <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-end justify-end pb-10 lg:pb-20">
            <div className="container bg-neutral-200/40 backdrop-blur-sm min-h-30 p-6 lg:p-15 rounded-xl flex text-center items-center flex-col gap-3">
                <h1 className={'text-[2.4rem] font-[1000] capitalize text-neutral-900 underline lg:underline-offset-8 decoration-3 decoration-red-800 text-shadow-lg/10'}>Turning Business Visions Into Digital Reality</h1>
                <P1 extraClass="text-neutral-900 font-[600] capitalize tracking-wide">{`We transform business ideas into powerful digital experiences through creative websites and marketing that attract, engage, and deliver results.`}</P1>
                <div className="mt-4 flex justify-center items-center gap-3">
                  <PageButton addressLink={'/application-to-avail-services'} extraClass={'lg:text-lg w-fit text-neutral-100 border-2 bg-red-800 border-transparent  rounded-full! px-4! py-2! transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Get A Quote</PageButton>
                  <PageButton addressLink={'tel:+13012024083'} extraClass={'lg:text-lg w-fit text-red-800 border-2 bg-transparent border-red-800 rounded-full! px-4! py-2! transition-all ease-in-out duration-300 hover:scale-[1.05]'}>Request a call</PageButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioHead