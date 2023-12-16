import React from "react";
import Header from "../header/Header";
import SentenceAnimation from "../header/sentences";
import Mainserve from "../service/Mainserve";

const Home = () => {
  return (
    <div style={{background:"#f2f2f2"}}>
      <Header />
      <SentenceAnimation />
      <Mainserve />
    </div>
  );
};

export default Home;
