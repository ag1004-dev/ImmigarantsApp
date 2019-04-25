import styled from "styled-components";
import { Navbar, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.div`
  font-size: 1.5em;
`;

export const Navbrand = styled(Navbar.Brand)`
  font-size: 1.5em;
`;

export const Navitem = styled(NavItem)`
  font-size: 25px;
  padding: 5px;
`;

export const FaIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
