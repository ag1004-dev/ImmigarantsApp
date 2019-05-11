import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import EnhancedTable from "../../components/DataTable";
import { Container, Table } from './styles';
import SearchBar from "../../components/SearchBar"
import AdvancedSearch from "../../components/AdvancedSearch"
import SearchBanner from "../../components/SearchBanner"
import { Card } from "react-bootstrap";

export default class Search extends Component {
  render() {
    return (
      <Container>
        <TopBar/>
        <SearchBanner></SearchBanner>
        {/* <SearchBar></SearchBar> */}
         {/* <AdvancedSearch></AdvancedSearch> */}
        <Table />
      </Container>
    );
  }
}
