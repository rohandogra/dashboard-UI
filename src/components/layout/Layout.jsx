import React from "react";
import "./Navbar.scss";
function Layout(props) {
  return <div className="layout__main">{props.children}</div>;
}

export default Layout;
