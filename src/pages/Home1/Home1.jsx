import CoreService from "./components/CoreService";
import HomeSlide from "./components/HomeSlide";
import About from "./components/About";
import Professional from "../../components/Professional";
import Contact from "../../components/Contact";

function Home1 () {
    console.log("Home1 rendered");

    return (
      <>
        <HomeSlide />
        <CoreService />
        <About/>
        <Professional />
        <Contact />
      </>
    );
}

export default Home1;