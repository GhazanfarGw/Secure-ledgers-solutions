// import React from 'react';

// const Service = () => {
//     return (
//         <div id='about' className='md:px-10 px-2 max-w-screen-xl justify-center mx-auto items-center'>
//             <div className='text-white mx-auto md:pt-72 md:pb-32 pt-10 justify-center items-center'>
//                 <div className='text-left'>
//                     <div className='border-b border-opacity-30 border-[#fff] pb-10'>
//                         <p className='text-[#A0B3F2] uppercase'>
//                             Our Services
//                         </p>
//                         <h1 className='text-white lg:text-4xl text-3xl md:pt-5 pt-3 font-bold'>
//                             Digital asset consulting
//                         </h1>
//                         <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
//                             Navigating the evolving landscape of blockchain and AI with booming crypto industry comes amidst complex cybersecurity challenges can be daunting. At Block Sphere, our expert consultants provide tailored guidance to help you overcome these hurdles.
//                         </p>
//                         <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
//                             We deliver professional advice to individuals and businesses, empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
//                         </p>
//                         <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
//                             With a focus on innovation and trust, we ensure your digital journey is secure, efficient, and future-ready.
//                         </p>
//                     </div>
//                     <br />
//                     <br />
        //             <h1 className='text-white lg:text-4xl text-3xl md:pt-5 font-bold'>
        //                 Cryptocurrency liquidation
        //             </h1>
        //             <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
        //                 When it’s time to convert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process. <br />
        //                 At Block Sphere, we specialize in cryptocurrency liquidation, helping you seamlessly transform your digital assets into real-world value. <br />
        //                 Whether you’re dealing with Bitcoin, Ethereum, or other major cryptocurrencies, our expert team guarantees optimal market rates and complete transparency every step of the way.
        //             </p>
        //             <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
        //                 We deliver professional advice to individuals and businesses, empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
        //             </p>
        //             <p className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
        //                 With a focus on innovation and trust, we ensure your digital journey is secure, efficient, and future-ready.
        //             </p>
        //             <div className=''>
        //                 <div className='md:grid md:grid-cols-3 py-10 gap-5'>
        //                     <div className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
        //                         <div className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
        //                             <img className='py-4 px-3' src="63f647903560921f34f49ea9_icon_monetization-idea.svg" alt="" />
        //                         </div>
        //                         <h1 className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
        //                             Fast and Secure Liquidation: 
        //                         </h1>
        //                         <p className='md:pt-5 pt-3 text-[#aaafbb] text-sm leading-normal'>
        //                             We ensure a quick and hassle-free conversion of your digital assets.
        //                         </p>
        //                     </div>
        //                     <div className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
        //                         <div className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
        //                             <img className='py-4 px-3' src="6320cec56a9b7a659558366b_economic-growth-nature.svg" alt="" />
        //                         </div>
        //                         <h1 className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
        //                             Best Market Rates: 
        //                         </h1>
        //                         <p className='md:pt-5 pt-3 text-[#aaafbb] text-sm leading-normal'>
        //                             Our experts monitor the market in real-time to secure the most competitive rates for your cryptocurrencies.
        //                         </p>
        //                     </div>
        //                     <div className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
        //                         <div className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
        //                             <img className='py-4 px-3' src="5f96abda0b28bb0d62decff5_cash-payment-bag.svg" alt="" />
        //                         </div>
        //                         <h1 className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
        //                             Simple and Transparent Process
        //                         </h1>
        //                         <p className='md:pt-5 pt-3 text-[#aaafbb] text-sm leading-normal'>
        //                             No hidden fees, no surprises—just a clear, streamlined experience you can trust.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
//     );
// }

// export default Service;


import React, { useState, useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect (() => {
    Aos.init ();
  }, [])
  const [activeTab, setActiveTab] = useState("Digital asset");

  const tabs = [
    {
      title: "Digital asset",
      content: (
        <div className="md:grid md:grid-cols-2 px-5 md:px-10 md:pt-20 pt-10">
            <div className="max-w-md">
              <div className="border block md:hidden lg:hidden">
                <img src="./661e8b131ff1af64b7bda266_Asset Issuers 2.png" alt="" />
              </div>
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#1A2B6B] font-medium lg:text-2xl text-2xl md:pt-5 pt-3'>
                    Digital asset consulting
                  </h1>
                  <ul className="md:pl-5">
                    <li data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                      <strong className="text-[#1A2B6B]">Navigating the evolving landscape</strong> of blockchain and AI with booming crypto industry comes amidst complex cybersecurity challenges can be daunting. At Block Sphere, our expert consultants provide tailored guidance to help you overcome these hurdles.
                    </li>
                    <li data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                      <strong className="text-[#1A2B6B]">We deliver professional advice</strong> to individuals and businesses, empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
                    </li>
                    <li data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                      <strong className="text-[#1A2B6B]">With a focus on innovation and trust,</strong> we ensure your digital journey is secure, efficient, and future-ready.
                    </li>
                  </ul>
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="border hidden md:block lg:block">
              <img src="./661e8b131ff1af64b7bda266_Asset Issuers 2.png" alt="" />
            </div>
        </div>
      ),
    },
    {
      title: "Cryptocurrency liquidation",
      content: (
        <div className="md:grid md:grid-cols-2 px-5 md:px-10 md:pt-20 pt-10">
          <div className="max-w-md">
            <div className="border block md:hidden lg:hidden">
              <img src="./661e8b137ab54626c4a7f77d_Liquidity Providers 1.png" alt="" />
            </div>
            <h1 className='text-[#1A2B6B] font-medium lg:text-2xl text-2xl md:pt-5 pt-3'>
              Cryptocurrency liquidation
            </h1>
            <ul className="md:pl-5">
                <li className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                  <strong className="text-[#1A2B6B]">When it’s time to convert your cryptocurrency into cash,</strong> having a trusted partner is essential to ensure a smooth, secure, and efficient process. <br />
                  At Block Sphere, we specialize in cryptocurrency liquidation, helping you seamlessly transform your digital assets into real-world value. <br />
                  Whether you’re dealing with Bitcoin, Ethereum, or other major cryptocurrencies, our expert team guarantees optimal market rates and complete transparency every step of the way.
                </li>
                <li className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                  <strong className="text-[#1A2B6B]">We deliver professional advice to individuals and businesses,</strong> empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
                </li>
                <li className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal text-sm'>
                  <strong className="text-[#1A2B6B]">With a focus on innovation and trust,</strong> we ensure your digital journey is secure, efficient, and future-ready.
                </li>
            </ul>
          </div>
          <div className="border hidden md:block lg:block">
            <img src="./661e8b137ab54626c4a7f77d_Liquidity Providers 1.png" alt="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="md:px-10 px-5 max-w-screen-xl justify-center mx-auto items-center">
        <div className='text-black mx-auto md:pt-20 md:pb-32 justify-center items-center'>
          <h1 className="lg:text-4xl text-2xl md:pt-5 pt-3 font-medium md:text-center mx-auto text-[#1A2B6B]">Our Services</h1>
          <div className="tabs justify-center mx-auto text-center md:pt-10 pt-5">
            {tabs.map((tab) => (
              <button
                key={tab.title}
                className={`tab-button text-xs leading-normal nd:text-sm ${activeTab === tab.title ? "active" : ""}`}
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {tabs.find((tab) => tab.title === activeTab)?.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;