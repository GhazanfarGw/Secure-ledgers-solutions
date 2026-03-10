import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Unique() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto bg-[#F0F5FF]'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl py-10 md:py-16'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium mx-auto text-[#1A2B6B]'>
                    What Makes Us Unique?
                </h1>
            </div>
            <div className='md:pt-10 pt-5'>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-5'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                End-to-End Simplicity:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        We ensure our solutions are intuitive and easy to integrate, with minimal disruption to existing workflows..
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Post-Adoption Support:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        We don’t disappear after deployment. Ongoing education, training, and upgrades are part of our DNA.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Customized for Scalability:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Our solutions grow with your business, ensuring long-term value rather than one-off implementations
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center  pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Energy-Conscious Design:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Addressing the sustainability concerns around blockchain head-on, we specialize in energy-efficient platforms that reduce environmental impact.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center  pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Unparalleled Trust Building:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Beyond technology, we help clients foster trust with their customers, stakeholders, and regulators through transparent and secure blockchain systems.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Unique
