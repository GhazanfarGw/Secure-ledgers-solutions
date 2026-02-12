import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

// BlockSPCComparison.jsx
// Single-file React component using Tailwind CSS
// Responsive: table on md+ screens, stacked cards on small screens

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
  
  const [query, setQuery] = React.useState("");

  const filtered = ROWS.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.typical.toLowerCase().includes(query.toLowerCase())
  );


      useEffect (() => {
      Aos.init ();
      }, [])

  return (
    <div className="my-10">
      <section className="md:px-10 px-5 max-w-screen-xl mx-auto justify-center">
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-2xl shadow-md ring-1 ring-slate-200 border-[#136690] border border-opacity-30">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6">
            <div>
              <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                Why Secure ledgers solutions is different?
              </h1>
              <p className="text-sm mt-3 text-slate-600"> <span className="text-sm font-semibold text-slate-900">Secure ledgers solutions</span> Vs Crypto Exchanges</p>
            </div>
          </header>

          {/* Desktop table */}
          <div className="hidden md:block p-6">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="w-1/2 text-left p-4 text-sm md:text-base font-semibold text-[#1A2B6B]">Secure Ledgers Solutions Advantage</th>
                    <th className="w-1/2 text-left text-sm md:text-base font-semibold text-[#1A2B6B]">Crypto Exchanges / Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, idx) => (
                    <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 align-top border-t border-slate-100 max-w-screen-md">
                        <div className="text-sm text-[#4f5155] font-medium hover:font-bold hover:text-base cursor-pointer duration-300 hover:shadow-lg hover:p-4">{row.title}</div>
                      </td>
                      <td className="text-sm text-[#4f5155] font-medium hover:font-bold hover:text-base cursor-pointer duration-300 hover:shadow-lg hover:p-4">{row.typical}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={2} className="p-8 text-center text-sm text-slate-500">No results match your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden p-4 space-y-4">
            {filtered.map((row) => (
              <article key={row.id} className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1A2B6B] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{row.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{row.typical}</p>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="p-6 text-center text-sm text-slate-500">No results match your search.</div>
            )}
          </div>
        </div>
      </section>

    </div>
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



