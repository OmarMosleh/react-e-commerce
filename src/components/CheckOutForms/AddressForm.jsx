import { useState, useEffect } from 'react';
import { Grid, Typography,Button,Container,Select,MenuItem,  } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import commerce from "./../../lib/commerce";
import FormField from './FormField';

function AddressForm({checkOutToken}) {
const [shippingCountries,setShippingCountries]=useState([]);
const [shippingCountry,setShippingCountry]=useState("");
const [shippingSubdivisions,setShippingSubdivisions]=useState([]);
const [shippingSubdivision,setShippingSubdivsion]=useState("");
const [shippingOptions,setShippingOptions]=useState([]);
const [shippingOption,setShippingOption]=useState("");

const getCountries = async (checkOutTokenId) => {
  try {
    const { countries } = await commerce.services.localeListShippingCountries(checkOutTokenId);
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0]);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

useEffect(()=>{
  getCountries(checkOutToken.id);
},[]);

  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Street: '',
      Email: '',
      ZIPcode:'',
      country:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <Container >  
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <FormField formik={formik} required name="FirstName" type="text" />
          <FormField formik={formik} required name="LastName" type="text" />
          <FormField formik={formik} required name="PhoneNumber" type="text" />
          <FormField formik={formik} required name="Street" type="text" />
          <FormField formik={formik} required name="Email" type="email" />
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <InputLabel id="country">country*</InputLabel>
          <Select
          value={shippingCountry}
          onChange={(e)=>{setShippingCountry(e.target.value)}}
          labelId="country"
          fullWidth
          variant="standard"
          
        >
          {
            Object.entries(shippingCountries).map(([id,name])=>(
              <MenuItem key={id} value={id}>{name}</MenuItem>
              ))
            }
        </Select>
          </Grid>
            <FormField formik={formik}  name="ZIPcode" type="text" />
        </Grid>
        <Button color="primary" sx={{marginTop:"2rem",marginBottom:"1rem"}}   type="submit">Submit</Button>
      </form>
    </Container>
    </>
  );
}

export default AddressForm;
