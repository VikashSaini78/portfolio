import { Box, Typography } from "@mui/material";

function Header() {
    return ( 
        <>
         <header className="header">
            <div className="container">
              <div className="row">
                 <div className="col-md-6">

               <Box sx={{
                width:'100%',
                height:'auto',
                // backgroundColor:'yellow',
                marginTop:'40px'
               }}>
               <h1 className=" text-white">
               WELCOME TO MY WORLD
               </h1>
               <Typography variant="h2" sx={{fontWeight:'bold', color:'white', marginTop:'20px'}}>
               Hi, I'm <span className=" text-rose-700 ">Vikash Saini</span>
               </Typography>


               <Typography variant="h4" sx={{fontWeight:'bold', color:'white', marginTop:'20px'}}>
                <span className=" text-rose-700"> a Full Stack Developer.|</span>
               </Typography>
              

               <Typography className=" mt-4 text-slate-400">
               I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
               </Typography>

               </Box>
                 </div>

                 <div className="col-md-6">
                 <Box sx={{
                width:'100%',
                height:'auto',
                // backgroundColor:'pink',
                overflow:'hidden'
               }}>
               <img className=" w-screen max-h-dvh " src="./media/image_bg.png" alt=""/>
               </Box>
                  
                 </div>

              </div>
            </div>
         </header>
        </>
     );
}

export default Header;