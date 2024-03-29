import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Writeups from "./components/Writeups.jsx"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from "./components/Game.jsx";

function App() {
  return (
    
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Writeups></Writeups>
      <Work></Work>
      <Contact></Contact>

    </div>
  );
}

export default App;
