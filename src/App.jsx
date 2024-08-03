// import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect } from "react";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Project/Project";
import Skills from "./Component/skills/Skills";
import Contact from "./Contact/Contact";
import Resume from "./resume/Resume";
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
   Aos.init();
  },[])


  return ( 
    <>

          <Navbar/>
          <Header />
          <Skills />
          <Projects />
          <Resume />
          <Contact /> 



{/* 
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/resume" element={<Resume />} /> 
          <Route path="/contact" element={<Contact />} />  
      </Routes>
    </BrowserRouter> */}
    </>
   );
}

export default App;
