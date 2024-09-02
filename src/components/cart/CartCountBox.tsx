interface CartCounterBoxProps {
  value: number | string;
  status: string;
  onClick: (status: string, id: number | string) => void;
  classes?: string;
  id: string | number;
}
const CartCountBox = (props: CartCounterBoxProps) => {
  const { value, status, onClick, classes, id } = props;
  return (
    <div
      className={`border border-[var(--black-300)] cursor-pointer flex items-center justify-center text-[var(--black-600)] ${classes}`}
      onClick={() => onClick(status, id)}
    >
      {value}
    </div>
  );
};

export default CartCountBox;
