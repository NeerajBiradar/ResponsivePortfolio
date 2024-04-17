import Navbar from "./Header";
import Landing from "./Landing";
import Aboutme from "./Aboutme";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contactme";

import './index.css'
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Navbar/>
      <Landing/>
      <Work/>
      <Aboutme/>
      <Projects/>
      <Contact/>
    </Routers>
  );
}

export default App;
