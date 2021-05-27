import { Header } from "./partial/Header";
import { Footer } from "./partial/Footer";

import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
