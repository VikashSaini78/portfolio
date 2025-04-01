// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const drawerWidth = 240;
// const navItems = [
//   { Name: "Header", URL: "/" },
//   { Name: "Skills", URL: "/Skills" },
//   { Name: "Project", URL: "/projects" },
//   { Name: "Resume", URL: "/resume" },
//   { Name: "Contact", URL: "/contact" },
// ];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
//       <Typography variant="h6" sx={{ my: 2, ml: 1 }}>
//         <img
//           className="nav_img_logo"
//           src="./media/myimg2.png"
//           alt="error"
//           style={{
//             width: "50px",
//             height: "50px",
//             margin: "auto",
//             borderRadius: "100%",
//           }}
//         />
        
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <Link
//             to={item.URL}
//             key={item.Name}
//             style={{ textDecoration: "none" }}
//           >
//             <ListItem disablePadding>
//               <ListItemButton sx={{ textAlign: "center" }}>
//                 <ListItemText primary={item.Name} />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <div className="container11">
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           component="nav"
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             backgroundColor: "rgb(33, 36, 40)",
//             // height: "11vh",
//              height: { xs: "8vh", sm: "12vh"},
//           }}
//         >
//           <Toolbar>
//             <img
//               className="nav_img_logo"
//               src="./media/myimg2.png"
//               alt="error"
//               style={{
//                 width: "35px",
//                 height: "35px",
//                 margin: "5px",
//                 borderRadius: "100%",
//               }}
//             />
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//               className="icons_btn"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//             >
//               <img
//                 src="./media/myimg2.png"
//                 alt="error"
//                 style={{
//                   width: "35px",
//                   height: "35px",
//                   margin: "5px",
//                   borderRadius: "100%",
//                 }}
//               />
//             </Typography>
//             <Box sx={{ display: { xs: "none", sm: "block" } }}>
//               {navItems.map((item) => (
//                 <Link
//                   to={item.URL}
//                   key={item.Name}
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   <Button sx={{ color: "#fff" }}>{item.Name}</Button>
//                 </Link>
//               ))}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <nav>
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true,
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </nav>
//       </Box>
      
//     </div>
//   );
// }

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

// export default Navbar;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { Name: "Header", URL: "/" },
  { Name: "Skills", URL: "/Skills" },
  { Name: "Project", URL: "/projects" },
  { Name: "Resume", URL: "/resume" },
  { Name: "Contact", URL: "/contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Function to detect scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShadow(true); // Add box-shadow if scrolled more than 20px
    } else {
      setShadow(false); // Remove box-shadow if scrolled back to top
    }
  };

  // Adding event listener to track scrolling when window is defined
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, ml: 1 }}>
        <img
          className="nav_img_logo"
          src="./media/myimg2.png"
          alt="error"
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
            borderRadius: "100%",
          }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.URL} key={item.Name} style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.Name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="container11">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(33, 36, 40)",
            height: { xs: "8vh", sm: "13vh" },
            boxShadow: shadow ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
            transition: "box-shadow 0.3s ease", 
          }}
        >
          <Toolbar>
            <img
              className="nav_img_logo"
              src="./media/myimg2.png"
              alt="error"
              style={{
                width: "35px",
                height: "35px",
                margin: "5px",
                borderRadius: "100%",
              }}
            />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              className="icons_btn"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img
                src="./media/myimg2.png"
                alt="error"
                style={{
                  width: "35px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "100%",
                }}
              />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link to={item.URL} key={item.Name} style={{ textDecoration: "none", color: "white" }}>
                  <Button sx={{ color: "#fff" }}>{item.Name}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

