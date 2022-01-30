import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./components/Home/style.css";
import { QuestionProvider } from "./globalContext/globalState";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
