import React, { Component } from "react";
import { StyledJumbotron } from "./styles";
import { Link } from "react-router-dom";
import { Button, Container, Collapse } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "./styles";
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
    const { open } = this.state;
    return (
      <Container className="mt-5 text-center justify-content-center">
        <StyledJumbotron>
          <h1 className="align-self-center">Busque aqui informações sobre estrangeiros.</h1>
        </StyledJumbotron>
        <AdvancedSearch></AdvancedSearch>
            {/* <Button
                onClick={() => this.setState({ open: !open })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            <FaIcon icon={faSearch} />
        </Button> */}

        {/* <Collapse in={this.state.open}>
            <div id="example-collapse-text">
        </div>
        </Collapse> */}
    </Container>
    );
  }
}

export default Banner;
