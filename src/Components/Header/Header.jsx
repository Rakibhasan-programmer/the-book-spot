import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="drop-shadow-lg py-5">
        <Navbar.Brand
          href="/"
        >
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
          <Navbar.Link href="/home">
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
          >
            About
          </Navbar.Link>
          <Navbar.Link href="/store">Store</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
