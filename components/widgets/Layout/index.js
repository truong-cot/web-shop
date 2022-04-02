import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, isShowHeader = true, isShowFooter = true }) {
  return (
    <div>
      {isShowHeader && <Header />}
      {children}
      {isShowFooter && <Footer />}
    </div>
  );
}

export default Layout;
