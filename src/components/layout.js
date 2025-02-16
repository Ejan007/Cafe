import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {/* Add top padding to push content below the fixed Navbar */}
        <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
