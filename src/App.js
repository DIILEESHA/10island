import "./App.css";
import MistyRainbowCursor from "./component/MistyRainbowCurso/MistyRainbowCursor ";
import CursorLine from "./component/cursor/CursorLine";
import Header from "./component/header/Header";
import SentenceAnimation from "./component/header/sentences";
import Navbar from "./component/navbar/Navbar";
import ScrollAnimation from "./component/scroller/ScrollAnimation";
import Mainserve from "./component/service/Mainserve";

function App() {
  return (
    <div className="App">
      <MistyRainbowCursor />
      <Navbar />
      <Header />
      <SentenceAnimation />
      <Mainserve />
    </div>
  );
}

export default App;
