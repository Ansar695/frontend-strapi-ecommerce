import img1 from "../../assets/images/online-support.png";

const freeShipments = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img1,
  },
  {
    id: 3,
    img: img1,
  },
];

const Shippings = () => {
  return (
    <div className="w-full py-16 bg-[var(--light)]">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        {freeShipments?.map((shipp) => (
          <div
            key={shipp.id}
            className="h-[344px] flex flex-col items-center justify-center bg-white border border-[var(--black-100)] p-6 hover:border-[var(--blue-700)] hover:border-2 shadow-md hover:shadow-2xl rounded-md cursor-pointer transition-all-150"
          >
            <div className="w-[100px] h-[80px]">
              <img
                src={img1}
                className="w-full h-auto object-contain"
                alt="shipping-icon"
              />
            </div>
            <p className="font-bold text-[var(--black-800)] mt-2 text-center">
              Free Shipping
            </p>
            <p className="text-[var(--black-600)] text-[14px] text-center mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae illo explicabo laboriosam odit natus eaque, commodi
              quaerat maxime rerum doloribus temporibus cum asperiores
              reiciendis repellat nulla quas? Veniam, pariatur magni.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shippings;
