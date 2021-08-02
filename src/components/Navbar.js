import { AppBar, IconButton, Typography, Toolbar, CardContent, Card } from "@material-ui/core"; 
import MenuIcon from "@material-ui/icons/Menu";
import Component from "react";

const Navbar = () => {

    return ( 
   <AppBar position="static">
       <Toolbar>
        
        <IconButton>

        <MenuIcon />
        </IconButton>

        <Typography variant="h6">Live Scoring Board</Typography>

       </Toolbar>

   </AppBar>

    );
    
};


export default Navbar;