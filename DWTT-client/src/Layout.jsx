import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function Layout({ children }) {
  return (
    <div className="layout min-h-screen w-full md:w-[80%] lg:w-[90%] mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
