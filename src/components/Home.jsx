import Hero from "../components/Hero";
import Video from "../components/video";
import ScrollTextAnimation from "../components/creative";
import Business from "../components/business";
import Idea from "../components/idea";
import ServicesSection from "../components/secrets";
import ProductShowcase from "../components/grid";
import About from "./about";

const Home = () => {
  return (
    <div>
      <Hero />

      <Video />
      <About/>
      <ScrollTextAnimation />
      <Business />
      <Idea />
      <ServicesSection />
      <ProductShowcase />
    </div>
  );
};

export default Home;
