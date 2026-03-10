import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ROWS = [
  {
    id: 1,
    title: "Personalized face-to-face service for large clients.",
    typical: "Only online support; no direct relationship.",
  },
  {
    id: 2,
    title: "A–Z client assistance from wallet setup to audit reports.",
    typical: "Limited to trading platform functionality.",
  },
  {
    id: 3,
    title: "Hardware wallet & cold storage management handled by experts.",
    typical: "Clients manage wallets themselves.",
  },
  {
    id: 4,
    title: "Custom liquidity & settlement structure (1–3 days).",
    typical: "Standard market settlement times; no custom flow.",
  },
  {
    id: 5,
    title: "Cybersecurity & training support.",
    typical: "No educational or protection programs.",
  },
  {
    id: 6,
    title: "Lost crypto recovery assistance.",
    typical: "No recovery or rescue services.",
  },
  {
    id: 7,
    title: "Institutional exchange access & rates.",
    typical: "Retail or small business pricing tiers.",
  },
  {
    id: 8,
    title: "Strict risk compliance (no high-risk countries).",
    typical: "Generic AML/KYC checks only.",
  },
  {
    id: 9,
    title: "Minimum $250K+ ticket size = exclusive clientele.",
    typical: "Serve retail traders and small-volume clients.",
  },
];

export default function BlockSPCComparison() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="my-16 px-5 md:px-10 max-w-screen-xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md border border-slate-200">

        {/* Header */}
        <div className="p-6 border-b border-slate-100">
          <h2
            data-aos="zoom-in-up"
            className="text-2xl md:text-4xl font-semibold text-[#1A2B6B]"
          >
            Why Secure ledgers solutions is Different
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Secure ledgers solutions</span> vs
            Crypto Exchanges
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="w-1/2 text-left p-4 text-base font-semibold text-[#1A2B6B]">
                    Secure Ledgers Solutions Advantage
                  </th>
                  <th className="w-1/2 text-left p-4 text-base font-semibold text-[#1A2B6B]">
                    Crypto Exchanges / Providers
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="p-4 border-t border-slate-100 text-sm text-slate-700">
                      {row.title}
                    </td>
                    <td className="p-4 border-t border-slate-100 text-sm text-slate-600">
                      {row.typical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {ROWS.map((row) => (
            <div
              key={row.id}
              className="bg-slate-50 rounded-xl p-4 border border-slate-100"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {row.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {row.typical}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// import React from 'react'

// function BlockSPCComparison() {
//   return (
//     <>
//     <div className='md:bg-[#F0F5FF]'>
//       <div className='max-w-screen-xl mx-auto justify-center md:px-10 px-5 py-5'>
//         <div>
//           <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
//             Why Block SPC is Different
//           </h1>
//         </div>

//         <div className='grid grid-cols-2 mx-auto justify-center p-4'>

//           <div className='border-r border-[#136690] border-opacity-30'>
//             <div>
//               <th className="w-1/2 text-left p-4 text-sm md:text-base font-semibold text-[#1A2B6B]">Block SPC Advantage</th>
//             </div>
//             <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
//                     <div className='flex gap-2 items-center pt-5'>
//                         <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
//                         <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
//                             <h2 className='text-base md:font-medium text-[#1A2B6B]'>
//                                 End-to-End Simplicity:
//                             </h2>
//                         </div>
//                     </div>
//                     <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
//                         We ensure our solutions are intuitive and easy to integrate, with minimal disruption to existing workflows..
//                     </p>
//             </div>
//           </div>

//           <div>
//             <div>
//               <th className="w-1/2 text-left p-4 text-sm md:text-base font-semibold text-[#1A2B6B]">Typical Exchange / Provider (Coinbase, Binance, Gemini, etc.)</th>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default BlockSPCComparison



