import Footer from "../../components/footer/Footer";
import Joinus from "../../components/join-us/Joinus";

import aboutImg from "../../assets/images/about5.jpg";

const AboutUs = () => {
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
        <h1 className="text-[55px] text-[white]">About Us</h1>
      </div>

      <Joinus />
      <Footer />
    </div>
  );
};

export default AboutUs;
