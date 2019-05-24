import React, { Component } from "react";
import {
  Container,
  Tab,
  Tabs,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImmigrantActions } from "../../store/ducks/immigrants";

class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  render() {
    return (
      <Container className="mt-5">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Pesquise pelo Nome">
            <InputGroup className="mb-5">
              <FormControl
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  variant="outline-primary"
                  type="submit"
                  onChange={e => this.setState({ searchInput: e.target.value })}
                >
                  Buscar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Tab>
          <Tab eventKey="profile" title="Pesquise pelo Nome e Nacionalidade">
            <InputGroup>
              <FormControl
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon2"
              />
              {/* <InputGroup.Append>
                    <Button variant="outline-primary">Buscar</Button>
                </InputGroup.Append> */}
            </InputGroup>
            <InputGroup className="mt-4">
              <FormControl
                placeholder="Nacionalidade"
                aria-label="Nacionalidade"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-primary" type="submit">
                  Buscar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  immigrants: state.immigrants
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ImmigrantActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
