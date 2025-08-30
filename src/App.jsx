import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Search from "./pages/Search";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search" element={<Search />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
