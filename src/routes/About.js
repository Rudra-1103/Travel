import { Fragment } from "react";
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";

const About =()=>{
return(
    <Fragment>
        <Navbar />
        <Hero
        cName='hero-mid'
        imgUrl='/assets/night.jpg'
        title='About'
        btnClass='hide'
        />
        <Aboutus />
        <Footer />
    </Fragment>
)
}

export default About;