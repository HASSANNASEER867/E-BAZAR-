import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products"
import ProductDetail from "./Pages/ProductDetail";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import AboutUs from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/About" element={< AboutUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;