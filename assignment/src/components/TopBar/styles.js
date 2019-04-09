import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.div`
  font-size: 1.5em;
`;

export const Navbrand = styled(Navbar.Brand)`
  font-size: 1.5em;
`;

export const FaIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
