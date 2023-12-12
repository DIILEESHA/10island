import "./App.css";
import CursorLine from "./component/cursor/CursorLine";
import Header from "./component/header/Header";
import SentenceAnimation from "./component/header/sentences";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SentenceAnimation/>
    </div>
  );
}

export default App;
