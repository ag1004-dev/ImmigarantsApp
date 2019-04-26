import React from "react";
import { InputGroup, FormControl, Container, Button } from "react-bootstrap";


const SearchBar = props => (
    <Container>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Nome e Sobrenome"
                aria-label="Nome e Sobrenome"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-primary">Buscar</Button>
            </InputGroup.Append>
        </InputGroup>
    </Container>
);

export default SearchBar;

    