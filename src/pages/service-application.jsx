import { useState } from 'react';
import Seo from '../assets/ui/components/Seo'
import { H1, H2, H3 } from '../assets/ui/components/heading-1';
import {  Asterisk } from 'lucide-react';
import { submitApplicationData } from '../assets/api/backend-api';
import ClipLoader from 'react-spinners/ClipLoader';


// Main Component
const ServiceApplication = () => {
      const [submission, setSubmission] = useState(false)
      const [submissionStatus, setSubmissionStatus] = useState(null)
      const [applicationData, setApplicationData] = useState({
            applicantName: '',
            companyName: '',
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
            service: '',
            message:''
      });

      // Address handler
      const handleAddressChange = (field, value) => {
      setApplicationData(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value }
      }));
      };


      // Form submission
      const handleSubmission = async (e) => {
      e.preventDefault();
      setSubmission(true)

      const formData = new FormData();

      try {
            const res = await fetch(`${import.meta.env.VITE_UPLOAD_IMAGE_SERVER}`, {
            method: "POST",
            body: formData
            });

            const data = await res.json();

            // Build complete payload with form fields + uploaded file references
            const payload = {
                  applicantName: applicationData.applicantName,
                  companyName: applicationData.companyName,
                  address: applicationData.address,
                  phone: applicationData.phone,
                  email: applicationData.email,
                  mcNo: applicationData.mcNo,
                  usdot: applicationData.usdot,
                  fein_ssn: applicationData.fein_ssn,
                  service: applicationData.service, 
                  message: applicationData.message,
            };

            const response = await submitApplicationData(payload);
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
      <div className='container min-h-120 py-10 lg:py-20 flex flex-col gap-5'>
            <Seo
            title={'Service Application Form | ODS Dispatch'}
            description={'Complete the carrier setup form to get onboarded with ODS Dispatch. Share company details, documents, and preferences to start dispatching.'}
            path={'/carriers-setup'}
            image={'/images/services/dispatch/2.png'}
            />
            <H1 extraCss={'tracking-wider underline underline-offset-5 decoration-3 decoration-red-700'}>
            To Get Served By ODS
            </H1>
            <H3 extraCss={'tracking-wide'}>
            Share your details with us by filling out the application form below. Once submitted, our team will review your information and get back to you promptly to discuss the next steps.
            </H3>

            <form className='relative flex flex-col lg:grid lg:grid-cols-2  gap-x-8 gap-y-4' onSubmit={handleSubmission}>
            {/* Company Name */}
            {submissionStatus === 'success' && (
            <div className='bg-green-100 col-span-full text-green-700 p-4 rounded-md shadow-sm text-center shadow-green-300 border border-green-400'>
                  <H2 extraCss={'tracking-wider underline underline-offset-5 decoration-3 decoration-green-700'}>
                  Thank You For Applying For Services By ODS Dispatch!
                  </H2>
            </div>
            )}
            {submissionStatus === null && (
            <>
                  <div className='flex flex-col gap-2'>
                        <label className='font-semibold tracking-wide relative w-fit'>
                              Applicant Name 
                              <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
                        </label>
                        <input 
                              type='text' 
                              name='applicantName' 
                              id='applicantName' 
                              required
                              className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
                              placeholder='Applicant name...' 
                              
                              value={applicationData.applicantName} 
                              onChange={(e) => setApplicationData(prev => ({...prev, applicantName: e.target.value}))}
                        />
                  </div>
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
                              
                              value={applicationData.companyName} 
                              onChange={(e) => setApplicationData(prev => ({...prev, companyName: e.target.value}))}
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
                  value={applicationData.address.streetAddress} 
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
                  value={applicationData.address.addressLine2} 
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
                  value={applicationData.address.city} 
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
                  value={applicationData.address.state} 
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
                  value={applicationData.address.zipCode} 
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
                  
                  value={applicationData.email} 
                  onChange={(e) => setApplicationData(prev => ({...prev, email: e.target.value}))}
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
                  
                  value={applicationData.phone} 
                  onChange={(e) => setApplicationData(prev => ({...prev, phone: e.target.value}))}
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
                  
                  value={applicationData.mcNo} 
                  onChange={(e) => setApplicationData(prev => ({...prev, mcNo: e.target.value}))}
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
                  
                  value={applicationData.usdot} 
                  onChange={(e) => setApplicationData(prev => ({...prev, usdot: e.target.value}))}
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
                        
                        value={applicationData.fein_ssn} 
                        onChange={(e) => setApplicationData(prev => ({...prev, fein_ssn: e.target.value}))}
                  />
                  </div>
                  <div className='flex flex-col gap-2'>
                        <label className='font-semibold tracking-wide relative w-fit'>
                              Service Applying For 
                              <Asterisk className='w-3 h-auto text-red-700 absolute top-0 -right-3' />
                        </label>
                        <div className='flex flex-col lg:flex-row gap-5 justify-center py-2'>
                              <label className='flex items-center gap-2 cursor-pointer'>
                                    <input 
                                          type='radio' 
                                          name='service' 
                                          id='service-ssm' 
                                          required
                                          className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
                                          value="Social Media Marketing"
                                          checked={applicationData.service === "Social Media Marketing"}
                                          onChange={(e) =>
                                                setApplicationData((prev) => ({ ...prev, service: e.target.value }))
                                          }      
                                    /> Social Media Marketing
                              </label>
                              <label className='flex items-center gap-2 cursor-pointer'>
                                    <input 
                                          type='radio' 
                                          name='service' 
                                          id='service-bwd' 
                                          required
                                          className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
                                          value={'Business Web Development'}
                                          checked={applicationData.service === "Business Web Development"} 
                                          onChange={(e) => setApplicationData(prev => ({...prev, service: e.target.value}))}
                                    /> Business Web Development
                              </label>
                              <label className='flex items-center gap-2 cursor-pointer'>
                                    <input 
                                          type='radio' 
                                          name='service' 
                                          id='service-dispatch' 
                                          required
                                          className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md' 
                                          checked={applicationData.service === "Dispatch Service"}
                                          value={'Dispatch Service'} 
                                          onChange={(e) => setApplicationData(prev => ({...prev, service: e.target.value}))}
                                    /> Dispatch Service
                              </label>
                        </div>
                  </div>
                  <div className='flex flex-col col-span-full gap-2'>
                        <label className='font-semibold tracking-wide relative w-fit capitalize'>
                              Any message for us?
                        </label>
                        <textarea name='message' value={applicationData.message} onChange={(e) => setApplicationData(prev => ({...prev, message: e.target.value}))} className='bg-neutral-100 py-2 px-3 border border-neutral-400 rounded-md col-span-full'  rows={3} placeholder='Message...'/>
                  </div>
                  {/* Submit Button */}
                  <div className='col-span-full flex items-center justify-center mt-6'>
                  <button 
                        type='submit'
                        className='text-neutral-100 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 font-bold text-lg shadow-lg hover:shadow-xl'
                  >
                        Submit Application
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

export default ServiceApplication;