import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import Typed from "typed.js";
import { useEffect } from "react";
function Header() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer.|",
       "Developer.|",
       "Programmer.|",
      ],
      typedSpeed: 50,
      backSpeed: 70,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    paddingTop: "100px",
                  
                  }}
                >
                  <h1 className=" text-white">WELCOME TO MY WORLD</h1>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      marginTop: "40px",
                    }}
                  >
                    Hi, I'm <span className="text_co">Vikash Saini</span>
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      marginTop: "20px",
                    }}
                  >
                     I'm a <span ref={typedRef} className="text_co"></span>
                  </Typography>

                  <Typography className=" mt-4 text-slate-400">
                    I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I'm
                    not adding motion just to spruce things up, but doing it in
                    ways that.
                  </Typography>
                </Box>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  // backgroundColor:'pink',
                  overflow: "hidden",
                  marginTop: "40px",
                  // marginLeft:"30px"
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <img className="heder_image-my" src="./media/imm.jpg" alt="" />
              </Box>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
