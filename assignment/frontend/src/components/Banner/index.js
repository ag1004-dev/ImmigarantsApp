import React, { Component } from "react";
import { StyledJumbotron } from "./styles";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import bannerImage from "../../images/Travel-PNG-Image.png"
import {Img} from "./styles"
// import TableModal from "../TableModal";

class Banner extends Component {
  render() {
    return (
      <Container className="mt-5 text-center justify-content-center">
        <StyledJumbotron>
          <Img src={bannerImage}></Img>
          <h1 className="align-self-center">Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Uma simples plataforma onde você pode encontrar todas as informações
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
      {/* <TableModal></TableModal> */}
      </Container>
    );
  }
}

export default Banner;
