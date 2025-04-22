import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router";


export default function AppLayout() {
  return (
    <div className="app-layout flex flex-col h-screen text-white relative w-[90%] mx-auto border-1 border-green-500 shadow-md  bg-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

