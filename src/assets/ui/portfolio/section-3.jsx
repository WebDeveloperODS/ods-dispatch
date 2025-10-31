import { PageButton } from '../components/buttons'

const TruckingExcellence = () => {
      return (
            <div className={`container relative bg-cover bg-bottom lg:bg-center min-h-150 lg:min-h-120 w-full rounded-xl shadow-lg shadow-neutral-400 mb-20!`} style={{backgroundImage: window.innerWidth >= 1024 ? `url(/images/portfolio/7.jpg)` : `url(/images/portfolio/8.jpg)`}}>
                  <div className='absolute top-0 left-0 h-full w-full flex flex-col lg:flex-row items-center justify-end rounded-xl bg-linear-to-b lg:bg-linear-to-r from-transparent from-20% to-100% to-neutral-800/80'>
                        <div className='py-10 px-6 lg:p-10 w-full lg:max-w-[45%] h-full rounded-xl lg:rounded-r-xl flex items-start justify-end lg:justify-center flex-col gap-3 lg:gap-5'>
                              <h2 className={'font-extrabold text-neutral-50 text-shadow-xs text-shadow-black text-xl lg:text-3xl uppercase'}>Your Digital Highway to Trucking Excellence</h2>
                              <p className='text-md lg:text-lg text-neutral-50 text-shadow-xs text-shadow-black capitalize tracking-wide'>{`A trucking company’s website serves as its digital showcase, showing values, attracting drivers and clients, and providing a smooth and professional experience for everyone.`}</p>
                              <PageButton addressLink={'tel:+13012024083'} extraClass={'w-fit text-neutral-100 border-2 bg-red-800 border-transparent  rounded-full! px-4! py-2! transition-all ease-in-out duration-300 hover:scale-[1.05]'} >{`Let's Discuss On Call`}</PageButton>
                        </div>
                  </div>
            </div>
      )
}                   

export default TruckingExcellence