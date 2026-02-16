import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Getting() {
    useEffect (() => {
    Aos.init ();
    }, [])

    return (
        <>
        <div className='justify-center mx-auto items-center duration-300 md:py-32 py-14'>
            <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
                <div className='justify-center py-5 gap-16 items-center pb-16'>
                    <div className='mx-auto'>
                        <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium text-[#1A2B6B]'>
                                Our Values
                            </h1>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-consultation-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    People Matter
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Everyone has the opportunity to make a difference.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-proposal-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Accountability
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                   People will forgive a mistake, but they won't forgive not caring.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-game-plan-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Proavtive
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    If someone asks you to walk a mile with them, walk with them for two.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-weak-financial-growth-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Collaborative
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    If you want to go fast, go alone - if you want to go for go together.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-weak-financial-growth-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Perseverance
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    All problems bow before stubbornness and determination.
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

export default Getting;