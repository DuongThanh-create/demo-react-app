import { Dangerous } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: '#1976d2',  // Màu chính
        },
        secondary: {
          main: '#f50057',  // Màu phụ
        },
      },
      typography: {
        h1: {
          fontSize: '2rem',
        },
        body1: {
          fontSize: '1rem',
        },
      },
  });
  
  export default theme