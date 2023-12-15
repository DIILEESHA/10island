import React, { useEffect } from "react";
import smoothScroll from "smooth-scroll-into-view-if-needed";
import "./App.css";
import CursorLine from "./component/cursor/CursorLine";
import Header from "./component/header/Header";
import SentenceAnimation from "./component/header/sentences";
import Navbar from "./component/navbar/Navbar";
import ParticleComponent from "./component/particle/ParticleComponent";
import ScrollAnimation from "./component/scroller/ScrollAnimation";
import Mainserve from "./component/service/Mainserve";

function App() {
  useEffect(() => {
    const options = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    };

    // Adjust the duration based on your preference
    smoothScroll(document.body, options, 10000);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SentenceAnimation />
      <Mainserve />
      <CursorLine />
    </div>
  );
}

export default App;
