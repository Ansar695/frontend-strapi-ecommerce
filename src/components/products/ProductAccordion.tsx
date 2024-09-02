/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  allFilters,
  FilterDataProps,
  SubFiltersProps,
} from "@/utils/static-data/filtersData";

interface AccordionProps {
  selectedFilters: any;
  handleCheckboxChange: (type: string, title: string, checked: boolean) => void;
  filterType: string;
}

const ProductAccordion = (props: AccordionProps) => {
  const { selectedFilters, handleCheckboxChange, filterType } = props;
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [filterList, setFilterList] = useState<FilterDataProps[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prevOpenAccordions) =>
      prevOpenAccordions.includes(id)
        ? prevOpenAccordions.filter((accordionId) => accordionId !== id)
        : [...prevOpenAccordions, id]
    );
  };

  useEffect(() => {
    const findFilter = allFilters?.filter((filt) => {
      if (filt.category.toLowerCase() === filterType?.toLowerCase()) {
        return filt;
      }
    });

    setFilterList(findFilter ?? []);

    // Automatically open the first two accordions if available
    if (findFilter?.length > 0) {
      setOpenAccordions([findFilter[0].id as any, findFilter[1]?.id as any]);
    }
  }, [filterType]);

  return (
    <div className="w-full flex flex-col gap-2">
      {filterList?.length > 0 &&
        filterList?.map((filter) => (
          <div key={filter?.id} className="accordion border-b">
            <div
              className="flex items-center justify-between mb-3 cursor-pointer"
              onClick={() => toggleAccordion(filter.id as any)}
            >
              <p className="font-[600] text-[var(--black-800)] capitalize">
                {filter.title}
              </p>
              <FaAngleDown
                className={`text-[20px] ${
                  openAccordions.includes(filter.id as any)
                    ? "rotate-180"
                    : "rotate-0"
                } text-[var(--black-600)] transition-transform duration-300`}
              />
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openAccordions.includes(filter.id as any)
                  ? "max-h-[1000px]"
                  : "max-h-0"
              }`}
            >
              {filter.filters.map((fil: SubFiltersProps) => (
                <div key={fil.id} className="flex items-center mb-3">
                  <input
                    checked={selectedFilters.some(
                      (f: any) =>
                        f?.type === filter?.title && f?.title === fil?.title
                    )}
                    id={fil.title}
                    type="checkbox"
                    value={fil.title}
                    onChange={(e) =>
                      handleCheckboxChange(
                        filter.title,
                        fil.title,
                        e.target.checked
                      )
                    }
                    className="w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                  />
                  <label className="ms-2 text-[14px] font-[400] text-gray-900 dark:text-gray-300 cursor-pointer">
                    {fil.title} ({fil.total})
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductAccordion;
