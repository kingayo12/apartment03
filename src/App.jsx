import Home from "./layouts/Home";
import Nav from "./layouts/nav";
import Nav2 from "./layouts/nav2";
import "./App.css";
import Slider1 from "./components/slider/slider1";
import Slider2 from "./components/slider/slider2";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import About from "./layouts/About";
import Property from "./layouts/Property";
import Pricing from "./components/pricing/Pricing";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact-us/ContactUs";
const App = () => {
  return (
    <div className='wrapper'>
      <Nav />
      <div className='container_wrapper'>
        <section>
          <Home />
        </section>
        <Slider1 />
        <section id='about'>
          <About />
        </section>
        <section id='explore'>
          <Property />
        </section>
        <section id='gallery'>
          <Slider2 />
        </section>
        <section id='pricing'>
          <Pricing />
        </section>
        <section id='faq'>
          <Faq />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <Map />
        <Footer />
      </div>
      <Nav2 />
    </div>
  );
};

export default App;
