import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="lg:max-w-[1200px]  mx-auto mb-[160px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
