import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
// import MyLogo from "../../assets/ecommerce-icon.png";
function NavBar({cart}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="https://png.pngtree.com/png-clipart/20211009/original/pngtree-letter-s-logo-png-design-vector-png-image_6848019.png"
              alt="logo"
              style={{ maxWidth: "40px" }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopster
          </Typography>
          <Button color="inherit">
            <Badge badgeContent={!cart.total_items?"0":cart.total_items} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
