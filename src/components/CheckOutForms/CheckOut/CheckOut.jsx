import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import commerce from "../../../lib/commerce";


function CheckOut({cart}) {
  const steps = ["Shipping Address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);
  const [checkOutToken,setCheckOutToken]= useState(null);

  //generate toke
  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });
      console.log(token);
      setCheckOutToken(token);
    } catch (error) {
      console.error("Error generating token:", error);
      // Handle the error gracefully (e.g., show an error message to the user)
    }
  }
  
  useEffect(()=>{
    generateToken();
  },[cart]);

  const Form = () => {
    return(
    activeStep ===0 ? <AddressForm checkOutToken={checkOutToken} /> : <PaymentForm />
    )
  }

  function Confirmation() {
    return (
        <div>confirmation</div>
    )
  }

  return (
    <>
      <Container  sx={{ marginTop: "7rem" }} maxWidth="md" >
        <Paper elevation={4} square={false}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{
              padding: "3rem 0 2.5rem",
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkOutToken && <Form/>}
        </Paper>
      </Container>
    </>
  );
}

export default CheckOut;
