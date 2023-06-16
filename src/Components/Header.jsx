import React from "react";
import logo from "./../assets/Images/logo.png";
import { Navbar, Nav, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaYoutube, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

// Navbar Sayfası
function Header() {
  return (
    <div>
      <Navbar expand="md px-5 p-4" className="font-poppins mt-3">
        <img src={logo} alt="Logo" className="logo mr-4" />
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
          <a
            href="https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw"
            target="_blank"
            className="mr-2 p-1"
            style={{ width: "18px", height: "18px" }}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/mobilerast/"
            target="_blank"
            className="mr-2 p-1"
            style={{ width: "18px", height: "18px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.behance.net/rastmobile"
            target="_blank"
            className="mr-2 p-1"
            style={{ width: "18px", height: "18px" }}
          >
            <FaBehance />
          </a>
          <a
            href="https://www.linkedin.com/company/rastmobile/"
            target="_blank"
            className="p-1"
            style={{ width: "18px", height: "18px" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
