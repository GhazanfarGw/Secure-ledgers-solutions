import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Luxury() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto bg-[#F0F5FF]'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl py-10 md:py-16'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium mx-auto text-[#1A2B6B]'>
                    Luxury Purchases via Cryptocurrency
                </h1>
                <p className='third text-[#6D7380] md:text-base text-sm justify-center pt-5 leading-normal max-w-screen-lg'>
                    Step into the future of luxury shopping with Block Sphere. We enable you to purchase premium goods using cryptocurrency, combining elegance with innovation.
                </p>
            </div>
            <div className='md:pt-10 pt-5'>
                <h2 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto text-[#1A2B6B] font-semibold text-base'>
                    Services include:
                </h2>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-2 items-center pt-5'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Buy Cars with Cryptocurrency:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        From luxury brands to everyday vehicles, purchase your dream car with Bitcoin, Ethereum, or other cryptocurrencies.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Acquire High-End Watches:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        Own iconic timepieces from renowned brands, securely paid for using your digital assets.
                    </p>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                    <div className='flex gap-2 items-center pt-3 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div>
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Shop for Premium Equipment:
                            </h2>
                        </div>
                    </div>
                    <p className='text-[#6D7380] text-sm leading-normal pl-4 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        Whether it's electronics, machinery, or other high-value items, we facilitate secure purchases via cryptocurrency.
                    </p>
                </div>
            </div>
            <div className='md:py-16 py-8'> 
                <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Fast and Secure Liquidation: 
                        </h1>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            We ensure a quick and hassle-free conversion of your digital assets.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Best Market Rates:
                        </h1>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            Our experts monitor the market in real-time to secure the most competitive rates for your cryptocurrencies.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Simple and Transparent Process
                        </h1>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            No hidden fees, no surprises—just a clear, streamlined experience you can trust.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Luxury
