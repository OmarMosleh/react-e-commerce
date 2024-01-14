import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Container,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import commerce from "./../../lib/commerce";
import FormField from "./FormField";

function AddressForm({ checkOutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivsion] = useState("");

  const getCountries = async (checkOutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkOutTokenId
      );
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const getSubdivisions = async (countryCode) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );
      setShippingSubdivisions(subdivisions);
      setShippingSubdivsion(Object.keys(subdivisions)[0]);
    } catch (error) {
      console.log("error fetching subdivision", error);
    }
  };
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, label]) => ({ id: code, name: label })
  );
  useEffect(() => {
    getCountries(checkOutToken.id);
  }, []);

  useEffect(() => {
    shippingCountry && getSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      country: shippingCountry,
      city: shippingSubdivision,
    });
  }, [shippingCountry, shippingSubdivision]);

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Street: "",
      Email: "",
      ZIPcode: "",
      country: shippingCountry,
      city: shippingSubdivision,
    },
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <>
      <Container>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <FormField formik={formik} required name="FirstName" type="text" />
            <FormField formik={formik} required name="LastName" type="text" />
            <FormField
              formik={formik}
              required
              name="PhoneNumber"
              type="text"
            />
            <FormField formik={formik} required name="Street" type="text" />
            <FormField formik={formik} required name="Email" type="email" />
            <FormField formik={formik} name="ZIPcode" type="text" />
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputLabel id="country">Country *</InputLabel>
              <Select
                value={formik.values.country}
                name="country"
                onChange={(e) => {
                  setShippingCountry(e.target.value);
                  formik.handleChange(e);
                }}
                labelId="country"
                fullWidth
                variant="standard"
              >
                {Object.entries(shippingCountries).map(([id, name]) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <InputLabel id="subdivision">City / Subdivision *</InputLabel>
              <Select
                value={formik.values.city}
                name="city"
                onChange={(e) => {
                  setShippingSubdivsion(e.target.value);
                  formik.handleChange(e);
                }}
                labelId="subdivision"
                fullWidth
                variant="standard"
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button
              color="error"
              sx={{ margin: "2rem 0.5rem 1rem" }}
              component={Link}
              to="/cart"
            >
              Back to Cart
            </Button>
            <Button
              color="primary"
              sx={{ marginTop: "2rem", marginBottom: "1rem" }}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default AddressForm;
