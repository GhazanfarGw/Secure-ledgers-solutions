import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='protecting duration-500 overflow-hidden mx-auto items-center border-b border-opacity-30 md:min-h-screen'>
            <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 mx-auto max-w-screen-2xl w-full md:px-10 px-5'>
                <div className='py-32'>
                    <div className='md:top-1/4 md:px-10 px-5 md:absolute pt-5 md:pt-0 max-w-screen-xl mx-auto'>
                        <div className='second text-left'>
                            <p>
                                Secure Ledgers Solutions Send
                            </p>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#1A2B6B] font-medium'>
                               Low Cost Crypto <br className='hidden md:block lg:block'/> Payroll Solution
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] text-left leading-normal'> 
                                Modernize your business and attract top talent by paying your employees in crypto. Enjoy all of the perks of blockchain payments without having to buy and hold crypto. No technical knowledge or wallet addresses.
                            </p>
                            <div className="fourth md:mt-10 w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#0847F7] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                                <a 
                                    href="/contact-us">
                                    Contact Us
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-screen-sm mx-auto pt-48 hidden lg:block md:block'>
                    <img src="./46r65jyb5zTP8Q6x4RZJaqoVEc.svg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
