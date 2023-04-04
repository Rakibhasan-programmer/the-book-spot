import { Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="drop-shadow-lg py-5">
        <Navbar.Brand to={'/'}>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The Book Spot
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Link to={"store"}>
            <Navbar.Link>Store</Navbar.Link>
          </Link>
          <Link to={"about"}>
            <Navbar.Link>About</Navbar.Link>
          </Link>
          <Link to={"contact"}>
            <Navbar.Link>Contact</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
