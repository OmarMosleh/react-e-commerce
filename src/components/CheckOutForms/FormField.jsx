// import { Grid } from "@mui/material"
// import { useFormik } from "formik"

// function FormField({required, name, type}) {
//     const formik = useFormik({
//             initialValues: {
//               country: "",
//               city: "",
//               street: "loran",
//               email: "",
//             },
//         onSubmit: values => {
//           alert(JSON.stringify(values, null, 2));
//         },
//       });
//   return (
    
//     <>
//         <Grid item xs={12} md={6} lg={6} >
//         <label htmlFor={name}>{name}</label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         onChange={formik.handleChange}
//         value={formik.values[name]}
//       />
//         </Grid> 
//     </>
//   )
// }

// export default FormField
// import { Grid } from "@mui/material";
// import { useFormik } from "formik";

// function FormField({formik, required, name, type }) {

//   return (
//     <>
//       <Grid item xs={12} md={6} lg={6}>
//         <label htmlFor={name}>{name}</label>
//         <input
//           id={name}
//           name={name}
//           type={type}
//           onChange={formik.handleChange}
//           value={formik.values[name]} // Access the correct value using the field name
//         />
//       </Grid>
//     </>
//   );
// }

// export default FormField;
import { Grid,TextField } from '@mui/material';

function FormField({ formik, required, name, type }) {
  return (
    <>
      <Grid item xs={12}sm={6} md={6} lg={6}>
      <TextField
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
