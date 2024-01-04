import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

function CheckOut() {
  const steps = ["Shipping Address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => {
    return(
    activeStep ===0 ? <AddressForm /> : <PaymentForm />
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
        <Paper elevation="4" square={false}>
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
          {activeStep === steps.length ? <Confirmation /> : <Form/>}
        </Paper>
      </Container>
    </>
  );
}

export default CheckOut;
