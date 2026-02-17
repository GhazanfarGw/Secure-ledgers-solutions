import { Routes, Route } from "react-router-dom";
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
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
        </Routes>
      )}
    </>

  )
}

export default App                  
