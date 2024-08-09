import Header from "../Component/Header/Header";
import Projects from "../Component/Project/Project";
import Skills from "../Component/skills/Skills";
import Contact from "../Contact/Contact";
import Resume from "../resume/Resume";

function Home() {
    return ( 
        <>
        <Header/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
        </>
     );
}

export default Home;
