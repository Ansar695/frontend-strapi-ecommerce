/* eslint-disable react-refresh/only-export-components */
export const data = [
  { id: 1, name: "Brand", value: "Dell" },
  { id: 1, name: "RAM", value: "16GB" },
  { id: 1, name: "Processor", value: "Intel Core i5" },
  { id: 1, name: "Generation", value: "7th Generation" },
];

const Description = () => {
  return (
    <div className="w-full pt-4 pb-16">
      <p className="text-[18px] font-[600] text-[var(--black-800)] my-2">
        Description:
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        vero, officiis dolorem consequatur autem rem perspiciatis doloribus
        saepe eaque architecto omnis deserunt similique facere itaque
        repudiandae enim, cupiditate doloremque voluptate? Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Exercitationem vero, officiis
        dolorem consequatur autem rem perspiciatis doloribus saepe eaque
        architecto omnis deserunt similique facere itaque repudiandae enim,
        cupiditate doloremque voluptate?
      </p>

      <p className="text-[18px] font-[600] text-[var(--black-800)] mt-6 mb-4">
        Aditional Information:
      </p>

      <div className="border">
        {data?.map((d) => (
          <div key={d.id} className="border-b flex items-center">
            <div className="py-3 px-2 sm:px-4 w-[50%] sm:w-[20%] min-w-[120px] sm:min-w-[200px] border-r">
              <p className="text-[var(--black-800)]">{d.name}</p>
            </div>
            <div className="py-3 pl-4 w-[80%] min-w-[200px]">
              <p className="text-[var(--black-800)]">{d.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
