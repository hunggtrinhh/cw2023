import { TextField, createTheme } from "@mui/material";

const theme = createTheme();

const inputStyles = {
  "& .MuiInputBase-input": {
    p: theme.spacing(1, 1.5),
  },
  "& .MuiFormLabel-root": {
    transform: `translate(${theme.spacing(1.5, 1).split(" ")}) scale(1)`,
  },
  "& .MuiFormLabel-root.Mui-focused, .MuiFormLabel-root.MuiFormLabel-filled": {
    transform: `translate(${theme.spacing(1.5, -1).split(" ")}) scale(0.75)`,
  },
};

export default function Input(props) {
  const { name, label, formik, ...other } = props;
  return (
    <TextField
      id={name}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...other}
      sx={inputStyles}
      fullWidth
    />
  );
}
