import React from 'react'
import Dashboard from "./Dashboard"
import Price from "./Price"
import Anywhere from "./Anywhere"
import Subr from "./Subr"
import Slider from "./Slider"
import Header from "../Home/header"
import Footer from "../Home/Footer"

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Price/>
    <Slider/>
    <Anywhere/>
    <Subr/>
    <Footer/>
    </>
  )
}
