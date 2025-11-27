import Professional from "../../components/Professional";
import MainAbout from "./components/MainAbout";
import AboutSlogan from "./components/AboutSlogan";
import AboutVision from "./components/AboutVision";
import AboutMission from "./components/AboutMission";
import AboutClient from "./components/AboutClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function AboutPage () {
    console.log("About rendered");

    return (
      <>
        <Header bgImage={false} lightHeader={false}/>
        <MainAbout />
        <Professional />
        <AboutSlogan />
        <AboutVision />
        <AboutMission />
        <AboutClient />
        <Footer />
      </>
    );
}

export default AboutPage;