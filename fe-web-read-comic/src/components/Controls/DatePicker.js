import { TextField, createTheme } from "@mui/material";
import {
  DateTimePicker,
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";

const theme = createTheme();

const inputStyles = {
  "& .MuiFormControl-root": {
    width: "100%",
  },
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

export default function DatePicker(props) {
  const { name, label, formik, datetime, ...other } = props;
  return datetime ? (
    <DateTimePicker
      id={name}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={(value) => {
        formik.setFieldValue(name, value, false);
      }}
      sx={inputStyles}
    />
  ) : (
    <MuiDatePicker
      id={name}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={(value) => {
        formik.setFieldValue(name, value, false);
      }}
      // inputRef={() => <TextField fullWidth />}
    />
  );
}
