import { Button, CssBaseline, Typography } from "@mui/material";
import { ThemeProviderMui } from "./material"
import theme from "./theme";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import LoadingFullscreen from "./LoadFullScreen";

const RootLayout = () =>{
    return (
    <ThemeProviderMui theme={theme}>
        <CssBaseline />
        <div style={{ padding: '20px' }}>
            {/* Sử dụng các component Material-UI */}
            <Typography variant="h1" gutterBottom>
                 Wellcone to My App = V3 in k8s duong thanh test
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is an example of using Material-UI with a custom dddd
            </Typography>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="contained" color="secondary">
                Secondary Button
            </Button>
         </div>
         <Suspense fallback={<LoadingFullscreen />}>
            <Outlet />
        </Suspense>
    </ThemeProviderMui>
    )
}

export default RootLayout;