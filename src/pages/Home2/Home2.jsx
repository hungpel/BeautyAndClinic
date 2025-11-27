import Professional from "../../components/Professional";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Home2Slide from "./components/Home2Slide";
import Home2About from "./components/Home2About";
import Home2Service from "./components/Home2Service";
import Home2WhyChoose from "./components/Home2WhyChoose";
import Home2Blog from "./components/Home2Blog";
import Home2RequestCall from "./components/Home2RequestCall";
import Footer from "../../components/Footer";

function Home2 () {
    console.log("Home2 rendered");

    return (
      <section className="">
        <Header bgImage={2} lightHeader={true}/>
        <Home2Slide />
        <Home2About />
        <Home2Service />
        <Home2WhyChoose />
        <Home2Blog />
        <Home2RequestCall />
        <Footer />
      </section>
    );
}

export default Home2;