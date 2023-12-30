import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Product from "./Product/Product";
import React from "react";
import "./Products.css"

function Products({items, cartHandler}) {
  
console.log(items);
return (
    <>
      <Container maxWidth="lg" className="productsContainer">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {items.map((item) => (
            <Product key={item.id} props={item} cartHandler={cartHandler} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Products;
