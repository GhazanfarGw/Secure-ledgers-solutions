import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home/index";
import About from "./Aboutus/Index";
import Service from "./Services/index";
import Consulting from "./Cryptocul/Index"
import Contact from "./Home/Contact";
import Preloader from "./Home/Preload";
import Online from "./Online Payment/Index"
import Billing from "./Billing/Index"
import Retails from "./Retails/Index"
import Payroll from "./payroll/Index"
import Liquidity from "./Liquidity Management/Index"
import Security from "./Security Risk/Index"
import Assets from "./Asset Protection/Index"
import Stuck from "./Funds Stuck/Index"
import Client from "./Client Experience/Index"
import PrivacyPolicy from "./Privacy Poilcy/Privacy";
import Blog from "./Blog/index";
import BlogPage from "./Blog Details/index";
import ScrollToTop from "./Home/ScrollToTop";

function App() {
    const [loading, setLoading] = useState(true);
  const location = useLocation(); // route change detect کرنے کے لیے

  useEffect(() => {
    // جب بھی route change ہو، loading true کریں
    setLoading(true);

    // simulate data fetching or preload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loading duration adjust کریں

    return () => clearTimeout(timer); // cleanup
  }, [location.pathname]); // dependency: ہر بار route change پر trigger


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/blog" element={ <Blog/> } />
          <Route path="/:slug" element={<BlogPage />} />
          <Route path="/services" element={ <Service/> } />
          <Route path="/contact-us" element={ <Contact/> } />
          <Route path="/online-consulting" element={ <Consulting/> } />
          <Route path="/online-payments" element={ <Online/> } />
          <Route path="/billing" element={ <Billing/> } />
          <Route path="/retail" element={ <Retails/> } />
          <Route path="/payroll" element={ <Payroll/> } />
          <Route path="/liquidity-management" element={ <Liquidity/> } />
          <Route path="/security-risk" element={ <Security/> } />
          <Route path="/asset-protection" element={ <Assets/> } />
          <Route path="/funds-stuck" element={ <Stuck/> } />
          <Route path="/client-experience" element={ <Client/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
        </Routes>
        </>
      )}
    </>

  )
}

export default App
