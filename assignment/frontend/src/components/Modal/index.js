import React, { Component } from "react";

import Modal from "react-modal";
import "./styles.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";

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
        <p className="close" onClick={this.handleHideModal}>
          x
        </p>
        <h1>Dados do Imigrante:</h1>
        <p>Nome: {modal.immigrant.nome}</p>
        <p>Data de Nascimento: {modal.immigrant.datanascimento}</p>
        <p>País de Origem: {modal.immigrant.pais}</p>
        <p>Passaporte: {modal.immigrant.passaporte}</p>
        <p>Nome do Pai: {modal.immigrant.nomepai}</p>
        <p>Nome da Mãe: {modal.immigrant.nomemae}</p>
        <p>Data de Entrada: {modal.immigrant.dataentrada}</p>
        <p>Data de Saída: {modal.immigrant.datasaida}</p>
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
