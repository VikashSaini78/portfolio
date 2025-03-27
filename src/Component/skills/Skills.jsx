// import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


function Skills() {
    return (
        <>

        <div className="my_skills">
        <Typography variant="h3" sx={{
            textAlign:'center',
            marginBottom:'50px',
            color:'white',
            fontWeight:'bold',
            
        }}
        data-aos='fade-zoom-in'
        data-aos-duration='1000'
        >MY Skills</Typography>
        </div>

         {/* 1 */}
         <div className="skills">
         <div className="container">
        <div className="row">

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <FaHtml5 style={{
            fontSize:'100px',
           color:'tomato'
        }} />
        <Typography variant="h4">HTML</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <FaCss3 style={{
            fontSize:'100px',
           color:'#4287f5'
        }} />
        <Typography variant="h4">CSS</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <TbBrandJavascript style={{
            fontSize:'100px',
           color:'#eff542',
             margin:'auto'
        }} />
        <Typography variant="h4">Javascript</Typography>
        </div>
        </div>
        </div>

        </div>

        </div>
         </div>
                 {/* 2 */}
                 <div className="skills">
         <div className="container">
        <div className="row">

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <TbBrandRedux style={{
            fontSize:'100px',
           color:'#e342f5'
        }} />
        <Typography variant="h4">Redux</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <FaReact  style={{
            fontSize:'100px',
           color:'#42ddf5'
        }} />
        <Typography variant="h4">React</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <RiTailwindCssFill style={{
            fontSize:'100px',
           color:'#42b3f5',
            margin:'auto'
        }} />
        <Typography variant="h4">Tailwind css</Typography>
        </div>
        </div>
        </div>

        </div>

        </div>
         </div>

         {/* 3 */}
         <div className="skills">
         <div className="container">
        <div className="row">

        <div className="col-md-4">
        <div className="div_skills"
         data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <FaNode style={{
            fontSize:'100px',
           color:'#42f581'
        }} />
        <Typography variant="h4">Node js</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <SiExpress style={{
            fontSize:'100px',
           color:'white'
        }} />
        <Typography variant="h4">Express</Typography>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="div_skills"
        data-aos='flip-left'
        data-aos-duration='1000'
        >
        <div>
        <SiMongodb style={{
            fontSize:'100px',
           color:'#42f548',
            margin:'auto',
          
        }} />
        <Typography variant="h4">Mongo DB</Typography>
        </div>
        </div>
        </div>

        </div>

        </div>
         </div>
        </>
      );
}

export default Skills;