import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Service = () => {
    useEffect (() => {
        Aos.init ();
    }, [])

    return (
        <div id='services' className='bg-[#0C162C] duration-300 lg:py-20 md:py-20 md:pt-20 lg:pt-20 pt-16 text-white mx-auto md:text-center md:px-10 px-5'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='text-left'>
                    <div className='border-b border-opacity-30 border-[#fff]'>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#A0B3F2] uppercase'>
                            Our Services
                        </p>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-white lg:text-4xl text-3xl md:pt-5 pt-3 font-bold'>
                            Digital asset consulting
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                            Navigating the evolving landscape of blockchain and AI with booming crypto industry comes amidst complex cybersecurity challenges can be daunting. At Block Sphere, our expert consultants provide tailored guidance to help you overcome these hurdles.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                            We deliver professional advice to individuals and businesses, empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                            With a focus on innovation and trust, we ensure your digital journey is secure, efficient, and future-ready.
                        </p>
                    </div>
                    <br />
                    <br />
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-white lg:text-4xl text-3xl md:pt-5 font-bold'>
                        Cryptocurrency liquidation
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                        When it’s time to convert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process. <br />
                        At Block Sphere, we specialize in cryptocurrency liquidation, helping you seamlessly transform your digital assets into real-world value. <br />
                        Whether you’re dealing with Bitcoin, Ethereum, or other major cryptocurrencies, our expert team guarantees optimal market rates and complete transparency every step of the way.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                        We deliver professional advice to individuals and businesses, empowering them to enhance their security strategies, safeguard digital assets, and optimize blockchain systems within their portfolios.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#9498A2] max-w-screen-lg pt-5 leading-normal'>
                        With a focus on innovation and trust, we ensure your digital journey is secure, efficient, and future-ready.
                    </p>
                    <div className=''>
                        <div className='md:grid md:grid-cols-3 py-10 gap-5'>
                            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
                                <div className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="63f647903560921f34f49ea9_icon_monetization-idea.svg" alt="" />
                                </div>
                                <h1 className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
                                    Fast and Secure Liquidation: 
                                </h1>
                                <p className='md:pt-5 pt-3 text-[#aaafbb] text-base md:text-sm leading-normal'>
                                    We ensure a quick and hassle-free conversion of your digital assets.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="6320cec56a9b7a659558366b_economic-growth-nature.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
                                    Best Market Rates: 
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#aaafbb] text-base md:text-sm leading-normal'>
                                    Our experts monitor the market in real-time to secure the most competitive rates for your cryptocurrencies.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-6 md:px-5 md:mt-10 border-opacity-30 mt-5'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="5f96abda0b28bb0d62decff5_cash-payment-bag.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-base text-xl md:font-semibold lg:pt-5 pt-3 text-[#ffffff]'>
                                    Simple and Transparent Process
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#aaafbb] text-base md:text-sm leading-normal'>
                                    No hidden fees, no surprises—just a clear, streamlined experience you can trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;