import { Fragment } from "react";
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

const Service =()=>{
return(
    <Fragment>
        <Navbar />
        <Navbar />
        <Hero
        cName='hero-mid'
        imgUrl='/assets/night.jpg'
        title='Service'
        btnClass='hide'
        />
        <Trip 
        fetchUrl='https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Trips.json'
        heading='Recent Trips'
        text='You can discover unique destination using Google Maps'
        />  
        <Trip 
        fetchUrl='https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Categories/0.json'
        heading='Famous in Asia'
        text='You can discover unique destination using Google Maps'
        />   
        <Trip 
        fetchUrl='https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Categories/1.json'
        heading='Famous in Europe'
        text='You can discover unique destination using Google Maps'
        />   
        <Trip 
        fetchUrl='https://travel-13514-default-rtdb.asia-southeast1.firebasedatabase.app/Categories/2.json'
        heading='Famous in North America'
        text='You can discover unique destination using Google Maps'
        />   
        <Footer />
    </Fragment>
)
}

export default Service;