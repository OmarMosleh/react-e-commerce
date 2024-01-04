import React from 'react';
import { Grid, Typography,Button,Container } from '@mui/material';
import { useFormik } from 'formik';
import FormField from './FormField';

function AddressForm() {
  const formik = useFormik({
    initialValues: {
      country: '',
      city: '',
      street: 'loran',
      email: '',
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
          <FormField formik={formik} required name="country" type="text" />
          <FormField formik={formik} name="city" type="text" />
          <FormField formik={formik} required name="street" type="text" />
          <FormField formik={formik} required name="email" type="email" />
        </Grid>
        <Button color="primary" sx={{marginTop:"2rem",marginBottom:"1rem"}}   type="submit">Submit</Button>
      </form>
    </Container>
    </>
  );
}

export default AddressForm;
