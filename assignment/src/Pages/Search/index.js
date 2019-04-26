import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import EnhancedTable from "../../components/DataTable";
import { Container, Table } from './styles';


export default class Search extends Component {
  render() {
    return (
      <Container>
        <TopBar />
        <Table />
      </Container>
    );
  }
}
