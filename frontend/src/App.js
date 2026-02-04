import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
