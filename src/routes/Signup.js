import { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Signupform from "../Components/Signupform";
import Footer from "../Components/Footer";

const Signup=()=>{


    return(
        <Fragment>
            <Navbar />
            <Hero
        cName='hero-mid'
        imgUrl='/assets/hawai.jpg'
        title='Signup'
        btnClass='hide'
        />
        <Signupform />
        <Footer />
        </Fragment>
    )
}

export default Signup;