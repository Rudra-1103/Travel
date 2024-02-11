import { Fragment } from "react";
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";



const Home =()=>{
return(
    <Fragment>
        <Navbar />
        <Hero
        cName='hero'
        imgUrl='/assets/12.jpg'
        title='Your Journey Your Story'
        text='Choose your destination.'
        btnText='Travel Plan'
        url='/'
        btnClass='show'
        />

        <Destination />
        <Trip 
        fetchUrl='https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Trips.json'
        heading='Recent Trips'
        text='You can discover unique destination using Google Maps'
        />     
        <Footer />   
    </Fragment>
)
}

export default Home;