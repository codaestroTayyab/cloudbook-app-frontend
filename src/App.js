import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./contexts/NoteStates";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthContext from "./contexts/AuthContext";
import Alert from "./components/Alert";


function App() {
  

  return (
      <NoteState>
        <AuthContext>
          <Navbar />
          <Alert/>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/notes" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </AuthContext>
      </NoteState>
  );
}

export default App;
