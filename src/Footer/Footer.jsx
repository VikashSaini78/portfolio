import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Footer(){


    const Footer=styled(Box)({
        height: "auto",
        backgroundColor:"#ede8e8",
        marginTop:"30px",
       padding:"30px"
    })
    const Your_Logo = styled(Box)({
        fontSize:"40px",
        display:"flex",
        gap:"10px",
        marginTop:"30px"
    })
    const Span=styled(Box)({
        color:"red",
    })

    const H5=styled(Box)({
        marginTop:"10px",
        marginBottom:"20px"
        

    })

  

    return(
        <>
           

            <Footer>
                <div className="container">
                <div className="row">
                <div className="col-md-6">
                <strong> <Your_Logo> Your <Span>Logo</Span> </Your_Logo></strong>
    </div>
                <div className="col-md-6">
                <div className="container">
                <div className="row">
                <div className="col-md-4">
                <H5><strong>RESOURCES</strong></H5>
               <Link className="text-slate-400 hover:text-red-400" to={''} >Home</Link> <br/><br/>
                <Link className="text-slate-400 hover:text-red-400">About</Link>
                {/* class="bg-sky-500 hover:bg-sky-700 */}
        </div>
                <div className="col-md-4">
                <H5><strong>FOLOOW US</strong></H5>
                <Link className="text-slate-400 hover:text-red-400" to={"https://github.com/VikashSaini78"}>Github</Link><br/> <br/>
                <Link className="text-slate-400 hover:text-red-400" to={"https://www.instagram.com/"}>Instagram</Link>
                
               
            </div>
                <div className="col-md-4">
                <H5><strong>LEGAL</strong></H5>
               <Link className="text-slate-400 hover:text-red-400">Privacy policy</Link><br/> <br/>
                <Link className="text-slate-400 hover:text-red-400">Terms & Conditions</Link>
    </div>
       </div>
         </div>
            </div>
               </div>
                 </div>



                
            </Footer>
         
        </>
    )
}
export default Footer;