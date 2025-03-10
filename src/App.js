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
import Help from "./pages/help";
import Payment from "./pages/payment";
import PaymentEdit from "./pages/payment-edit";
import AdvertiserTerm from "./pages/advertiser-term";
import ScrollToTop from "./components/scrollTop";
import ClickHuntsFooter from "./components/clickhunts-footer";

function App() {
  return (
    <BrowserRouter basename="/">
     <ScrollToTop/> 
    <NavBar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/affiliate" element={<Affliate />} />
      <Route path="/advertisers" element={<Advisers />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/affiliate-terms-and-conditions" element={<Terms />} />
      <Route path="/advertiser-terms" element={<AdvertiserTerm />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/offer/' element={<OfferHome />}/>
      <Route path='/:id/:offerId' element={<OfferDetails />}/>
      <Route path='/help' element={<Help />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/payment-edit' element={<PaymentEdit />}/>
    </Routes>
    <ClickHuntsFooter/>
  </BrowserRouter>
  );
}

export default App;
