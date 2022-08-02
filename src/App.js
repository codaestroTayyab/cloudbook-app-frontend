import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./contexts/NoteStates";
import ModalContext from "./contexts/ModalContext";

function App() {
  return (
    <div>
      <NoteState>
        <ModalContext>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </ModalContext>
      </NoteState>
    </div>
  );
}

export default App;
