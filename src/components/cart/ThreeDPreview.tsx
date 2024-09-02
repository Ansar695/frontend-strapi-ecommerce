import { IoMdClose } from "react-icons/io";

interface ThreeDModalProps {
  open: boolean;
  handleOpen: () => void;
  activeImg: string;
}

const ThreeDPreview = (props: ThreeDModalProps) => {
  const { open, handleOpen, activeImg } = props;
  return (
    <div
      className={`fixed z-50 flex items-center justify-center ${
        open
          ? "top-0 left-0 right-0 bottom-0"
          : "top-[50%] left-[50%] right-[50%] bottom-[50%]"
      } overflow-hidden`}
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className={`${
          open ? "w-auto h-auto max-w-full max-h-screen" : "w-0 h-0"
        } transition-all-150 overflow-hidden bg-transparent rounded-md relative`}
      >
        {open && (
          <div className="fixed right-3 sm:right-6 top-3 sm:top-6 w-12 h-12 rounded-sm p-1 group hover:bg-white flex items-center justify-center transition-all-150">
            <IoMdClose
              className="w-10 h-10 text-white group-hover:text-black cursor-pointer"
              onClick={handleOpen}
            />
          </div>
        )}
        <img src={activeImg} className="w-full h-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default ThreeDPreview;
