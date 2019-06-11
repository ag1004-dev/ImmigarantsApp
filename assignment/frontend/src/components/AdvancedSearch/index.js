import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Button,
  Tab,
  Row,
  Col,
  Nav
} from "react-bootstrap";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImmigrantActions } from "../../store/ducks/immigrants";

class AdvancedSearch extends Component {
  state = {
    nameInput: "",
    countryInput: "",
    passInput: "",
    dateInput: "",
    exitInput: "",
    genderInput: "",
    ageInput: "",
  };

  handleSubmitByName = e => {
    e.preventDefault();
    if (this.state.nameInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchImmigrantByNameRequest(this.state.nameInput);
    }
  };

  handleSubmitEntrance = e => {
    e.preventDefault();
    if (this.state.dateInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchByEntranceRequest(this.state.dateInput);
    }
  };

  handleSubmitExit = e => {
    e.preventDefault();
    if (this.state.exitInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchByExitRequest(this.state.exitInput);
    }
    
  }

  handleSubmitGender = e => {
    e.preventDefault();
    if (this.state.genderInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchByGenderRequest(this.state.genderInput);
    }
  };

  handleSubmitAge = e => {
    e.preventDefault();
    if (this.state.ageInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchByAgeRequest(this.state.ageInput);
    }
  };

  handleSubmitNameCountry = e => {
    e.preventDefault();

    const {
      clearImmigrantData,
      searchImmigrantByNameRequest,
      searchNameCountryRequest,
      searchByCountryRequest
    } = this.props;

    if (this.state.nameInput === "" && this.state.countryInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      if (this.state.nameInput !== "" && this.state.countryInput !== "") {
        clearImmigrantData();
        searchNameCountryRequest(this.state.nameInput, this.state.countryInput);
      } else if (this.state.nameInput === "") {
        clearImmigrantData();
        searchByCountryRequest(this.state.countryInput);
      } else {
        clearImmigrantData();
        searchImmigrantByNameRequest(this.state.nameInput);
      }
    }
  };

  handleSubmitPass = e => {
    e.preventDefault();
    if (this.state.passInput === "") {
      toast.error("Preencha os campos!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
    } else {
      this.props.clearImmigrantData();
      this.props.searchByPk(this.state.passInput);
    }
  };

  render() {
    return (
      <Container className="mt-5 pt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {/* <Nav.Item>
                  <Nav.Link eventKey="first">Pesquise pelo nome</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Pesquise pelo nome ou nacionalidade
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Pelo número do passaporte
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Pela data de entrada</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Pela data de saída</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    Pelo gênero
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    Pela idade
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="second">
                  <InputGroup className="">
                    <FormControl
                      placeholder="Nome"
                      aria-label="Nome"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ nameInput: e.target.value })
                      }
                    />
                  </InputGroup>
                  <InputGroup className="mt-4">
                    <FormControl
                      placeholder="Nacionalidade"
                      aria-label="Nacionalidade"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ countryInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitNameCountry(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Número do passaporte"
                      aria-label="Número do passaporte"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ passInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitPass(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Data de entrada no país"
                      aria-label="Data de entrada no país"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ dateInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitEntrance(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="fifth"
                  // className="d-flex align-items-center justify-content-center"
                >
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Data de saída do país"
                      aria-label="Data de saída do país"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ exitInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitExit(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="sixth"
                  // className="d-flex align-items-center justify-content-center"
                >
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Gênero (masculino ou feminino)"
                      aria-label="Gênero"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ genderInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitGender(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="seventh"
                  className="d-flex align-items-center justify-content-center"
                >
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Idade"
                      aria-label="Idade"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ ageInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmitAge(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
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
)(AdvancedSearch);
