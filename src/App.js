import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Video from './components/video';
// import About from './components/about';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ScrollTextAnimation from './components/creative';
import Business from './components/business';
import Idea from './components/idea';
import Synergy from './components/synergy';
import ServicesSection from './components/secrets';
import ProductShowcase from './components/grid';
import Home from './components/Home';
import Talk from './components/talk';
import Footer from './components/footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'; 
import About from './components/about/about';
import CaseStudy from './components/cases/case';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // Lower values for slower, smoother scrolling
      duration: 2.0, // Higher duration for a more fluid effect
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)), // Custom easing for ultra-smooth scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div  className="App relative overflow-hidden bg-white">
      
        <div className="min-h-screen">
          <Navbar />
          <Outlet />
          <Talk/>
          <Footer/>

          
          


        </div>
    </div>
  );
}

export default App;
export const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Main app layout
    children: [
      {
        index: true,  // Default route at the root
        element: <Home />,  // Home component
      },
      {
        path: "/about",
        element: <About />,  // About component
      }, 
      {
        path: "/services",
        element: <CaseStudy />,  // About component
      }, 
    ],
  },
]);

// Render the RouterProvider with the routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);