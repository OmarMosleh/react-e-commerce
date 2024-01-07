import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link, useLocation } from "react-router-dom";
// import MyLogo from "../../assets/ecommerce-icon.png";
function NavBar({cart}) {
  const location = useLocation();
  let home;
  if(location.pathname==="/"){
    home = true;
  }else{
    home =false;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton
          component={Link} to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopster"
            sx={{ mr: 2 }}
          >
            <img
              src="https://www.pngmart.com/files/7/Market-PNG-Transparent-Image.png"
              alt="logo"
              style={{ maxWidth: "40px" }}
            />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Shopster
          </Typography>{
            home &&(
          <Button component={Link}  to="/cart" color="inherit">
            <Badge badgeContent={!cart?.total_items?"0":cart?.total_items} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </Button>)
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
