import { useState } from 'react';
import {H1,H3} from '../assets/ui/components/heading-1';
import { useEffect } from 'react';
import { Trash2 } from 'lucide-react';

const TruckDetails = ({ index, truck, updateTruck, removeTruck, count }) => {
  const truckTypes = [
    'Reefer',
    'Dry Van',
    'Flatbed',
    'Straight Box',
    'Power Only',
    'Step Deck',
    'Low Boy',
    'Hotshot',
    'Box Truck',
    'Tanker',
    'RGN & Heavy Haul',
  ];

  return (
    <div className="col-span-full grid grid-cols-6 p-4 bg-neutral-100 rounded-md shadow-sm shadow-neutral-300 border border-neutral-400 gap-x-8 gap-y-4 relative">
      {
        count > 1 ? <button
        type="button"
        className="absolute top-2 -right-8 text-neutral-100 p-1 bg-red-700 font-bold rounded-md cursor-pointer"
        onClick={() => removeTruck(index)}
      >
        <Trash2 className='h-5 w-auto'/>
      </button> : null
      }

      <select
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        value={truck.type}
        onChange={(e) => updateTruck(index, { ...truck, type: e.target.value })}
      >
        <option value="">Select truck type</option>
        {truckTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <input
        type="text"
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        placeholder="Footage(ft)"
        value={truck.footage}
        onChange={(e) => updateTruck(index, { ...truck, footage: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        placeholder="Max Weight"
        value={truck.weight}
        onChange={(e) => updateTruck(index, { ...truck, weight: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        placeholder="No. Of Axels"
        value={truck.axels}
        onChange={(e) => updateTruck(index, { ...truck, axels: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        placeholder="Trailer Reg#"
        value={truck.trailerReg}
        onChange={(e) => updateTruck(index, { ...truck, trailerReg: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md"
        placeholder="Truck Reg#"
        value={truck.truckReg}
        onChange={(e) => updateTruck(index, { ...truck, truckReg: e.target.value })}
      />
    </div>
  );
};
const CarriersSetup = () => {
  
  const  [carrierData, setCarrierData] = useState({
    companyName: '', dba: '', 
    address: {
      streetAddress: '', addressLine2: '', city: '', state: '', zipCode: ''
    },
    phone:'',
    email: '',
    mcNo:'',
    usdot: '',
    fein_ssn:'',
    numberOfTrucks:'',
    numberOfDrivers:'',
    truckTypes: [
      { type: '', footage: '', weight: '', axels: '', trailerReg: '', truckReg: '' },
    ],
    invoicesFactorization: '',
    preferredStates: [],
    mcImg: '',
    coiImg: '',
    noaImg: '',
    w9Img: ''
  })


  const updateTruck = (index, updatedTruck) => {
    setCarrierData((prev) => {
      const updatedTrucks = [...prev.truckTypes];
      updatedTrucks[index] = updatedTruck;
      return { ...prev, truckTypes: updatedTrucks };
    });
  };

  // Add new truck
  const addTruck = () => {
    setCarrierData((prev) => ({
      ...prev,
      truckTypes: [
        ...prev.truckTypes,
        { type: '', footage: '', weight: '', axels: '', trailerReg: '', truckReg: '' },
      ],
    }));
  };

  // Remove truck
  const removeTruck = (index) => {
    setCarrierData((prev) => {
      const updatedTrucks = prev.truckTypes.filter((_, i) => i !== index);
      return { ...prev, truckTypes: updatedTrucks };
    });
  };


  return (
    <div className='container py-20 flex flex-col gap-5'>
      <H1 extraCss={'tracking-wider underline underline-offset-5 decoration-3 decoration-red-700'}>Carrier SetUp</H1>
      <H3 extraCss={'tracking-wide capitalize '}>{`After you complete the carrier setup form, we’ll send you a Dispatch Service Agreement along with a General Power of Attorney (Agent) for your records. To finalize, please make sure to attach your MC Authority, W-9, and Insurance documents below.`}</H3>
      <form className='grid grid-cols-2 gap-x-8 gap-y-4' on>
        {/* Company Name */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>Company Name</label>
          <input type='text' name='companyName' id='companyName' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='Company name...' required
          value={carrierData.companyName} onChange={(e) => setCarrierData((prev) => ({...prev, companyName: e.target.value}))}/>
        </div>
        {/* DBA */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>DBA</label>
          <input type='text' name='dba' id='dba' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='DBA...'
          value={carrierData.dba} onChange={(e) => setCarrierData((prev) => ({...prev, dba: e.target.value}))}/>
        </div>
        {/* Address */}
        <div className='col-span-full'>
          <h3 className='font-semibold tracking-wide capitalize'>Address</h3>
          <div className='col-span-full grid grid-cols-2 p-6 bg-neutral-100 rounded-md shadow-sm shadow-neutral-300 border border-neutral-400 gap-x-8 gap-y-4'>
            <div className='flex flex-col gap-1/2'>
              <input type='text' name='streetAddress' id='streetAddress' 
              className='bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md' placeholder='Street 1...'
              value={carrierData.address.streetAddress} onChange={(e) => setCarrierData((prev) => ({...prev, address: {...address, streetAddress:e.target.value}}))}/>
              <label className='font-[500] text-neutral-700' htmlFor='streetAddress'>Street 1</label>
            </div>
            <div className='flex flex-col gap-1/2'>
              <input type='text' name='addressLine2' id='addressLine2' 
              className='bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md' placeholder='Street 2...'
              value={carrierData.address.addressLine2} onChange={(e) => setCarrierData((prev) => ({...prev, address: {...address, addressLine2:e.target.value}}))}/>
              <label className='font-[500] text-neutral-700' htmlFor='addressLine2'>Street 2</label>
            </div>
            <div className='flex flex-col gap-1/2'>
              <input type='text' name='city' id='city' 
              className='bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md' placeholder='City...'
              value={carrierData.address.city} onChange={(e) => setCarrierData((prev) => ({...prev, address: {...address, city:e.target.value}}))}/>
              <label className='font-[500] text-neutral-700' htmlFor='city'>City</label>
            </div>
            <div className='flex flex-col gap-1/2'>
              <input type='text' name='state' id='state' 
              className='bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md' placeholder='State...'
              value={carrierData.address.state} onChange={(e) => setCarrierData((prev) => ({...prev, address: {...address, state:e.target.value}}))}/>
              <label className='font-[500] text-neutral-700' htmlFor='state'>State</label>
            </div>
            <div className='flex flex-col gap-1/2'>
              <input type='text' name='zipCode' id='zipCode' 
              className='bg-neutral-50 py-1 px-3 border border-neutral-300 rounded-md' placeholder='Zip code...'
              value={carrierData.address.zipCode} onChange={(e) => setCarrierData((prev) => ({...prev, address: {...address, zipCode:e.target.value}}))}/>
              <label className='font-[500] text-neutral-700' htmlFor='zipCode'>Zip Code</label>
            </div>
          </div>
        </div>
        {/* Email */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>Email</label>
          <input type='email' name='email' id='email' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='Email...'
          value={carrierData.email} onChange={(e) => setCarrierData((prev) => ({...prev, email: e.target.value}))}/>
        </div>
        {/* phone */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>Phone</label>
          <input type='tel' name='phone' id='phone' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='(000) 000 0000'
          value={carrierData.phone} onChange={(e) => setCarrierData((prev) => ({...prev, phone: e.target.value}))}/>
        </div>
        {/* MC No. */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>MC#</label>
          <input type='text' name='mcNo' id='mcNo' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='MC#'
          value={carrierData.mcNo} onChange={(e) => setCarrierData((prev) => ({...prev, mcNo: e.target.value}))}/>
        </div>
        {/* DOT No. */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>USDOT#</label>
          <input type='text' name='usdot' id='usdot' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='USDOT#'
          value={carrierData.usdot} onChange={(e) => setCarrierData((prev) => ({...prev, usdot: e.target.value}))}/>
        </div>
        {/* fein_ssn No. */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>FEIN / SSN</label>
          <input type='text' name='fein_ssn' id='fein_ssn' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='FEIN / SSN'
          value={carrierData.fein_ssn} onChange={(e) => setCarrierData((prev) => ({...prev, fein_ssn: e.target.value}))}/>
        </div>
        <div />
        {/* Truck Types */}
        <div className="flex flex-col gap-1 col-span-full">
          <label className="font-semibold tracking-wide capitalize">
            Types Of Trucks You Have
          </label>

          <div className="flex flex-col gap-5">
            {carrierData.truckTypes.map((truck, index) => (
              <TruckDetails
                key={index}
                index={index}
                truck={truck}
                updateTruck={updateTruck}
                removeTruck={removeTruck}
                count={carrierData.truckTypes.length}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addTruck}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
          >
            + Add Another Truck
          </button>
        
        </div>
        {/* No. Of Trucks */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>Total No. Of Trucks</label>
          <input type='text' name='numberOfTrucks' id='numberOfTrucks' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='No. of trucks...'
          value={carrierData.numberOfTrucks || ''} onChange={(e) => setCarrierData((prev) => ({...prev, numberOfTrucks: e.target.value}))}/>
        </div>
        {/* No. of drivers */}
        <div className='flex flex-col gap-1/2'>
          <label className='font-semibold tracking-wide capitalize'>Total No. Of Drivers</label>
          <input type='text' name='numberOfDrivers' id='numberOfDrivers' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md' placeholder='No. of drivers...'
          value={carrierData.numberOfDrivers || ''} onChange={(e) => setCarrierData((prev) => ({...prev, numberOfDrivers: e.target.value}))}/>
        </div>
        {/* Invoices Factor */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide capitalize'>
            Do you factor your invoices?
          </label>
          <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
            <div className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='invoicesFactorization' 
                id='invoicesFactorization-yes'
                value='yes'
                checked={carrierData.invoicesFactorization === 'yes'}
                onChange={(e) => setCarrierData(prev => ({
                  ...prev, 
                  invoicesFactorization: e.target.value
                }))}
                className='w-4 h-4 text-red-600 cursor-pointer'
              />
              <label 
                htmlFor='invoicesFactorization-yes'
                className='cursor-pointer select-none'
              >
                Yes
              </label>
            </div>
            
            <div className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='invoicesFactorization' 
                id='invoicesFactorization-no'
                value='no'
                checked={carrierData.invoicesFactorization === 'no'}
                onChange={(e) => setCarrierData(prev => ({
                  ...prev, 
                  invoicesFactorization: e.target.value
                }))}
                className='w-4 h-4 text-red-600 cursor-pointer'
              />
              <label 
                htmlFor='invoicesFactorization-no'
                className='cursor-pointer select-none'
              >
                No
              </label>
            </div>
          </div>
        </div>
        {/* Preferred States */}
        <div className='flex flex-col gap-1/2 col-span-full'>
          <label className='font-semibold tracking-wide capitalize'>States you preferred to drive</label>
          <textarea rows={4} name='preferredStates' id='preferredStates' 
          className='bg-neutral-100 py-1 px-3 border border-neutral-400 rounded-md'
          value={carrierData.preferredStates || ''} onChange={(e) => setCarrierData((prev) => ({...prev, preferredStates: e.target.value}))}/>
        </div>
        {/* All files */}
        <div className='flex flex-col gap-1 col-span-full'>
          <label className='font-semibold tracking-wide capitalize'>
            Upload the files (MC Letter, NOA, W9 Form, Certificate Of Liability Insurance)
          </label>
          <div className='grid grid-cols-4 gap-5'>
              <label className='cursor-pointer bg-neutral-100 py-1 px-3 border-3 border-dashed border-neutral-400 rounded-md min-h-30 flex flex-col items-center justify-center text-center text-sm' htmlFor='mcImg'>
                <input type='file' name='mcImg' id='mcImg' onChange={(e) => setCarrierData((prev) => ({...prev, mcImg: e.target.value}))} className='hidden' accept='image/png, image/jpeg, image/jpg, application/pdf' />
                <span className='cursor-pointer font-bold tracking-wide'>{
                    carrierData.mcImg ? carrierData.mcImg: `MC Form`
                  }</span>
                <span>(.pdf, .png, .jpg, .jpeg)</span>
              </label>
              <label className='cursor-pointer bg-neutral-100 py-1 px-3 border-3 border-dashed border-neutral-400 rounded-md min-h-30 flex flex-col items-center justify-center text-center text-sm' htmlFor='noaImg'>
                <input type='file' name='noaImg' id='noaImg' onChange={(e) => setCarrierData((prev) => ({...prev, noaImg: e.target.value}))} className='hidden' accept='image/png, image/jpeg, image/jpg, application/pdf' />
                <span className='cursor-pointer font-bold tracking-wide'>Notice Of Authority (N.O.A)</span>
                <span>(.pdf, .png, .jpg, .jpeg)</span>
              </label>
              <label className='cursor-pointer bg-neutral-100 py-1 px-3 border-3 border-dashed border-neutral-400 rounded-md min-h-30 flex flex-col items-center justify-center text-center text-sm' htmlFor='coiImg'>
                <input type='file' name='coiImg' id='coiImg' onChange={(e) => setCarrierData((prev) => ({...prev, coiImg: e.target.value}))} className='hidden' accept='image/png, image/jpeg, image/jpg, application/pdf' />
                <span className='cursor-pointer font-bold tracking-wide'>Certificate Of Liability Insurance (C.O.I)</span>
                <span>(.pdf, .png, .jpg, .jpeg)</span>
              </label>
              <label className='cursor-pointer bg-neutral-100 py-1 px-3 border-3 border-dashed border-neutral-400 rounded-md min-h-30 flex flex-col items-center justify-center text-center text-sm' htmlFor='w9Img'>
                <input type='file' name='w9Img' id='w9Img' onChange={(e) => setCarrierData((prev) => ({...prev, w9Img: e.target.value}))} className='hidden' accept='image/png, image/jpeg, image/jpg, application/pdf' />
                <span className='cursor-pointer font-bold tracking-wide'>W9 Form</span>
                <span>(.pdf, .png, .jpg, .jpeg)</span>
              </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarriersSetup