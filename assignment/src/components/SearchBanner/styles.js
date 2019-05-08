import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledJumbotron = styled(Jumbotron)`
  background-color: transparent !important;
  margin-top: 250px;
  // height: 100vh;
`;

export const Img = styled.img`
  padding: 50px;
`;

export const FaIcon = styled(FontAwesomeIcon)`
  font-size: 1.8em;
`;