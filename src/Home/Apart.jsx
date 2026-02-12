import React,{useEffect, useState} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="justify-between mx-auto max-w-screen-lg duration-300">
      {data.map((item, index) => (
        <div className="border-[#136690] border border-opacity-30 mt-5"
          key={index}
        >
          {/* Text on the right */}
          <div className="duration-300" style={{ width: "100%", padding: "16px" }}>
            <h3 className="justify-between mx-auto flex text-left lg:text-xl text-base font-medium text-[#1A2B6B]"
              onClick={() => handleToggle(index)}
            >
              {item.title}
              <span>{activeIndex === index ? "_" : "+"}</span>
            </h3>
            {activeIndex === index && (
              <p className="text-left md:text-base text-sm text-[#6D7380] pt-3 max-w-screen-sm">{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
    useEffect (() => {
    Aos.init ();
    }, [])
  const accordionData = [
    {
      title: "Results-Driven Mindset",
      content:
        "Our primary focus is delivering measurable results. Every strategy we implement is designed to create tangible value, whether it's safeguarding your assets, optimizing processes, or ensuring compliance.",
    },
    {
      title: "Proven Track Record",
      content:
        "Our team boasts of REAL RESULTS and successful project deliveries, consistently achieving and exceeding client expectations. We measure our success by the tangible results we bring to your organization.",
    },
    {
      title: "Transparency and Trust",
      content:
        "We operate with full transparency, providing you with clear insights into our processes and progress. Trust is the foundation of our relationships, and we prioritize open communication at every step.",
    },
    {
      title: "Deep Expertise and Adaptive Solutions",
      content:
        "With years of experience in blockchain technology and an agile problem-solving mindset, we bring unparalleled results to every project. Our team understands the nuances of the industry, stays ahead of industry trends, and leverages this knowledge to your advantage.",
    },
  ];

  return (
    <div className="md:px-10 px-5 mx-auto justify-center max-w-screen-xl pb-10">
      <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium text-[#1A2B6B]' data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
        What sets us apart?
      </h1>
      <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] justify-center md:text-base text-sm pt-5 leading-normal max-w-screen-md'>
        At Secure ledgers solutions, we distinguish ourselves through our unwavering commitment to excellence, innovative approaches, and client-centric focus. We are not your regular blockchain consulting partner.
      </p>
      <div className="md:grid md:grid-cols-2 items-center">
        <div className="md:pt-20 pt-5">
          <Accordion data={accordionData} />
        </div>
        <div>
          <img src="/Fal.png" alt="" />
        </div>
      </div>
    </div>
  );
}


//     return (
//         <div id="Secure ledgers solutions" className='justify-center mx-auto items-center duration-300'>
//             <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
//                 <div className='justify-center py-5 gap-16 items-center pb-16'>
//                     <div className='mx-auto'>
                        // <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium md:text-center mx-auto text-[#1A2B6B]'>
                        //     What Sets Us Apart?
                        // </h1>
                        // <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] justify-center md:text-base text-sm pt-5 leading-normal max-w-screen-md mx-auto md:text-center'>
                        //     “At Secure ledgers solutions, we distinguish ourselves through our unwavering commitment to excellence, innovative approaches, and client-centric focus. We are not your regular blockchain consulting partner”
                        // </p>
//                         <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
//                             <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
//                                 <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
//                                     <img className='py-4 px-3' src="5f75cc9f74f7124d70ad4f0a_file-code-check.svg" alt="" />
//                                 </div>
//                                 <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
//                                     Paper wallet protection
//                                 </h1>
//                                 <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
//                                     We ensure your paper wallets are stored in a secure, encrypted environment and safeguarded against both physical and digital threats. Our experts provide tailored advice on safe storage practices to minimize risks of loss or theft.
//                                 </p>
//                             </div>
//                             <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
//                                 <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
//                                     <img className='py-4 px-3' src="5f75b5e6e24b376ed9ab5c1e_programming-browser.svg" alt="" />
//                                 </div>
//                                 <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
//                                     Hardware wallet security
//                                 </h1>
//                                 <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
//                                     Our team secures your hardware wallets by configuring them to the highest standards. We protect your private keys from hackers through advanced techniques, whether you are setting up new wallets or enhancing existing ones.
//                                 </p>
//                             </div>
//                             <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
//                                 <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
//                                     <img className='py-4 px-3' src="5f75ce12c98997405a04770f_iris-scan-approved.svg" alt="" />
//                                 </div>
//                                 <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
//                                     Real-time monitoring
//                                 </h1>
//                                 <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
//                                     We offer 24/7 monitoring services to detect and prevent suspicious activity around your digital assets, addressing potential breaches before they happen.
//                                 </p>
//                             </div>
//                             <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
//                                 <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
//                                     <img className='py-4 px-3' src="63fe0ad1c40c90f1702602ee_icon_database-connect.svg" alt="" />
//                                 </div>
//                                 <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
//                                     Cold Storage Solutions
//                                 </h1>
//                                 <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
//                                     For substantial crypto holdings, we implement cold storage solutions to keep your assets offline, rendering them virtually inaccessible to cybercriminals.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Business;