import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import commerce from "../../../lib/commerce";
import { Link, useNavigate } from "react-router-dom";


function CheckOut({cart, error, checkoutHandler, order}) {
  const steps = ["Shipping Address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);
  const [checkOutToken,setCheckOutToken]= useState(null);
  const [shippingData, setShippingData]= useState({});
  const [isFinished, setIsFinished]=useState(false)
  const navigate = useNavigate();

  //generate toke
  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });
      setCheckOutToken(token);
    } catch (error) {
      console.error("Error generating token:", error);
      navigate("/")
      // Handle the error gracefully 
    }
  }
  //next function to handle next button

  const stepIncrease = ()=>{
    setActiveStep((prevStep) => prevStep + 1);
  } 
  const stepDecrease = ()=>{
    setActiveStep((prevStep)=> prevStep - 1);
  } 
  
  const next = (data) => {
    console.log(data);
    setShippingData(data);
    stepIncrease();
  };
  


  useEffect(()=>{
    generateToken();
  },[cart]);

  const Form = () => {
    return(
    activeStep ===0 ? <AddressForm checkOutToken={checkOutToken} next={next} /> : <PaymentForm checkOutToken={checkOutToken} shippingData={shippingData} stepIncrease={stepIncrease} stepDecrease={stepDecrease} checkoutHandler={checkoutHandler} timeOut={timeOut} />
    )
  }
  const timeOut = () => {
    setTimeout(()=>{
      setIsFinished(true);
    },5000)
  }

  function Confirmation() {
    if (order.customer) {
      return (
        <>
          <div>
            <Typography variant="h5">
              thank you for your Purchase, {order.customer.firstname} {order.customer.lastname}
            </Typography>
            <Divider />
            <Typography variant="subtitle2">shipping: {order.shipping.name}</Typography>
            <br />
            <Button variant="outlined" component={Link} to="/" type="button">
              back to Home!
            </Button>
          </div>
        </>
      );
    }
    // } else if (error) {
    //   return (
    //     <>
    //       <div>
    //         <Typography gutterBottom variant="h5">
    //           Error: {error}
    //         </Typography>
    //         <Divider />
    //         <Button component={Link} variant="outlined" to="/" sx={{ marginTop: "1rem" }}>
    //           Home Page
    //         </Button>
    //       </div>
    //     </>
    //   );
     else {
      return isFinished ? (
        <>
          <div>
            <Typography variant="h5" gutterBottom>
              {`thank you ${shippingData.FirstName} for your Purchase  .`}
            </Typography>
            <Divider />
            <br />
            <Typography variant="body1" gutterBottom>
              {`your order will be delivered in 10 days. we will be contacting you on your mail : ${shippingData.Email}`}
            </Typography>
            <Button variant="outlined" component={Link} to="/" type="button">
              back to Home!
            </Button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <CircularProgress />
          </div>
        </>
      );
    }
  }
  
  

  return (
    <>
      <Container  sx={{ marginTop: "7rem" }} maxWidth="md" >
        <Paper elevation={4} square={false} sx={{padding:"1rem"}}>
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
