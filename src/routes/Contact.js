import { Fragment } from "react";
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";

const Contact =()=>{
return(
    <Fragment>
        <Navbar />
        <Hero
        cName='hero-mid'
        imgUrl='/assets/2.jpg'
        title='Contact'
        btnClass='hide'
        />

        <Contactform />

        <Footer />
    </Fragment>
)
}

export default Contact;