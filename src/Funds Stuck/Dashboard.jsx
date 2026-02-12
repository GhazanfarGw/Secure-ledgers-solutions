import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='fundstuck duration-500 overflow-hidden mx-auto items-center h-[45rem] border-b border-opacity-30'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='block md:hidden lg:hidden mx-3'>
                <video 
                    class="justify-center mx-auto max-w-lg items-center" 
                    loop autoPlay muted playsinline>
                    <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 mx-auto max-w-screen-2xl w-full md:px-10 px-5'>
                <div className=''>
                    <div className='md:top-1/4 top-1/2 md:px-10 px-5 absolute pt-5 md:pt-0 max-w-screen-xl mx-auto'>
                        <div className='second text-left'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#ffffff] font-medium'>
                                Funds Stuck <br className='hidden md:block lg:block'/> On Binance?
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#ffffff] text-left leading-normal'> 
                                No upfront charges. Pay only after successful withdrawal. 
                            </p>
                            <div
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            data-aos-duration="400"
                            className='pt-10 text-center'
                            >
                                <a
                                    href="https://t.me/BLOCKSPC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0847F7] w-52 md:w-60 shadow-lg hover:bg-opacity-80 text-white items-center relative h-14 text-sm duration-200 px-6 flex rounded-sm gap-2"
                                    >
                                    <img src="/Telegram_logo.svg.webp" alt="Telegram" className="w-5 h-5" />
                                    Talk to an expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-screen-lg mx-auto pt-32 hidden lg:block md:block'>
                    <video 
                        class="justify-center mx-auto max-w-lg items-center" 
                        loop autoPlay muted playsinline>
                        <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
