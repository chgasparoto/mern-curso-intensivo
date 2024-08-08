import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NavBar from "../components/NavBar";
import ThemeContextProvider from "../contexts/ThemeContext";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Outlet />
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default RootLayout;
