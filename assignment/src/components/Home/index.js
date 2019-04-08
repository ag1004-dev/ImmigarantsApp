import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Jumbotron, Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import "./styles.css";

const StyledJumbotron = styled(Jumbotron)`
  background: transparent;
  margin-top: 200px;
`;

const element = <FontAwesomeIcon icon={faCoffee} />


const Home = () => (
  <div className="app-wrapper">
  {/* -------------- Navbar ------------------------ */}
    <div className="header">
      <Navbar defaultActiveKey="/home" fixed="top" id="mainNavbar">
        <Container>
          <Navbar.Brand href="/home"><FontAwesomeIcon icon="coffee"/>IS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="justify-content-end">
                <Nav.Link href="/home" className="active">Home</Nav.Link>
              <Nav.Link href="#link">Lista</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  {/* -------------- Navbar ------------------------ */}
  {/* ------------------ Introdução -------------------- */}
      <StyledJumbotron>
        <Container className="mt-5 text-center justify-content-center">
          <h1>Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Um simples site onde você pode encontrar todas as informações necessárias sobre um estrangeiro no país.
          </p>
          <p>
          <Button href="#" variant="outline-primary my-4" size="lg">Prosseguir</Button>
          </p>
          <img src="" className="projectImage"></img>
          {/* <img variant="mt-5 mb-0" src="http://www.pngmart.com/files/4/Travel-PNG-Image.png"></img> */}
        </Container>
      </StyledJumbotron>
    {/* ------------------ Introdução -------------------- */}
    {/* ------------------ Sobre -------------------- */}
    <div id="aboutContent">
      <Container>
        <Row>
          <Col md={6}><img src="https://png2.kisspng.com/sh/30d3cc4fb4dafe5de8481a30c459fe34/L0KzQYm3UsE5N5x8iZH0aYP2gLBuTflvbpDsitN5aHnmPbr6jB1mfKNue595cnBtdbT7if9vNZRteeR9LYboc8X2kr11aZNxfeY2NXG7SYi3U8c2a2I1Tqk3N0m1RoK9WcgyPWI9UacBNUm8Q4iAUb5xdpg=/kisspng-infographic-isometric-projection-chart-vector-tablet-5a8970375c1067.7926169815189565993771.png" className="projectImage"></img></Col>
          <Col md={6} className="align-self-center">
            <p className="contentTitle">Sobre Immigrant Song</p>
            <p>Aqui você pode encontrar diversas informações sobre um estrangeiro no país,
              como data de entrada e saída, número de seu passaporte, nacionalidade, entre outras.
            </p>
          </Col>
        </Row>
        <Row className="mt-0">
          <Col md={6} className="align-self-center">
            <p className="contentTitle">Sobre este Projeto</p>
            <p>Esta plataforma foi desenvolvida como um trabalho integrado, para as disciplinas
              de Engenharia de Software 2 e Desenvolvimento Web. Durante o desenvolvimento deste trabalho, utilizamos todo nosso conhecimento adquirido
            durante o semestre, deixando nosso lado criativo fluir para a construção de um site simples e 
            atrativo.
            </p>
          </Col>
          {/* <Col md={6}><img src="http://hackncs.com/img/project.png" className="projectImage"></img></Col> */}
          <Col md={6}><img src="https://png2.kisspng.com/sh/e149439ca9b26b8bffa5ad148c61d692/L0KzQYm3VcExN6h9fZH0aYP2gLBuTgN1d5RwReJxb4Tyd8PokPh6NZR0heJAdHX1PbT2kwBwepJ5fZ9yZHXxhLr7mb1mdJZyfdD9LYP3ccXwjB5meqoyTdNvM3TncrPoUcQ5PGQzUKs5OUa1QIK4VcI2QWQ2TKc6NkazRnB3jvc=/kisspng-stock-photography-computer-corporate-identity-element-stationery-5af3ddbba14843.8909620115259314516606.png" className="projectImage"></img></Col>
        </Row>
        <Row>
          {/* <Col md={6}><img src="http://hackncs.com/img/team.png" className="projectImage"></img></Col> */}
          <Col md={6}><img className="projectImage" src="https://png2.kisspng.com/sh/d34c2f4ed6a6b607d2e879c218c79811/L0KzQYm3WMEzN6t8e5H0aYP2gLBuTfh2dZJzReRuc3B4grTsTf1idpJsfd9uboSwdMPwgvJjdJYygdDtdYP3gsq0gB9ueJJzRdp4bXWwgLFAhgJib5ZzjJ8AYkbpdoSBVMUybGc4TZC6NkO2R4SCVME2O2U1TqU9OUK2Q4a5TwBvbz==/kisspng-human-resource-management-dribbble-industry-compan-home-poweragent-5b6ff38451d635.1633739415340634923352.png"></img></Col>
          <Col md={6} className="align-self-center">
          <p className="contentTitle">Nossa Equipe</p>
          <p>Todos os integrantes do grupo fizeram parte de cada uma das atividades do projeto,
            trabalhando ao máximo para que esse projeto fosse algo criado por nós, deixando a marca
            de cada um e construindo algo que pudéssemos nos orgulhar.
          </p></Col>
        </Row>
      </Container>
    </div>
    {/* ------------------ Sobre -------------------- */}
  </div>
);

export default Home;
