import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='client duration-500 overflow-hidden mx-auto items-center border-b border-opacity-30 md:min-h-[720px] bg-black'>
            <div className='mx-auto max-w-screen-2xl w-full md:px-10 px-5'>
                <div className='py-32'>
                    <div className='md:top-1/4 md:px-10 px-5 md:absolute pt-5 md:pt-16 max-w-screen-xl mx-auto'>
                        <div className='second text-left'>
                            <p className="text-black">
                                Secure Ledgers Solutions Customer Support
                            </p>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#000] font-medium'>
                              Client Experience <br className='hidden md:block lg:block'/>
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <div className="fourth md:mt-10 w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#001A62] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                                <a 
                                    href="/contact-us">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard

