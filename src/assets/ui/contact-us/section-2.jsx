import { useState } from "react";
import { Send, Truck, MapPin, Phone, Mail, User, Building } from "lucide-react";
import { H2 } from "../components/heading-1";
import { P1 } from "../components/descriptions";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        companyEmail: '',
        contactNumber: '',
        companyAddress: '',
        truckTypes: [],
        additionalInfo: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const truckTypes = [
        'Reefer',
        'Dry Van',
        'Flatbed',
        'Step Deck',
        'Low Boy',
        'Hotshot',
        'Box Truck',
        'Tanker'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTruckTypeChange = (truckType) => {
        setFormData(prev => ({
            ...prev,
            truckTypes: prev.truckTypes.includes(truckType)
                ? prev.truckTypes.filter(type => type !== truckType)
                : [...prev.truckTypes, truckType]
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                companyName: '',
                companyEmail: '',
                contactNumber: '',
                companyAddress: '',
                truckTypes: [],
                additionalInfo: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        return formData.fullName && 
               formData.companyName && 
               formData.companyEmail && 
               formData.contactNumber && 
               formData.companyAddress && 
               formData.truckTypes.length > 0;
    };

    return(
        <div className="w-full mt-24 ">
            {/* Form Section */}
            <div 
                className="container relative">
                <div className="bg-neutral-100 border-2 border-neutral-200 text-center rounded-xl p-6 lg:p-8 shadow-xl">
                    <H2 extraCss={'underline underline-offset-4 decoration-3 decoration-red-600 text-gray-800 mb-2'}>
                        Get Connected With ODS
                    </H2>
                    <P1 extraClass="tracking-wide text-gray-700 mb-6">
                        Fill out the form below and start benefiting from the 
                        <span className="font-extrabold capitalize tracking-wider text-red-600 ml-1">
                            ODS Dispatch Team
                        </span>.
                    </P1>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                            <strong>Success!</strong> Your form has been submitted. We'll contact you soon!
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            <strong>Error!</strong> Something went wrong. Please try again.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Full Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <User className="h-4 w-4" />
                                Full Name *
                            </label>
                            <input 
                                name="fullName" 
                                type="text" 
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name..." 
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        {/* Company Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                Company Name *
                            </label>
                            <input 
                                name="companyName" 
                                type="text" 
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Enter your company name..." 
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        {/* Company Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                Company Email *
                            </label>
                            <input 
                                name="companyEmail" 
                                type="email" 
                                value={formData.companyEmail}
                                onChange={handleInputChange}
                                placeholder="Enter your company email..." 
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                Contact Number *
                            </label>
                            <input 
                                name="contactNumber" 
                                type="tel" 
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number..." 
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        {/* Company Address */}
                        <div className="flex flex-col gap-1 col-span-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                Company Address *
                            </label>
                            <input 
                                name="companyAddress" 
                                type="text" 
                                value={formData.companyAddress}
                                onChange={handleInputChange}
                                placeholder="Enter your complete address..." 
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
                            />
                        </div>

                        {/* Truck Types */}
                        <div className="flex flex-col gap-3 col-span-full">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                <Truck className="h-4 w-4" />
                                Type Of Truck(s) * <span className="text-xs font-normal ml-2">({formData.truckTypes.length} selected)</span>
                                {formData.truckTypes.length === 0 && (
                                    <span className="text-xs text-red-500">Please select at least one truck type</span>
                                )}
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-8 gap-3">
                                {truckTypes.map((truckType) => (
                                    <div key={truckType} className="flex items-center gap-2">
                                        <input 
                                            type="checkbox" 
                                            checked={formData.truckTypes.includes(truckType)}
                                            onChange={() => handleTruckTypeChange(truckType)}
                                            className="w-4 h-4 text-red-600 bg-white border-2 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                                        />
                                        <label 
                                            onClick={() => handleTruckTypeChange(truckType)}
                                            className="text-sm text-gray-700 cursor-pointer hover:text-red-600 transition-colors select-none"
                                        >
                                            {truckType}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                        {/* Additional Information */}
                        <div className="flex flex-col gap-1 col-span-full text-start">
                            <label className="text-sm font-bold text-gray-700">
                                Additional Information
                            </label>
                            <textarea 
                                name="additionalInfo" 
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                                placeholder="Tell us more about your business needs, fleet size, typical routes, etc..." 
                                rows="4"
                                className="bg-white shadow-md border-2 border-gray-300 focus:border-red-500 rounded-lg py-2 px-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200 resize-vertical"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full flex justify-center items-center">
                            <button 
                                onClick={handleSubmit}
                                disabled={isSubmitting || !isFormValid()}
                                className="w-fit bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        Get Started With ODS
                                    </>
                                )}
                            </button>
                            
                            {!isFormValid() && !isSubmitting && (
                                <p className="absolute left-0 bottom-2 right-0 text-xs text-gray-500 mt-2 text-center">
                                    Please fill all required fields to continue
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}