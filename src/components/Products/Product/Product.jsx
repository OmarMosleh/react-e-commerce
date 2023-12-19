import React from 'react';
import { Grid, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Product.css";
import { AddShoppingCart } from '@mui/icons-material';
function Product({ props }) {
    const {id, name, price,img}= props;
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <IconButton sx={{marginLeft:"auto",}}>
            <AddShoppingCart color='primary'  className='cartIcon'/>
          </IconButton>
      </CardActions>
    </Card> 
    </Grid>
  );
}

export default Product;
