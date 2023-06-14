import React from "react";
import logo from "./../assets/Images/logo.png";
import { Navbar, Nav, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


// Navbar Sayfası
function Header() {
  return (
    <div>
      <Navbar expand="md px-5 p-4" className="font-poppins">
        <img src={logo} alt="Logo" className="logo mr-4"/>
        <Nav className="mr-auto" navbar>
          <NavItem className="px-5">
            <a href="#" className="nav-link text-black">
              Hakkımızda
            </a>
          </NavItem>
          <NavItem className="px-5">
            <a href="#" className="nav-link text-black">
              Jüri-Yarışma Yazılımı
            </a>
          </NavItem>
          <NavItem className="px-5">
            <a href="#" className="nav-link text-black">
              Word Ninja
            </a>
          </NavItem>
          <NavItem className="px-5">
            <a href="#" className="nav-link text-black">
              Word Pyramids
            </a>
          </NavItem>
        </Nav>
        <div className="social-media">
          <a href="#" className="mr-2 p-1">
            <FaYoutube />
          </a>
          <a href="#" className="mr-2 p-1">
            <FaInstagram />
          </a>
          <a href="#" className="mr-2 p-1">
            <FaTwitter />
          </a>
          <a href="#" className="p-1">
            <FaLinkedin />
          </a>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
