import { Box, Link, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <>
          <Box sx={{
            width:'100%',
            height:'auto',
            backgroundColor:'rgb(33, 36, 40)'
          }}>
            <div className="container">
             <div className="row">
             <div className="col-md-4">
              
              <div className="contact_bg-box">
               <div className="contact_sm-box">
               <img style={{height:'256px',borderRadius:"10px"}} src="./media/contact.png" alt="contact img"/>
               <Typography sx={{fontWeight:'bold',color:'white', marginTop:'30px'}} variant="h4">Vikash Saini</Typography>
               <Typography className="mt-3 text-slate-400">MERN Stack Developer</Typography>
               <Typography className="mt-3 text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</Typography>

               <Typography className="mt-4 text-slate-400">Phone: + 91-7878599144</Typography>

               <Typography className="mt-4 text-slate-400">Email : vikashbanskhoh@gmail.com</Typography>

               <Typography className="mt-5 text-slate-400">Find me in</Typography>

               <div className="gap-2 text-xl flex text-white mt-4">
                 <Link className=" text-white" top={''}><div className="contact-insta_icons">
                 <FaFacebookF /></div></Link>

                 <Link className=" text-white" top={'https://www.instagram.com/'}><div className="contact-insta_icons">
                 <FaInstagram /></div></Link>

                <Link className=" text-white" top={'https://github.com/VikashSaini78'}> <div className="contact-insta_icons">
                <FaGithub/></div></Link>

                <Link className=" text-white" top={'https://www.linkedin.com/in/vikash-saini-a6448226b/'}>
                <div className="contact-insta_icons"><FaLinkedin /></div></Link>

                 </div>
               </div>
              
              </div>

             </div>

          <div className="col-md-8">
          <div className="contact_bg-box">
          <div className="contact_sm-box">

          <div className="row">
          <div className="col">
          <input type="text" className="form-control mt-4" placeholder="First name" aria-label="First name"/>
          </div>
          <div class="col">
          <input type="Number" className="form-control mt-4" placeholder="Number" aria-label="Number"/>
          </div>
          </div>

          <input type="email" className="form-control mt-5" placeholder="Email id" id="inputEmail3"/>

          <input type="text" className="form-control mt-5" placeholder="Subject"/>


          <div className="form-floating ">
         <textarea className="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea2" style={{
            height: '220px',
         }} ></textarea>
        <label for="floatingTextarea2">Comments</label>
        </div>

        <button type="button" class="btn btn-success form-control mt-5">Send Message</button>

 
                  </div>
                </div>
              </div>
             </div>
            </div>
          </Box>  
        </>
      );
}

export default Contact;