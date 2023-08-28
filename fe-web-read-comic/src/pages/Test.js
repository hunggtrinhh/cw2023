import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Controls from "../components/Controls/Controls";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Test() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values));
    },
  });

  const options = [
    { key: '1', title: '1' },
    { key: '2', title: '2' },
    { key: '3', title: '3' },
  ];

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Grid container spacing={1} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <Controls.Input name="email" label="Email" formik={formik} />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select
              name="password"
              label="Password"
              formik={formik}
              options={options}
            />
          </Grid>
          <Grid item xs={12}>
            <button type="submit">submit</button>
            <button type="reset">reset</button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}