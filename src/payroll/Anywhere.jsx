import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Anywhere() {
    useEffect (() => {
    Aos.init ();
    }, [])

    return (
        <>
        <div className='justify-center mx-auto items-center duration-300 md:py-32 py-20 bg-[#F0F5FF]'>
            <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
                <div className='justify-center py-5 gap-16 items-center md:pb-16'>
                    <p className="justify-center text-center mx-auto text-xl md:text-5xl text-[#1A2B6B]">
                        A simple, secure solution for paying your employees with Bitcoin, Ethereum and other cryptocurrencies. Low fees, no hidden costs.
                    </p>
                    <div className='mx-auto'>
                        <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="A749LG8zeKMF3NHzAUpV2ADs68.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Automated payroll
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Pay crypto to employees programmatically via API or push manually as needed.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="McyTZX77MT6TPmYCYGJusiQyY.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Never touch crypto
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                   Secure Ledgers Solutions shields you from the price volatility of Bitcoin and other cryptocurrencies. You get every dollar or euro of what you charge, minus a low transaction fee.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="pXNQJvRZ9hJsYVDMI9YNSkMdoM (1).svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Flexible payment options
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Pay your way; run payroll in the top cryptocurrencies to any wallet.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="mun6t61cizQo3NWFmStsAXZNhWU.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Low cost
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Simple fee structure, no variable cost.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="4RIK6xpRTTly9hGyNuqAWBs4U.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Secure, regulated and compliant
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Built-in identity verification, sanction screening, AFC/AML compliance included.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="pXNQJvRZ9hJsYVDMI9YNSkMdoM.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Privacy focused
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Secure Ledgers Solutions doesn't share wallet addresses or blockchain transactions with employers.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="YmyVIO5JWXx4278mEcY9wlMRF0.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Faster than fiat
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Send global payroll quicker than legacy payment rails.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="Yzdwec4ioxysI0UjeZidApw6r4.svg" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Global payouts
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Cross-border payments to employees anywhere; send crypto to over 225 supported countries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Anywhere;
