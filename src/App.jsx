import { Routes, Route} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Search from "./pages/Search";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/footer/Footer";
import backgroundImage from "./assets/images/background-image.png"
import Location from "./pages/Location";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";



function App() {
  return (
    <div className=""
      
      >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search" element={<Search />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
