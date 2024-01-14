import React from "react";
import { Typography, Button, Divider, Container } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stipePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({ checkOutToken, stepIncrease, stepDecrease, shippingData, checkoutHandler, timeOut }) {
  const handleSubmit = async (e, elements, stripe) =>{
    e.preventDefault();
    if(!stripe || !elements ) return;

    const cardElement= elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({ type : 'card', card: cardElement});
    if(error){
      console.log(error);
    }else{
      const orderData = {
        items : checkOutToken.line_items,
        customer : {firstname: shippingData.FirstName, lastname:shippingData.LastName, email:shippingData.email },
        shipping : {name: "MiddleEast shipping", street: shippingData.Street,city:shippingData.city ,postal_zip_code: shippingData.ZIPcode, country:shippingData.country},
        payment: {
          gateway:"stripe",
          stripe: {
            payment_method:paymentMethod.id
          }
        }
      }
      checkoutHandler(checkOutToken.id, orderData);
      timeOut();
      stepIncrease();
    }
  }
  return (
    <>
      <Container>
        <Review checkOutToken={checkOutToken} />
        <Divider />
        <Typography variant="h6" gutterBottom sx={{ margin: "20px 0" }}>
          Payment Method
        </Typography>
        <Elements stripe={stipePromise}>
         <ElementsConsumer>
          {({elements, stripe})=>(
              <form onSubmit={(e)=>handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br /> <br />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <Button variant="outlined" onClick={stepDecrease} >Back</Button>
                  <Button type="submit" variant="contained" disapled={!stripe} >Pay {checkOutToken.subtotal.formatted_with_code}</Button>
                </div>
              </form>
          )}
         </ElementsConsumer>
        </Elements>
      </Container>
    </>
  );
}

export default PaymentForm;
