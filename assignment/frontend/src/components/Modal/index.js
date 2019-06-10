import React, { Component } from "react";

import Modal from "react-modal";
import "./styles.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Button, Container} from "react-bootstrap";

import "./styles.css";

Modal.setAppElement(document.getElementById("root"));

class ModalImm extends Component {
  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  render() {
    const { modal } = this.props;
    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Immigrant Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <Container>
          </Container>
          <p className='close' onClick={this.handleHideModal}>x</p>
          <h1>Dados do Imigrante:</h1>
          <p><span>Nome:</span>   {modal.immigrant.nome}</p>
          <p><span>Data de Nascimento:</span>   {modal.immigrant.datanascimento}</p>
          <p><span>País de origem:   </span> {modal.immigrant.pais}</p>
          <p><span>Passaporte:   </span> {modal.immigrant.passaporte}</p>
          <p><span>Nome do pai:   </span>{modal.immigrant.nomepai}</p>
          <p><span>Nome da mãe:   </span>{modal.immigrant.nomemae}</p>
          <p><span>Data de Entrada:   </span>{modal.immigrant.dataentrada}</p>
          <p><span>Data de saída:   </span>{modal.immigrant.datasaida}</p>
        {/* </Container> */}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalImm);
