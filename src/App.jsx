// import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Project/Project";
import Skills from "./Component/skills/Skills";
import Contact from "./Contact/Contact";
import Resume from "./resume/Resume";


function App() {
  return ( 
    <>

      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
     
    </>
   );
}

export default App;