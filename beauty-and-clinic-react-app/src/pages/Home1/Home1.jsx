import CoreService from "./components/CoreService";
import HomeSlide from "./components/HomeSlide";
import About from "./components/About";
import Professional from "../../components/Professional";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home1 () {
    console.log("Home1 rendered");

    return (
      <>
        <Header bgImage={1} lightHeader={false}/>
        <HomeSlide />
        <CoreService />
        <About/>
        <Professional />
        <Contact />
        <Footer />
      </>
    );
}

export default Home1;