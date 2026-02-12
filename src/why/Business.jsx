import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Business = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div className='justify-center mx-auto items-center duration-300 md:py-32 py-20'>
                <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5 border-b pb-10 border-[#136690] border-opacity-30'>
                    <div className='justify-center py-5 gap-16 items-center pb-16'>
                        <div className='mx-auto'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium md:text-center mx-auto text-[#1A2B6B]'>
                                Why Secure Ledgers Solutions?
                            </h1>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] justify-center md:text-base text-sm pt-5 leading-normal max-w-screen-md mx-auto md:text-center'>
                                In today’s digital age, your cryptocurrency portfolio is constantly at risk from cyberattacks, theft, and fraud. Whether you store your assets in paper wallets, hardware wallets, or online platforms, ensuring top-notch security is essential. At Block Sphere, our team of cybersecurity experts is dedicated to protecting your digital wealth using cutting-edge technologies, multi-layered protection strategies, and proven methods.
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-sm pt-5 leading-normal md:text-base md:text-center mx-auto text-[#6D7380] max-w-screen-md'>
                                We recognize the complexities of securing digital currencies and the necessity of a robust, multi-layered approach. Our comprehensive services include:
                            </p>
                            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-4 px-3' src="5f75cc9f74f7124d70ad4f0a_file-code-check.svg" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Paper wallet protection
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        We ensure your paper wallets are stored in a secure, encrypted environment and safeguarded against both physical and digital threats. Our experts provide tailored advice on safe storage practices to minimize risks of loss or theft.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-4 px-3' src="5f75b5e6e24b376ed9ab5c1e_programming-browser.svg" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Hardware wallet security
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Our team secures your hardware wallets by configuring them to the highest standards. We protect your private keys from hackers through advanced techniques, whether you are setting up new wallets or enhancing existing ones.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-4 px-3' src="5f75ce12c98997405a04770f_iris-scan-approved.svg" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Real-time monitoring
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        We offer 24/7 monitoring services to detect and prevent suspicious activity around your digital assets, addressing potential breaches before they happen.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-4 px-3' src="63fe0ad1c40c90f1702602ee_icon_database-connect.svg" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Cold Storage Solutions
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        For substantial crypto holdings, we implement cold storage solutions to keep your assets offline, rendering them virtually inaccessible to cybercriminals.
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

export default Business;