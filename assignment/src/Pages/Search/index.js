import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import EnhancedTable from "../../components/DataTable";
import { Container, Table } from './styles';
import SearchBar from "../../components/SearchBar"
import AdvancedSearch from "../../components/AdvancedSearch"


export default class Search extends Component {
  render() {
    return (
      <Container>
        <TopBar />
        <Container>
         <SearchBar></SearchBar>
         <AdvancedSearch></AdvancedSearch>
        </Container>
        <Table />
      </Container>
    );
  }
}
