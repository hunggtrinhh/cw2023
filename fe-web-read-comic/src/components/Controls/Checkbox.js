import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox as MuiCheckbox,
} from "@mui/material";

export default function Checkbox(props) {
  const { name, label, formik, color, ...other } = props;
  return (
    <FormControl error={formik.touched[name] && Boolean(formik.errors[name])}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={formik.values[name]}
            color={color ? color : "primary"}
            name={name}
            onChange={formik.handleChange}
          />
        }
        label={label}
      />
      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText>
          {formik.touched[name] && formik.errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
}
