import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./appComponents/navbar/navbar";
import Home from "./screens/home/home";
// import Gallery from "./screens/gallery/gallery";
import FooterMain from "./appComponents/footer/footerMain";
import AboutMain from "./screens/about/aboutMain";

const Routing = () => {
  return (
    <>
      <Router basename="/tripura_legends_mma">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/about" element={<AboutMain />} />
        </Routes>
        <FooterMain />
      </Router>
    </>
  );
};

export default Routing;
