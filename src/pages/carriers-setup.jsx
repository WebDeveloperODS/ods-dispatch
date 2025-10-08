import { useState } from 'react';
import { H1, H2, H3 } from '../assets/ui/components/heading-1';
import { Trash2, Asterisk, X } from 'lucide-react';
import { submitCarrierData } from '../assets/api/backend-api';
import { FaTruckLoading } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';

// Truck Details Component
const TruckDetails = ({ index, truck, updateTruck, removeTruck, count }) => {
  const truckTypes = [
    'Reefer', 'Dry Van', 'Flatbed', 'Straight Box', 'Power Only',
    'Step Deck', 'Low Boy', 'Hotshot', 'Box Truck', 'Tanker', 'RGN & Heavy Haul'
  ];

  return (
    <div className="col-span-full grid grid-col-1 lg:grid-cols-[30%_12.5%_12.5%_12.5%_12.5%_12.5%] p-4 bg-neutral-100 rounded-md shadow-sm shadow-neutral-300 border border-neutral-400 gap-4 relative">
      {count > 1 && (
        <button
          type="button"
          className="absolute top-0 bottom-0 -right-8 text-neutral-100 p-1 bg-red-700 font-bold rounded-md cursor-pointer hover:bg-red-800 transition-colors"
          onClick={() => removeTruck(index)}
          aria-label="Remove truck"
        >
          <Trash2 className='h-5 w-auto'/>
        </button>
      )}

      <select
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        value={truck.type}
        onChange={(e) => updateTruck(index, { ...truck, type: e.target.value })}
        
      >
        <option value="">Select truck type</option>
        {truckTypes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Footage (ft)"
        value={truck.footage}
        onChange={(e) => updateTruck(index, { ...truck, footage: e.target.value })}
        
      />

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Max Weight"
        value={truck.weight}
        onChange={(e) => updateTruck(index, { ...truck, weight: e.target.value })}
        
      />

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="No. Of Axels"
        value={truck.axels}
        onChange={(e) => updateTruck(index, { ...truck, axels: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Trailer Reg#"
        value={truck.trailerReg}
        onChange={(e) => updateTruck(index, { ...truck, trailerReg: e.target.value })}
      />

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Truck Reg#"
        value={truck.truckReg}
        onChange={(e) => updateTruck(index, { ...truck, truckReg: e.target.value })}
        
      />
    </div>
  );
};

// Driver Details Component
const DriverDetails = ({ index, driver, updateDriver, removeDriver, count }) => {
  return (
    <div className="col-span-full grid grid-col-1 lg:grid-cols-3 p-4 bg-neutral-100 rounded-md shadow-sm shadow-neutral-300 border border-neutral-400 gap-4 relative">
      {count > 1 && (
        <button
          type="button"
          className="absolute top-0 bottom-0 -right-8 text-neutral-100 p-1 bg-red-700 font-bold rounded-md cursor-pointer hover:bg-red-800 transition-colors"
          onClick={() => removeDriver(index)}
          aria-label="Remove driver"
        >
          <Trash2 className='h-5 w-auto'/>
        </button>
      )}

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Driver name..."
        value={driver.driverName}
        onChange={(e) => updateDriver(index, { ...driver, driverName: e.target.value })}
        
      />

      <input
        type="tel"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="Driver's contact..."
        value={driver.contact}
        onChange={(e) => updateDriver(index, { ...driver, contact: e.target.value })}
        
      />

      <input
        type="text"
        className="bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md"
        placeholder="License type..."
        value={driver.licenseType}
        onChange={(e) => updateDriver(index, { ...driver, licenseType: e.target.value })}
        
      />
    </div>
  );
};

// Main Component
const CarriersSetup = () => {
  const [submission, setSubmission] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [carrierData, setCarrierData] = useState({
    companyName: '',
    dba: '',
    address: {
      streetAddress: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: ''
    },
    phone: '',
    email: '',
    mcNo: '',
    usdot: '',
    fein_ssn: '',
    truckTypes: [
      { type: '', footage: '', weight: '', axels: '', trailerReg: '', truckReg: '' }
    ],
    numberOfDrivers: [
      { driverName: '', licenseType: '', contact: '' }
    ],
    invoicesFactorization: '',
    preferredStates: '',
    mcImg: null,
    coiImg: null,
    noaImg: null,
    w9Img: null,
    driverLicense: null,
    others: []
  });

  // Address handler
  const handleAddressChange = (field, value) => {
    setCarrierData(prev => ({
      ...prev,
      address: { ...prev.address, [field]: value }
    }));
  };

  // Truck handlers
  const updateTruck = (index, updatedTruck) => {
    setCarrierData(prev => {
      const updatedTrucks = [...prev.truckTypes];
      updatedTrucks[index] = updatedTruck;
      return { ...prev, truckTypes: updatedTrucks };
    });
  };

  const addTruck = () => {
    setCarrierData(prev => ({
      ...prev,
      truckTypes: [
        ...prev.truckTypes,
        { type: '', footage: '', weight: '', axels: '', trailerReg: '', truckReg: '' }
      ]
    }));
  };

  const removeTruck = (index) => {
    setCarrierData(prev => ({
      ...prev,
      truckTypes: prev.truckTypes.filter((_, i) => i !== index)
    }));
  };

  // Driver handlers
  const updateDriver = (index, updatedDriver) => {
    setCarrierData(prev => {
      const updatedDrivers = [...prev.numberOfDrivers];
      updatedDrivers[index] = updatedDriver;
      return { ...prev, numberOfDrivers: updatedDrivers };
    });
  };

  const addDriver = () => {
    setCarrierData(prev => ({
      ...prev,
      numberOfDrivers: [
        ...prev.numberOfDrivers,
        { driverName: '', licenseType: '', contact: '' }
      ]
    }));
  };

  const removeDriver = (index) => {
    setCarrierData(prev => ({
      ...prev,
      numberOfDrivers: prev.numberOfDrivers.filter((_, i) => i !== index)
    }));
  };

  // File handlers
  const handleFileEntry = (e, name) => {
    const files = e.target.files;
    
    if (name === 'others') {
      const fileArray = Array.from(files);
      setCarrierData(prev => ({
        ...prev,
        others: [...prev.others, ...fileArray]
      }));
    } else {
      const file = files[0];
      if (file) {
        setCarrierData(prev => ({ ...prev, [name]: file }));
      }
    }
  };

  const removeOtherFile = (index) => {
    setCarrierData(prev => ({
      ...prev,
      others: prev.others.filter((_, i) => i !== index)
    }));
  };

  // Form submission
  const handleSubmission = async (e) => {
    e.preventDefault();
    setSubmission(true)
    // Custom validation for  files
    // const Files = [
    //   { field: carrierData.mcImg, name: 'MC Form' },
    //   { field: carrierData.noaImg, name: 'NOA Form' },
    //   { field: carrierData.coiImg, name: 'Certificate Of Liability Insurance' },
    //   { field: carrierData.w9Img, name: 'W9 Form' },
    //   { field: carrierData.driverLicense, name: "Driver's License" }
    // ];

    // const missingFiles = Files.filter(f => !f.field).map(f => f.name);
    
    // if (missingFiles.length > 0) {
    //   alert(`Please upload the following  documents:\n- ${missingFiles.join('\n- ')}`);
    //   return;
    // }

    const formData = new FormData();

    // Sanitize company name for file naming
    const safeCompanyName = carrierData.companyName
      ? carrierData.companyName.replace(/[^a-zA-Z0-9]/g, "_")
      : "carrier";

    // Helper to rename files
    const renameFile = (file, newName) => {
      return new File([file], newName, { type: file.type });
    };

    // Append files with renamed names
    if (carrierData.mcImg) {
      const ext = carrierData.mcImg.name.split(".").pop();
      formData.append("mcImg", renameFile(carrierData.mcImg, `${safeCompanyName}-mcImg.${ext}`));
    }

    if (carrierData.noaImg) {
      const ext = carrierData.noaImg.name.split(".").pop();
      formData.append("noaImg", renameFile(carrierData.noaImg, `${safeCompanyName}-noaImg.${ext}`));
    }

    if (carrierData.coiImg) {
      const ext = carrierData.coiImg.name.split(".").pop();
      formData.append("coiImg", renameFile(carrierData.coiImg, `${safeCompanyName}-coiImg.${ext}`));
    }

    if (carrierData.w9Img) {
      const ext = carrierData.w9Img.name.split(".").pop();
      formData.append("w9Img", renameFile(carrierData.w9Img, `${safeCompanyName}-w9Img.${ext}`));
    }

    if (carrierData.driverLicense) {
      const ext = carrierData.driverLicense.name.split(".").pop();
      formData.append("driverLicense", renameFile(carrierData.driverLicense, `${safeCompanyName}-driverLicense.${ext}`));
    }

    // Append other files
    carrierData.others.forEach((file) => {
    formData.append("others[]", file);
  });

    try {
      const res = await fetch("https://lightslategrey-partridge-939447.hostingersite.com/uploads.php", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      // Build complete payload with form fields + uploaded file references
      const payload = {
        companyName: carrierData.companyName,
        dba: carrierData.dba,
        address: carrierData.address,
        phone: carrierData.phone,
        email: carrierData.email,
        mcNo: carrierData.mcNo,
        usdot: carrierData.usdot,
        fein_ssn: carrierData.fein_ssn,
        truckTypes: carrierData.truckTypes,
        numberOfDrivers: carrierData.numberOfDrivers,
        invoicesFactorization: carrierData.invoicesFactorization,
        preferredStates: carrierData.preferredStates,
        attachments: {
          mcImg: data.mcImg,
          noaImg: data.noaImg,
          coiImg: data.coiImg,
          w9Img: data.w9Img,
          driverLicense: data.driverLicense,
          others: data['others[]'] || []
        }
      };

      const response = await submitCarrierData(payload);
      if(response){
        setSubmission(false)
        setSubmissionStatus('success')              
      } else{
        setSubmission(false)
        setSubmissionStatus('error')
      }
      
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='container py-10 lg:py-20 flex flex-col gap-5'>
      <H1 extraCss={'tracking-wider underline underline-offset-5 decoration-3 decoration-red-700'}>
        Carrier Setup
      </H1>
      <H3 extraCss={'tracking-wide'}>
        After you complete the carrier setup form, we'll send you a Dispatch Service Agreement 
        along with a General Power of Attorney (Agent) for your records. To finalize, please make 
        sure to attach your MC Authority, W-9, and Insurance documents below.
      </H3>

      <form className='relative flex flex-col lg:grid lg:grid-cols-2  gap-x-8 gap-y-4' onSubmit={handleSubmission}>
        {/* Company Name */}
        {submissionStatus === 'success' && (
          <div className='bg-green-100 text-green-700 p-4 rounded-md shadow-sm text-center shadow-green-300 border border-green-400'>
            <H2 extraCss={'tracking-wider underline underline-offset-5 decoration-3 decoration-green-700'}>
              Thank you for submitting your carrier setup!
            </H2>
          </div>
        )}
        {submissionStatus === null && (
          <>
            <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            Company Name 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='text' 
            name='companyName' 
            id='companyName' 
            required
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='Company name...' 
            
            value={carrierData.companyName} 
            onChange={(e) => setCarrierData(prev => ({...prev, companyName: e.target.value}))}
          />
        </div>

        {/* DBA */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide'>DBA</label>
          <input 
            type='text' 
            name='dba' 
            id='dba' 
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='DBA...'
            value={carrierData.dba} 
            onChange={(e) => setCarrierData(prev => ({...prev, dba: e.target.value}))}
          />
        </div>

        {/* Address Section */}
        <div className='col-span-full'>
          <h3 className='font-semibold tracking-wide mb-2'>Address</h3>
          <div className='flex flex-col lg:grid lg:grid-cols-2 p-6 bg-neutral-100 rounded-md shadow-sm shadow-neutral-300 border border-neutral-400 gap-x-8 gap-y-4'>
            <div className='flex flex-col gap-2'>
              <input 
                type='text' 
                name='streetAddress' 
                id='streetAddress' 
                required
                className='bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md' 
                placeholder='Street 1...'
                value={carrierData.address.streetAddress} 
                onChange={(e) => handleAddressChange('streetAddress', e.target.value)}
                
              />
              <label className='font-medium text-neutral-700 relative w-fit' htmlFor='streetAddress'>
                Street 1 
                <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
              </label>
            </div>

            <div className='flex flex-col gap-2'>
              <input 
                type='text' 
                name='addressLine2' 
                id='addressLine2' 
                className='bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md' 
                placeholder='Street 2...'
                value={carrierData.address.addressLine2} 
                onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
              />
              <label className='font-medium text-neutral-700' htmlFor='addressLine2'>Street 2</label>
            </div>

            <div className='flex flex-col gap-2'>
              <input 
                type='text' 
                name='city' 
                required
                id='city' 
                className='bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md' 
                placeholder='City...'
                value={carrierData.address.city} 
                onChange={(e) => handleAddressChange('city', e.target.value)}
                
              />
              <label className='font-medium text-neutral-700 relative w-fit' htmlFor='city'>
                City 
                <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
              </label>
            </div>

            <div className='flex flex-col gap-2'>
              <input 
                type='text' 
                name='state' 
                required
                id='state' 
                className='bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md' 
                placeholder='State...'
                value={carrierData.address.state} 
                onChange={(e) => handleAddressChange('state', e.target.value)}
                
              />
              <label className='font-medium text-neutral-700 relative w-fit' htmlFor='state'>
                State 
                <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
              </label>
            </div>

            <div className='flex flex-col gap-2'>
              <input 
                type='text' 
                required
                name='zipCode' 
                id='zipCode' 
                className='bg-neutral-50 py-2 px-3 border border-neutral-300 rounded-md' 
                placeholder='Zip code...'
                value={carrierData.address.zipCode} 
                onChange={(e) => handleAddressChange('zipCode', e.target.value)}
              />
              <label className='font-medium text-neutral-700' htmlFor='zipCode'>Zip Code</label>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            Email 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            required
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='Email...' 
            
            value={carrierData.email} 
            onChange={(e) => setCarrierData(prev => ({...prev, email: e.target.value}))}
          />
        </div>

        {/* Phone */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            Phone 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='tel' 
            name='phone' 
            required
            id='phone' 
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='(000) 000-0000'
            
            value={carrierData.phone} 
            onChange={(e) => setCarrierData(prev => ({...prev, phone: e.target.value}))}
          />
        </div>

        {/* MC# */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            MC# 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='text' 
            name='mcNo' 
            required
            id='mcNo' 
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='MC#'
            
            value={carrierData.mcNo} 
            onChange={(e) => setCarrierData(prev => ({...prev, mcNo: e.target.value}))}
          />
        </div>

        {/* USDOT# */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            USDOT# 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='text' 
            name='usdot' 
            id='usdot' 
            required
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='USDOT#'
            
            value={carrierData.usdot} 
            onChange={(e) => setCarrierData(prev => ({...prev, usdot: e.target.value}))}
          />
        </div>

        {/* FEIN/SSN */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            FEIN / SSN 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <input 
            type='text' 
            name='fein_ssn' 
            id='fein_ssn' 
            required
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
            placeholder='FEIN / SSN'
            
            value={carrierData.fein_ssn} 
            onChange={(e) => setCarrierData(prev => ({...prev, fein_ssn: e.target.value}))}
          />
        </div>
        <div />

        {/* Truck Types */}
        <div className="flex flex-col gap-2 col-span-full">
          <label className="font-semibold tracking-wide relative w-fit">
            Types Of Trucks You Have 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
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
            className="mt-2 text-neutral-900 underline underline-offset-4 decoration-2 decoration-red-600 hover:text-red-600 transition-colors w-fit"
          >
            + Add Another Truck
          </button>
        </div>

        {/* Driver Details */}
        <div className="flex flex-col gap-2 col-span-full">
          <label className="font-semibold tracking-wide relative w-fit">
            Driver's Details 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>

          <div className="flex flex-col gap-5">
            {carrierData.numberOfDrivers.map((driver, index) => (
              <DriverDetails
                key={index}
                index={index}
                driver={driver}
                updateDriver={updateDriver}
                removeDriver={removeDriver}
                count={carrierData.numberOfDrivers.length}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addDriver}
            className="mt-2 text-neutral-900 underline underline-offset-4 decoration-2 decoration-red-600 hover:text-red-600 transition-colors w-fit"
          >
            + Add Another Driver
          </button>
        </div>

        {/* Invoice Factorization */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold tracking-wide relative w-fit'>
            Do you factor your invoices? 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
            <div className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='invoicesFactorization' 
                id='invoicesFactorization-yes'
                value='yes'
                required
                checked={carrierData.invoicesFactorization === 'yes'}
                onChange={(e) => setCarrierData(prev => ({...prev, invoicesFactorization: e.target.value}))}
                className='w-4 h-4 text-red-600 cursor-pointer'
                
              />
              <label htmlFor='invoicesFactorization-yes' className='cursor-pointer select-none'>
                Yes
              </label>
            </div>
            
            <div className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='invoicesFactorization' 
                id='invoicesFactorization-no'
                value='no'
                required
                checked={carrierData.invoicesFactorization === 'no'}
                onChange={(e) => setCarrierData(prev => ({...prev, invoicesFactorization: e.target.value}))}
                className='w-4 h-4 text-red-600 cursor-pointer'
              />
              <label htmlFor='invoicesFactorization-no' className='cursor-pointer select-none'>
                No
              </label>
            </div>
          </div>
        </div>

        {/* Preferred States */}
        <div className='flex flex-col gap-2 col-span-full'>
          <label className='font-semibold tracking-wide'>States you prefer to drive</label>
          <textarea 
            rows={4} 
            name='preferredStates' 
            id='preferredStates' 
            className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md'
            placeholder='e.g., California, Texas, Florida...'
            value={carrierData.preferredStates} 
            onChange={(e) => setCarrierData(prev => ({...prev, preferredStates: e.target.value}))}
          />
        </div>

        {/* File Uploads */}
        <div className='flex flex-col gap-3 col-span-full'>
          <label className='font-semibold tracking-wide relative w-fit'>
            Upload  Documents 
            <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
          </label>
          <p className='text-sm text-gray-600'>MC Letter, NOA, W9 Form, Certificate Of Liability Insurance, Driver's License</p>
          
          <div className='flex lg:grid flex-col lg:grid-cols-4 gap-5'>
            {/* MC Form */}
            <label 
              className={`cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.mcImg ? 'border-green-500 bg-green-50 text-green-700' : 'border-neutral-400'
              }`} 
              htmlFor='mcImg'
            >
              <input 
                type='file' 
                name='mcImg' 
                required
                id='mcImg' 
                onChange={(e) => handleFileEntry(e, 'mcImg')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />
              <span className='cursor-pointer font-bold tracking-wide break-all px-2'>
                {carrierData.mcImg ? carrierData.mcImg.name : 'MC Form'}
              </span>
              {!carrierData.mcImg && <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>}
            </label>

            {/* NOA Form */}
            <label 
              className={`cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.noaImg ? 'border-green-500 bg-green-50 text-green-700' : 'border-neutral-400'
              }`} 
              htmlFor='noaImg'
            >
              <input 
                type='file' 
                name='noaImg' 
                required
                id='noaImg' 
                onChange={(e) => handleFileEntry(e, 'noaImg')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />
              <span className='cursor-pointer font-bold tracking-wide break-all px-2'>
                {carrierData.noaImg ? carrierData.noaImg.name : 'Notice Of Authority (N.O.A)'}
              </span>
              {!carrierData.noaImg && <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>}
            </label>

            {/* COI Form */}
            <label 
              className={`cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.coiImg ? 'border-green-500 bg-green-50 text-green-700' : 'border-neutral-400'
              }`} 
              htmlFor='coiImg'
            >
              <input 
                type='file' 
                name='coiImg' 
                required
                id='coiImg' 
                onChange={(e) => handleFileEntry(e, 'coiImg')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />
              <span className='cursor-pointer font-bold tracking-wide break-all px-2'>
                {carrierData.coiImg ? carrierData.coiImg.name : 'Certificate Of Liability Insurance (C.O.I)'}
              </span>
              {!carrierData.coiImg && <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>}
            </label>

            {/* W9 Form */}
            <label 
              className={`cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.w9Img ? 'border-green-500 bg-green-50 text-green-700' : 'border-neutral-400'
              }`} 
              htmlFor='w9Img'
            >
              <input 
                type='file' 
                name='w9Img' 
                required
                id='w9Img' 
                onChange={(e) => handleFileEntry(e, 'w9Img')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />
              <span className='cursor-pointer font-bold tracking-wide break-all px-2'>
                {carrierData.w9Img ? carrierData.w9Img.name : 'W9 Form'}
              </span>
              {!carrierData.w9Img && <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>}
            </label>

            {/* Driver's License */}
            <label 
              className={`cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.driverLicense ? 'border-green-500 bg-green-50 text-green-700' : 'border-neutral-400'
              }`} 
              htmlFor='driverLicense'
            >
              <input 
                type='file' 
                name='driverLicense' 
                id='driverLicense' 
                onChange={(e) => handleFileEntry(e, 'driverLicense')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />
              <span className='cursor-pointer font-bold tracking-wide break-all px-2'>
                {carrierData.driverLicense ? carrierData.driverLicense.name : "Driver's License"}
              </span>
              {!carrierData.driverLicense && <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>}
            </label>

            {/* Other Documents */}
            <label 
              className={`col-span-3 cursor-pointer bg-neutral-100 py-3 px-3 border-2 border-dashed rounded-md min-h-[120px] flex flex-col items-center justify-center text-center text-sm transition-all hover:bg-neutral-200 ${
                carrierData.others && carrierData.others.length > 0 ? 'border-green-500 bg-green-50' : 'border-neutral-400'
              }`} 
              htmlFor='others'
            >
              <input 
                type='file' 
                name='others' 
                id='others' 
                multiple
                onChange={(e) => handleFileEntry(e, 'others')} 
                className='hidden' 
                accept='image/png, image/jpeg, image/jpg, application/pdf'
              />

              {carrierData.others && carrierData.others.length > 0 ? (
                <div className="w-full">
                  <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 w-full text-xs mb-2">
                    {carrierData.others.map((file, index) => (
                      <div
                        key={index}
                        className="p-2 border rounded bg-white shadow-sm flex items-center justify-between gap-1"
                        title={file.name}
                      >
                        <span className='truncate text-green-700 font-medium'>{file.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            removeOtherFile(index);
                          }}
                          className="flex-shrink-0"
                        >
                          <X className='h-4 w-4 text-red-600 hover:text-red-800 cursor-pointer' />
                        </button>
                      </div>
                    ))}
                  </div>
                  <span className='text-red-600 font-semibold underline cursor-pointer'>
                    + Add More Files
                  </span>
                </div>
              ) : (
                <>
                  <span className='cursor-pointer font-bold tracking-wide'>Any Other Documents</span>
                  <span className='text-xs text-gray-500 mt-1'>(.pdf, .png, .jpg, .jpeg)</span>
                  <span className='text-xs text-gray-400 mt-1'>Optional - Multiple files allowed</span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className='col-span-full flex items-center justify-center mt-6'>
          <button 
            type='submit'
            className='text-neutral-100 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl'
          >
            Submit Carrier Setup
          </button>
        </div>
          </>
        )}
        {
          submission ? <div className='fixed top-0 left-0 w-full h-full bg-neutral-800/60 flex flex-col items-center justify-center'>
            <ClipLoader size={60} color='white' speedMultiplier={0.75}  cssOverride={{borderWidth: '5px',}}/>
            <h3 className='text-white tracking-wider text-lg font-bold mt-3'>Submitting...</h3>
          </div> : null
        }
        {
          submissionStatus === 'error' ? <div className='fixed top-0 left-0 w-full h-full bg-neutral-800/60 flex flex-col items-center justify-center'>
            <ClipLoader size={60} color='white' speedMultiplier={0.75}  cssOverride={{borderWidth: '5px',}}/>
            <h3 className='text-white tracking-wider text-lg font-bold mt-3'>Something went wrong...</h3>
          </div> : null
        }
      </form>
    </div>
  );
};

export default CarriersSetup;