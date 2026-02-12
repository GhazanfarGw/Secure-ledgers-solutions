import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Partners() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
   return (
    <>
    <div className='mx-0 px-5 items-center border-2 bg-[#EDF0FF]'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-xl items-center mx-auto overflow-hidden'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5'>
            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./1.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./2.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./3.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./4.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./5.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./6.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./7.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./8.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./9.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./10.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./11.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./12.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./13.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./14.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./15.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
                <img src='./16.jpg' alt='Image'/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Partners;