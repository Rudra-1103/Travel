import { Fragment } from "react";
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ProfileData from "../Components/ProfileData";
const Profile =()=>{

return(
    <Fragment>
        <Navbar />
     
        <ProfileData />
        {/* <Footer /> */}
    </Fragment>
)
}

export default Profile;