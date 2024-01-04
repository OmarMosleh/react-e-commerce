import React from "react";
import { Grid, Button, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
function CartItem({ item, cartUpdateQtyHandler, removeFromCartHandler }) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minWidth: 220 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image.url}
            alt={item.name}
          />
          <CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: "15px", marginLeft: "20px" }}
              >
                £{item.price.raw}
              </Typography>
            </CardActions>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignContent:"center" }}>
            <Button
              color="primary"
              sx={{
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                padding:"0",
                margin: "0 7px",
                minWidth: 0,
              }}
              onClick={()=> cartUpdateQtyHandler(item.id, item.quantity + 1)}
            >
              +
            </Button>
            <Typography gutterBottom variant="body2" component="div" sx={{marginTop:"2px"}}>
              {item.quantity}
            </Typography>
            <Button
              color="primary"
              sx={{
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                padding:"0",
                margin: "0 7px",
                minWidth: 0,
              }}
               onClick={()=> cartUpdateQtyHandler(item.id, item.quantity-1)}
            >
              -
            </Button>
          </Box>
          <Button variant="outlined" color="error" onClick={()=>removeFromCartHandler(item.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}


export default CartItem;
