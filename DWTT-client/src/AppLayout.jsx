import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

