import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import Header from "../static/Header";
import Footer from "../static/Footer";
import style from "./style.module.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.container}>
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
