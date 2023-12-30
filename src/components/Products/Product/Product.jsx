import React from "react";
import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "./Product.css";
import { AddShoppingCart } from "@mui/icons-material";
function Product({ props, cartHandler }) {
  const {id, name, price, image, description } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image.url} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: description }}
              variant="body2"
              color="text.secondary"
              style={{ fontSize: '15px' }}
            />
         </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography gutterBottom variant="h5" component="div">
            {price.formatted_with_symbol}
          </Typography>
          <IconButton sx={{ marginLeft: "auto" }} className="iconButton" onClick={()=> cartHandler(id,1)} >
            <AddShoppingCart color="primary" className="cartIcon" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
