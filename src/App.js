import React, { useEffect } from "react";
import smoothScroll from "smooth-scroll-into-view-if-needed";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Singlepost from "./component/single/Singlepost";
import Journal from "./component/Journalist/Journal";
import CustomCursor from "./component/cursor/CustomCursor";

function App() {
  useEffect(() => {
    const options = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    };

    smoothScroll(document.body, options, 10000);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<Singlepost />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <CustomCursor />
      </BrowserRouter>
    </div>
  );
}

export default App;
