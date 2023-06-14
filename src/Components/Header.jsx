import React from "react";
import logo from "./../assets/Images/logo.png";
import { Navbar, Nav, NavItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

// Navbar Sayfası
function Header() {
  return (
    <div>
      <Navbar expand="md">  
        <img src={logo} alt="Logo" />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <a href="#" className="nav-link">Hakkımızda</a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link">Jüri-Yarışma Yazılımı</a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link">Word Ninja</a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link">Word Pyramids</a>
          </NavItem>
        </Nav>
        <div className="social-media">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
