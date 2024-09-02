import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="brand w-[180px] h-[80px] cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={logo} className="w-full h-full object-contain" alt="logo" />
    </div>
  );
};

export default Logo;
