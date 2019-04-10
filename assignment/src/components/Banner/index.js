import React, { Component } from "react";
import { StyledJumbotron, Img } from "./styles";
import { Button, Container } from "react-bootstrap";

class Banner extends Component {
  render() {
    return (
      <Container className="mt-5 text-center justify-content-center">
        <StyledJumbotron>
          {/* <Img
            variant="mt-5 mb-0"
            src="http://www.pngmart.com/files/4/Travel-PNG-Image.png"
            alt="imagem0"
          /> */}
          <h1>Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Um simples site onde você pode encontrar todas as informações
            necessárias sobre um estrangeiro no país.
          </p>
          <p>
            <Button href="#" variant="outline-primary my-4" size="lg">
              Prosseguir
            </Button>
          </p>
        </StyledJumbotron>
      </Container>
    );
  }
}

export default Banner;
