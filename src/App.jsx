import "./App.css";
import Banner from "./components/banner/Banner";
import GetStarted from "./components/getStarted/GetStarted";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Rating from "./components/rating/Rating";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Rating />
      <GetStarted />
      <Pricing />
    </>
  );
}

export default App;
