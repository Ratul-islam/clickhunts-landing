import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";
import Affliate from "./pages/Affliate";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/">
    {/* The NavBar is now part of the layout for all pages */}
    <NavBar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/affiliate" element={<Affliate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
