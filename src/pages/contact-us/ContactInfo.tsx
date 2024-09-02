import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import mapImg from "../../assets/images/location-islamabad.jpg";
import ContactForm from "./ContactForm";
import Heading24 from "../../components/common/Heading24";

const ContactInfo = () => {
  return (
    <div className="container py-16">
      <Heading24 title="Contact Information" />
      <p className="text-[var(--black-60)]">
        Fill the form or contact us directly, We will help you as soon as
        possible.
      </p>
      <div className=" flex md:flex-row flex-col items-start justify-between gap-10 mt-8">
        <div className="w-full md:w-[50%]">
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="w-full sm:w-[50%] aspect-[1.5] bg-[var(--primary)] rounded-sm flex flex-col items-center justify-center p-6">
              <FaPhoneAlt className="text-[var(--blue-700)] text-[30px]" />
              <p className="text-[18px] font-bold text-center">Phone No</p>
              <p className="text-[var(--black-600)] text-center">
                +923089275988
              </p>
            </div>
            <div className="w-full sm:w-[50%] aspect-[1.5] bg-[var(--blue-150)] rounded-sm flex flex-col items-center justify-center p-6">
              <MdEmail className="text-[var(--blue-700)] text-[30px]" />
              <p className="text-[18px] font-bold text-center">Email</p>
              <p className="text-[var(--black-600)] text-center">
                ansarsaeed988@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full p-4 rounded-sm bg-[var(--blue-50)] mt-5">
            <div className="w-full flex flex-col items-center justify-center">
              <FaLocationDot className="text-[var(--blue-700)] text-[30px]" />
              <p className="text-[18px] font-bold text-center">Address</p>
              <p className="text-[var(--black-600)] text-center">
                Islamabad, Pakistan
              </p>
            </div>
            <div className="w-full h-[250px] bg-red-100 mt-4">
              <img
                src={mapImg}
                className="w-full h-full object-cover"
                alt="map-img"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
