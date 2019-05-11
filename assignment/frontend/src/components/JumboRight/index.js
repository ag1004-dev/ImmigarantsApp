import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Img, Title, Text } from "./styles";

const JumboRight = props => (
  <Container> 
    <Row>
      <Col md={6} className="align-self-center">
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Col>
      <Col md={6} className="align-self-center">
        <Img src={props.source} alt="imagem2" />
      </Col>
    </Row>
  </Container>
);

export default JumboRight;
