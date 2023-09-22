import { StrictMode } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./theme/providers/TehemeProvider";
import { Router } from "./components/router/Router";
import * as ReactDom from "react-dom/client";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDom.createRoot(element);

root.render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals();
