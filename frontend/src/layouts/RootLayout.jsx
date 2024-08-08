import { Outlet } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import createAppTheme from "../theme";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <ThemeProvider theme={createAppTheme("dark")}>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Outlet />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default RootLayout;
