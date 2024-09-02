import Footer from "../../components/footer/Footer";
import Shippings from "../../components/home/Shippings";
import Joinus from "../../components/join-us/Joinus";
import Hero from "./Hero";
import LatestProducts from "./LatestProducts";
import NewArivals from "./NewArivals";
import Products from "./Products";
import TopCategories from "./TopCategories";
import TopProductBanner from "./TopProductBanner";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="container">
        <TopCategories />
      </div>
      <LatestProducts />
      <Products />
      <NewArivals />
      <TopProductBanner />
      <Shippings />
      <Joinus />

      <Footer />
    </div>
  );
};

export default Home;
