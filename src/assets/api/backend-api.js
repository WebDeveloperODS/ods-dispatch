import axios from "axios";
const SERVER = import.meta.env.VITE_SERVER
// alert(`${SERVER}/new-contact-form`)
const sendFormData = async(
    fullName,
    companyName,
    companyEmail,
    contactNumber,
    companyAddress,
    truckTypes,
    additionalInfo
) => axios.post(`${SERVER}/new-contact-form`,{fullName,companyName, companyEmail, contactNumber, companyAddress, truckTypes, additionalInfo}).then(response => response.status)


const submitCarrierData = async (carrierData) => {
  try {
    const response = await axios.post(
      `${SERVER}/new-carrier-addition`,
      carrierData, // JSON payload
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Submit carrier data failed:", err);
    throw err;
  }
};


export {sendFormData, submitCarrierData}