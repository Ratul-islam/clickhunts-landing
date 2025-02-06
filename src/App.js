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
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
