import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from "@mui/material";

export default function RadioGroup(props) {
  const { name, label, options, formik, ...other } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        {...other}
      >
        {options.map(({ key, title }) => {
          return (
            <FormControlLabel
              key={key}
              value={key}
              control={<Radio />}
              label={title}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
}
