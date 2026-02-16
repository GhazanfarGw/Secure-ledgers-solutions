import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='duration-500 overflow-hidden mx-auto items-center md:h-[45rem] border-b border-opacity-30'>
            <div className='mx-auto max-w-screen-2xl w-full md:px-10 px-5'>
                <div className='mx-auto justify-center md:py-52 py-32'>
                    <div className='pt-5 md:pt-0 max-w-screen-xl mx-auto'>
                        <div className='second text-left'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center text-center justify-center mx-auto duration-300 text-[#1A2B6B] font-medium'>
                                Accept cryptocurrency payments at your <br className='hidden md:block lg:block'/> brick-and-mortar store
                            </h1>
                        </div>
                        <div className='third md:pt-10 pt-5 text-base tracking-wider duration-500 max-w-screen-lg mx-auto justify-center'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] text-center leading-normal '> 
                               Become the favorite shopping destination for cryptocurrency adopters.  Secure Ledgers Solutions helps your retail business accept Bitcoin and Bitcoin Cash payments from setup to settlement.
                            </p>
                            <div className="fourth md:mt-10 mx-auto w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#0847F7] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                                <a className="text-center mx-auto justify-center" 
                                    href="/contact-us">
                                    Get Started
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

