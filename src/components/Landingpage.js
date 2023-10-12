import AboutUs from "./AboutUs";
import Events from "./Events";
import  Footer  from "./Footer";
import FrontPage from "./FrontPage";
import Header from "./Header";
import Navbar from "./Navbar";
import Network from "./Network";
import Services from "./Services";


export default function Landingpage() {
    return (
        <div>
        <Header/>
        <Navbar/>
        <FrontPage/>
        <AboutUs/>
        <Events/>
        <Network/>
        <Services/>
        <Footer/>
        
        
        
        </div>
    )
  }