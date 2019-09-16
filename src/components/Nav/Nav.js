import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/tos">TOS</Link>
      <Link to="/privacy">PRIVACY</Link>
    </div>
  );
}
