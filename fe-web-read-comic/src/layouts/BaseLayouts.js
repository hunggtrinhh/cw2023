import { Box, createTheme } from "@mui/material";
import Header from "./Header";

const theme = createTheme();

const baseLayoutStyles = {
  "& #before_content": theme.mixins.toolbar,
};

export default function BaseLayouts({ children }) {
  console.log(theme.mixins.toolbar);
  return (
    <Box sx={baseLayoutStyles}>
      <Header />
      <Box id="before_content"></Box>
      {children}
    </Box>
  );
}
