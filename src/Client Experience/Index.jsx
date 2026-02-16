import React from 'react'
import Dashboard from "./Dashboard"
import Price from "./Price"
import Anywhere from "./Anywhere"
import Subr from "./Subr"
import Slider from "./Slider"
import MobSlider from "../Asset Protection/Mobslider"
import Header from "../Home/header"
import Footer from "../Home/Footer"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Price/>
        <div>
      <div className="hidden md:block lg:block">
        <Slider/>
      </div>
      <div className="block md:hidden lg:hidden">
        <MobSlider/>
      </div>
    </div>
    <Anywhere/>
    <Subr/>
    <Footer/>
    </>
  )
}
