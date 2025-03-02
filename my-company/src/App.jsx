import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "../src/components/footer"
function App() {
  return (

  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
  export default App;