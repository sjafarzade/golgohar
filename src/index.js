import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import RTL from "./components/RTL.jsx";

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RTL>
        <App />
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
