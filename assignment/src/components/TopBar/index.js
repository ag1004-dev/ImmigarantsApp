import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Header, Navbrand, FaIcon } from "./styles";

const TopBar = () => (
  <Header>
    <Navbar
      defaultActiveKey="/home"
      fixed="top"
      id="mainNavbar"
      variant="light"
    >
      <Container>
        <Navbrand href="/home">
          <FaIcon icon={faAddressCard} />
          Immigrant Song
        </Navbrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify-content-end">
          <Nav.Link href="/home" className="active">
            Home
          </Nav.Link>
          <Nav.Link href="#link">Buscador</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Header>
);

export default TopBar;
