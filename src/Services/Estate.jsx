import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Estate() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl py-10 md:py-16'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium mx-auto text-[#1A2B6B]'>
                    Real Estate Transactions via Cryptocurrency
                </h1>
                <p className='third text-[#6D7380] md:text-base text-sm justify-center pt-5 leading-normal max-w-screen-lg'>
                    Unlock new opportunities in real estate by leveraging your cryptocurrency holdings. Block Sphere provides comprehensive services for buying, selling, or investing in properties using digital assets.
                </p>
            </div>
            <div className='md:pt-10 pt-5'>
                <h2 className='mx-auto text-[#1A2B6B] font-semibold text-base'>
                    Why choose us?
                </h2>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                    <div className='flex gap-2 items-center pt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Secure Transactions:
                            </h2>
                        </div>
                    </div>
                    <p className='text-[#6D7380] text-sm leading-normal pl-4 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        Safeguarded by cutting-edge blockchain technology.
                    </p>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                    <div className='flex gap-2 items-center pt-3 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Global Reach:
                            </h2>
                        </div>
                    </div>
                    <p className='text-[#6D7380] text-sm leading-normal pl-4 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        Invest in properties across the world with ease.
                    </p>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                    <div className='flex gap-2 items-center pt-3 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Customized Support:
                            </h2>
                        </div>
                    </div>
                    <p className='text-[#6D7380] text-sm leading-normal pl-4 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        Expert guidance through every step of the process.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F0F5FF] mt-10'>
                <div className='justify-center text-center mx-auto max-w-screen-lg md:py-20 py-10 text-[#6D7380] text-sm leading-normal px-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                    <p>
                        At Block Sphere, we are committed to providing innovative solutions that integrate cryptocurrency seamlessly into your daily life and long-term goals. <br /> 
                        Contact us to explore how we can help transform your digital assets into tangible value.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Estate