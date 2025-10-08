import ContactPageHead from "../assets/ui/contact-us/section-1"
import Seo from '../assets/ui/components/Seo'
import ContactForm from "../assets/ui/contact-us/section-2"
import ContactDetails from "../assets/ui/contact-us/section-3"

const ContactUs = () => {
  return (
    <div>
      <Seo
        title={'Contact ODS Dispatch | Get a Quote or Ask a Question'}
        description={'Contact ODS Dispatch for dispatching, brokerage, or carrier support. Request a quote or schedule a consultation today.'}
        path={'/to-contact-ods-dispatch'}
        image={'/images/contact-us/1.png'}
      />
      <ContactPageHead />
      <ContactForm />
      <ContactDetails />
    </div>
  )
}

export default ContactUs