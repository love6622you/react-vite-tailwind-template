import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

const PureLayout = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PureLayout;
