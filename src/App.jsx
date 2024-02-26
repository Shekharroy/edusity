import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlay/VideoPlayer";

const App = () => {
  const[playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Title subTitle ='Our Programs' title ='What We Offer'/>
        <Programs />
        {/* <Title subTitle ='about' title ='About Edusity'/> */}
        <About setPlayState={setPlayState} />
        <Title subTitle ='Gallery' title ='Campus Photos'/>
        <Campus/>
        <Title subTitle ='testimonials' title ='What Student Says'/>
        <Testimonials/>
        <Title subTitle ='contact us' title ='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState ={playState} setPlayState={setPlayState}/>
    </>
  );
};

export default App;
