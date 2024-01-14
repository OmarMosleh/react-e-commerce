import { Grid, TextField } from "@mui/material";

function FormField({ formik, required, name, type }) {
  // console.log(formik.values);
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <TextField
          variant="standard"
          id={name}
          name={name}
          label={name}
          type={type}
          required={required}
          onChange={formik.handleChange}
          value={formik.values[name]}
          fullWidth
        />
      </Grid>
    </>
  );
}

export default FormField;
