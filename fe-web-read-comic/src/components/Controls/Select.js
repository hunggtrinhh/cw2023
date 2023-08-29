import { MenuItem, TextField, createTheme } from "@mui/material";

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

export default function Select(props) {
  const { name, label, formik, options, multiple, ...other } = props;
  return (
    <TextField
      id={name}
      label={label}
      name={name}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...other}
      sx={inputStyles}
      fullWidth
      select
      SelectProps={{
        multiple: !!multiple,
        value: formik.values[name],
        onChange: formik.handleChange,
      }}
    >
      {options.map((item) => {
        return (
          <MenuItem key={item.key} value={item.key}>
            {item.title}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
