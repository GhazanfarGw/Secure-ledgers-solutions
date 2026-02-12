import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Story() {
    useEffect (() => {
    Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto pb-10'>
        <div className='duration-300 md:pb-10 text-black mx-auto md:text-center md:px-10 px-5 max-w-screen-xl'>
            <div className=''>
                <div className='mx-auto pt-5'>
                    <div className="pt-10 justify-between mx-auto">
                        <div className='max-w-screen-'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                                Our Story:
                            </h1>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-left text-[#6D7380] pt-3">
                                Our journey began with one question:
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-left text-[#6D7380] pt-3 font-semibold">
                                Why does blockchain adoption feel so inaccessible to the businesses that need it most?
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 md:text-base leading-normal text-sm text-[#6D7380]'>
                                As we delved deeper into the industry, we found a troubling trend. Companies were either overpromised and underdelivered or stuck implementing rigid, one-size-fits-all solutions that couldn't keep up with their growth or the rapidly changing technological landscape.
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 text-sm text-[#6D7380]'>
                                We launched Secure ledgers solutions to rewrite this narrative. Our mission was clear—build a bridge between blockchain's immense potential and real-world business challenges.
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 text-sm text-[#6D7380]'>
                                Instead of simply selling technology, we listen first. We map out the pain points and then craft tailored solutions that deliver measurable results.
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 text-sm text-[#6D7380]'>
                                Our story is your story: one where we solve problems that truly matter, leaving behind the noise and focusing on results that redefine industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>

  )
}

export default Story 
