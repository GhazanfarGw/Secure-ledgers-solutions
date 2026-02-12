import React from 'react'
import Dashboard from './Dashboard';
import Story from '../Home/Story';
import Mission from '../Home/Mission';
import Unique from '../Home/Unique';
import Team from '../Home/Team';
import Partner from "./Partner"
import Header from "../Home/header";
import Footer from "../Home/Footer";

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Partner/>
    <Mission/>
    <Story/>
    <Unique/>
    <Team/>
    <Footer/>
    </>
  )
}

export default Index