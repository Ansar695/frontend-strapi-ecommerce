import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface ArrowsProps {
  onClick?: () => void;
}

export const PrevArrow = (props: ArrowsProps) => (
  <div
    className="absolute top-[-75px] hover:bg-[var(--black-600)] group cursor-pointer transition-all-150 hidden sm:flex items-center justify-center z-30 prev-arrow border border-[var(--grey-200)] rounded-[4px] w-[32px] h-[32px]"
    onClick={props.onClick}
    style={{ left: `calc(100% - 90px)` }}
  >
    <FaAngleLeft
      className="text-[var(--black-600)] group-hover:text-white"
      fontSize="14px"
    />
  </div>
);

export const NextArrow = (props: ArrowsProps) => (
  <div
    className="absolute top-[-75px] hover:bg-[var(--black-600)] group cursor-pointer transition-all-150 hidden sm:flex items-center justify-center z-30 right-[14px] next-arrow border border-[var(--grey-200)] rounded-[4px] w-[32px] h-[32px]"
    onClick={props.onClick}
  >
    <FaAngleRight
      className="text-[var(--black-600)] group-hover:text-white"
      fontSize="14px"
    />
  </div>
);
