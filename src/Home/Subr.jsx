import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Discover = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div className='items-center overflow-hidden mx-auto bg-[#F0F5FF]'>
                <div className='md:px-10 px-5 justify-center text-center md:py-32 py-5'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto overflow-hidden text-[#1A2B6B] justify-center text-center'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B] justify-center text-center'>
                            Ready to grow with us?
                        </h1>
                        <p className="md:text-base text-sm text-[#6D7380] pt-3">
                            Schedule a Free, Personalized digital asset consultancy and strategy now.
                        </p>
                        <div className="fourth mx-auto md:mt-10 w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#0847F7] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                            <a 
                                href="/contact-us">
                                Get Your Free Audit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;