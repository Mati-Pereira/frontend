import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        {console.log()}
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
