import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Img, Title } from "./styles";

const JumboRight = props => (
  <Container> 
    <Row>
      <Col md={6} className="align-self-center">
        <Title>{props.title}</Title>
        <p>{props.text}</p>
      </Col>
      <Col md={6}>
        <Img src={props.source} alt="imagem2" />
      </Col>
    </Row>
  </Container>
);

export default JumboRight;
