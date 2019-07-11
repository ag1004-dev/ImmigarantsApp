import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import ModalImm from '../../components/Modal'
import { Container, Table } from "./styles";
import SearchBanner from "../../components/SearchBanner";;

export default class Search extends Component {
  render() {
    return (
      <Container>
        <TopBar />
        <SearchBanner />
        <Table />
        <ModalImm />
      </Container>
    );
  }
}
