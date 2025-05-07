import ContactForm from "@/components/contact/ContactForm";
import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";

const Contact = () => {
  return (
    <>
      <LocationBar link="contact" title="Contact" />
      <ContactForm />
      <SellingPointsModule />
    </>
  );
};

export default Contact;
