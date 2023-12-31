import React from "react";
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Certifications from "./components/carousel/carousel";
function Home(){
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Certifications/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;