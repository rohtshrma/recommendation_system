import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import "./components/Home/style.css";
import Navbar from "./components/Navbar/Navbar";
import { QuestionProvider } from "./globalContext/globalState";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <Navbar />
        <App />
        <Footer />
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
