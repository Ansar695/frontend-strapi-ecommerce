import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Products from "./pages/products";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/products/:slug" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
