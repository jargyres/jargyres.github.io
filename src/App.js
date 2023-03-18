import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from "./components/Game.jsx";

function App() {
  return (
    
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Contact></Contact>

    </div>
  );
}

export default App;
