import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";
import Affliate from "./pages/Affliate";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Advisers from "./pages/advisers";
import OfferHome from "./offerHome";
import OfferDetails from "./pages/offerDetails";
import About from "./pages/About";
import Terms from "./pages/terms";

function App() {
  return (
    <BrowserRouter basename="/">
    <NavBar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/affiliate" element={<Affliate />} />
      <Route path="/advertisers" element={<Advisers />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/affiliater-terms-and-conditions" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/offer/' element={<OfferHome />}/>
      <Route path='/:id/:offerId' element={<OfferDetails />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
