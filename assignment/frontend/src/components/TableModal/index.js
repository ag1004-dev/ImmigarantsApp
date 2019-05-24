import React from "react";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";
import "./styles.css";

class TableModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nome do Estrangeiro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={4}>
                <p className="title">Nome</p>
                <p>João Kleber</p>

              </Col>
              <Col xs={6} md={4}>
                <p className="title">Idade</p>
                <p>47</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="title">Gênero</p>
                <p>47</p>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={8}>
                <p className="title">Número do Passaporte</p>
                <p>465.3213.5543.32-0</p>

              </Col>
              <Col xs={6} md={4}>
                <p className="title">Nacionalidade</p>
                <p>Hungria</p>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={8}>
                <p className="title">Nome da mãe</p>
                <p>Joana Gonçalves</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="title">Nome do pai</p>
                <p>Maurício Gonçalves</p>
              </Col>

            </Row>

            <Row className="show-grid">
              <Col xs={6} md={8}>
                <p className="title">Data de Entrada</p>
                <p>01/03/2017</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="title">Data de Saída</p>
                <p>20/07/2018</p>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={8}>
                <p className="title">Tipo</p>
                <p>XXXXX</p>
              </Col>
            </Row>
            
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// class App extends React.Component {
//   constructor(...args) {
//     super(...args);

//     this.state = { modalShow: false };
//   }

//   render() {
//     let modalClose = () => this.setState({ modalShow: false });

//     return (
//       <ButtonToolbar>
//         <Button
//           variant="primary"
//           onClick={() => this.setState({ modalShow: true })}
//         >
//           Launch vertically centered modal
//         </Button>

//         <TableModal
//           show={this.state.modalShow}
//           onHide={modalClose}
//         />
//       </ButtonToolbar>
//     );
//   }
// }

// render(<App />);

export default TableModal;