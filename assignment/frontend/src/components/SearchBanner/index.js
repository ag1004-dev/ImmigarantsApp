import React, { Component } from "react";
import { StyledJumbotron } from "./styles";
import { Container } from "react-bootstrap";
import AdvancedSearch from "../AdvancedSearch";

// import TableModal from "../TableModal";

class Banner extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
    };
}

  render() {
    return (
      <Container className="mt-5 text-center justify-content-center">
        <StyledJumbotron>
          <h1 className="align-self-center">Busque aqui informações sobre estrangeiros.</h1>
        </StyledJumbotron>
        <AdvancedSearch></AdvancedSearch>
    </Container>
    );
  }
}

export default Banner;
