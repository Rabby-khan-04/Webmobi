import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <header className="py-6 shadow-lg">
      {/* NavBar */}
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-4xl text-darkBlue font-poppins font-semibold">
          Incubyte
        </h1>
        {/* Site Menu */}
        <ul className="hidden lg:flex items-center gap-3 navItem">
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Our Expertise</Link>
          </li>
          <li>
            <Link to="/">Success Stories</Link>
          </li>
          <li>
            <Link to="/">Contuct us</Link>
          </li>
        </ul>{" "}
        <DropDown />
      </nav>
    </header>
  );
};

export default Navbar;
