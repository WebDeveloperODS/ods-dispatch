import TruckTypesIntro from '../assets/ui/truck-types/section-1'
import Seo from '../assets/ui/components/Seo'
import T_O_T_Descriptions from '../assets/ui/truck-types/type-of-trucks'

const TruckTypes = () => {
  return (
    <>
      <Seo
        title={'Types of Trucks We Dispatch | Reefer, Dry Van, Flatbed & More'}
        description={'Explore truck types we support: Reefer, Dry Van, Flatbed, Step Deck, Power Only, Hotshot, and more. ODS Dispatch keeps your fleet loaded.'}
        path={'/truck-types'}
        image={'/images/truck-types/straight-box.jpg'}
      />
      <TruckTypesIntro />
      <T_O_T_Descriptions />
    </>
  )
}

export default TruckTypes