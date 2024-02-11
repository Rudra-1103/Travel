import { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Loginform from "../Components/Loginform";

const Login=()=>{


    return(
        <Fragment>
            <Navbar />
            <Hero
        cName='hero-mid'
        imgUrl='/assets/hawai.jpg'
        title='Login'
        btnClass='hide'
        />
    <Loginform />
        <Footer />
        </Fragment>
    )
}

export default Login;