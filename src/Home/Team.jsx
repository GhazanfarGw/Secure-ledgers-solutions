import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Team() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl py-10 md:py-16'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium mx-auto text-[#1A2B6B]'>
                    Meet our expert team
                </h1>
                <p className='third text-[#6D7380] md:text-base text-sm justify-center pt-5 leading-normal max-w-screen-lg'>
                    At Block Sphere, our team is the backbone of our success. With a diverse group of professionals specializing in blockchain security, compliance, and digital asset management, we bring years of experience and innovation to the table.
                </p>
            </div>
            <div className='md:pt-10 pt-5'>
                <h2 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto text-[#1A2B6B] font-semibold text-base'>
                    Our team’s core strengths
                </h2>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-5'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Blockchain specialists:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Experts in safeguarding and optimizing digital assets.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Cybersecurity professionals:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Dedicated to creating robust, multi-layered protection strategies for your assets.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Compliance experts:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Ensuring your blockchain activities align with global regulations.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center  pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Cold storage engineers:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Skilled in designing offline storage solutions to keep your crypto holdings secure.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team
