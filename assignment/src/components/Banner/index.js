import React, { Component } from "react";
import { StyledJumbotron } from "./styles";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

class Banner extends Component {
  render() {
    return (
      <Container className="mt-5 text-center justify-content-center">
        <StyledJumbotron>
          <h1 className="align-self-center">Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Um simples site onde você pode encontrar todas as informações
            necessárias sobre um estrangeiro no país.
          </p>
          <p>
            <Link to="/search">
              <Button variant="outline-primary my-4" size="lg">
                Prosseguir
              </Button>
            </Link>
          </p>
        </StyledJumbotron>
      </Container>
    );
  }
}

export default Banner;
