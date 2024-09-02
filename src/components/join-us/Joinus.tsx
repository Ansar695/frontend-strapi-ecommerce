import Heading24 from "../common/Heading24";

const Joinus = () => {
  return (
    <div className="w-full py-[100px]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="w-full md:w-[40%]">
          <Heading24 title="Join Us & Get Updates" classes="font-[500]" />
          <p className="text-[var(--black-600)] mt-1">
            Sign up for exclusive offers, latest news and updates
          </p>
        </div>
        <div className="w-full md:w-[60%] flex items-center gap-1 md:gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none w-full max-w-[450px] h-[48px] border px-4 border-[var(--black-300)] rounded-[40px]"
          />
          <button className="px-6 md:px-8 rounded-[40px] hover:bg-[var(--blue-800)] h-[48px] bg-[var(--blue-700)] text-[16px]  uppercase outline-none border-none text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
