const Heading24 = ({ title, classes }: { title: string; classes?: string }) => {
  return (
    <h1 className={`text-[24px] text-[var(--black-800)] font-[600] ${classes}`}>
      {title}
    </h1>
  );
};

export default Heading24;
