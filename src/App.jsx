import "./App.css";
import Banner from "./components/banner/Banner";
import GetStarted from "./components/getStarted/GetStarted";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Rating from "./components/rating/Rating";
import Footer from "./components/footer/Footer";
import PreDigitalTools from "./components/premiumDigitools/PreDigitalTools";
import Tabs from "./components/tabs/Tabs";
import { useState } from "react";
import ProductCart from "./components/productCart/ProductCart";

const fetchData = async () => {
  const res = await fetch("/tools.json");
  return res.json();
};

const getPromise = fetchData();
function App() {
  const [isActive, setIsActive] = useState("products");
  const [carts, setCarts] = useState([]);
  console.log(carts);
  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <Rating />
      <Tabs isActive={isActive} setIsActive={setIsActive} carts={carts} />
      {isActive === "products" && <PreDigitalTools getPromise={getPromise} carts={carts} setCarts={setCarts} />}
      {isActive === "cart" && <ProductCart carts={carts} setCarts={setCarts} />}
      <GetStarted />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
