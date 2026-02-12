import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Apart from './Apart'
import Header from './header'
import Footer from './Footer';
import Price from './Price';
import Subr from './Subr';
import Partner from './Exchanges'
import Value from "./Value"
import Getting from '../Getting/Getting';
import Why from '../why/Business'
import Campare from "./BlockSPCComparison"

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <Partner/>
        <Price/>
        <About/>
        <Campare/>
        <Apart/>
        <Getting/>
        <Why/>
        <Value/>
        <Subr/>
        <Footer/>
        

    </>
  )
}

export default index