import "./App.css";
import Banner from "./components/banner/Banner";
import GetStarted from "./components/getStarted/GetStarted";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Rating from "./components/rating/Rating";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Rating />
      <GetStarted />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
