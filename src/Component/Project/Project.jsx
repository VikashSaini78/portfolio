import { Link, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";

function Projects() {
    return (
        <>


        <div className="My_Projects">
        <div> 
        <Typography className="text_co">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</Typography>
        <Typography variant="h2" sx={{
          color: 'white',
          textAlign:'center',
           fontWeight:'bold',
        }}>My Projects</Typography>
        </div>
          </div>




            <div className="projects">
                <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                  <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img1.jpeg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <div className="socal_media-icons1"><FaGithub/></div>
                <div className="socal_media-icons1"><BsBrowserChrome/></div>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>

                     <div className="col-md-4">
                     <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img2.jpg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <div className="socal_media-icons1"><FaGithub/></div>
                <div className="socal_media-icons1"><BsBrowserChrome/></div>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>
                     <div className="col-md-4">
                     <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img3.jpeg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <div className="socal_media-icons1"><FaGithub/></div>
                <div className="socal_media-icons1"><BsBrowserChrome/></div>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>
                  </div>
                </div>
            </div>

            {/* 2div/ */}

            <div className="projects">
                <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                  <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img1.jpeg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <Link className=" text-white" top={''}><div className="socal_media-icons1"><FaGithub/></div></Link>
                 <Link className=" text-white" top={''}> <div className="socal_media-icons1"><BsBrowserChrome/></div></Link>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>

                     <div className="col-md-4">
                     <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img2.jpg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <div className="socal_media-icons1"><FaGithub/></div>
                <div className="socal_media-icons1"><BsBrowserChrome/></div>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>
                     <div className="col-md-4">
                     <div className="bg_project-div">
                  <div className="sm_project-div">
                  <img className="project_div-image" src="./media/project_img3.jpeg" alt="error"/>
                 <div className=" flex justify-between items-center">
                 <Typography className="mt-3 text_co">SOCIAL MEDIA CLONE</Typography>
                 <div className="gap-2 text-xl flex text-white">
                 <div className="socal_media-icons1"><FaGithub/></div>
                <div className="socal_media-icons1"><BsBrowserChrome/></div>
                 </div>
                 </div>
                 <Typography className="mt-3 text-slate-100">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!
                 </Typography>

                  </div>

                  </div>
                     </div>
                  </div>
                </div>
            </div>
        </>
      );
}

export default Projects;