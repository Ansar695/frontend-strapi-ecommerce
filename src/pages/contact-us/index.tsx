import Footer from "../../components/footer/Footer";
import Joinus from "../../components/join-us/Joinus";

import aboutImg from "../../assets/images/about5.jpg";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <div
        className="w-full h-[550px] flex items-center justify-center relative"
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url(${aboutImg}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[55px] text-[white]">Contact Us</h1>
      </div>

      <ContactInfo />
      <Joinus />
      <Footer />
    </div>
  );
};

export default ContactUs;
