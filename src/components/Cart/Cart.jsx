import { Container, Grid, Typography, Button, Box } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
function Cart({ cart,cartUpdateQtyHandler, removeFromCartHandler, emptyCartHandler }) {
  const empty = !cart.line_items || !cart.line_items.length;
  return (
    <>
      <Container fixed sx={{ marginTop: "7rem" }}>
        <Typography variant="h5" gutterBottom>
          Your Shopping Cart
          
        </Typography>
        {empty ? (
          <>
            <Typography variant="h6">Your cart is empty</Typography>
            <Link to="/">Go back shopping ! </Link>
          </>
        ) : (
          <>
            <Grid container spacing={2}>
              {cart.line_items.map((item) => (
                <Grid item key={item.id}>
                  <CartItem item={item} cartUpdateQtyHandler={cartUpdateQtyHandler} removeFromCartHandler={removeFromCartHandler} />
                </Grid>
              ))}
            </Grid>
            <Box
              my={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={4}
            >
              <Typography variant="h6">
                Subtotal : {cart.subtotal.formatted_with_code}
              </Typography>
              <Box sx={{ '& button': { m: 1, fontSize: '12px' } }}>
                <Button variant="contained" color="error" sx={{
                  padding:"8px"
                }}
                onClick={emptyCartHandler}
                >
                  EMPTY CART
                </Button>
                <Button variant="contained" color="primary" sx={{
                  padding:"8px"
                }}
                component={Link} to="/checkout"
                >
                  CHECK OUT !
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default Cart;
