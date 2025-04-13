import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function Layout({ children }) {
  return (
    <div className="layout min-h-screen w-[90%] bg-red-400 ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
