import axios from "axios";
const SERVER = import.meta.env.VITE_SERVER
// alert(`${SERVER}/new-contact-form`)
export const sendFormData = async(
    fullName,
    companyName,
    companyEmail,
    contactNumber,
    companyAddress,
    truckTypes,
    additionalInfo
) => axios.post(`${SERVER}/new-contact-form`,{fullName,companyName, companyEmail, contactNumber, companyAddress, truckTypes, additionalInfo}).then(response => response.status)