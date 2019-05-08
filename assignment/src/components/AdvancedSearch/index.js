import React from "react";
import { InputGroup, FormControl, Container, Button } from "react-bootstrap";


const AdvancedSearch = props => (
    <Container>
        <InputGroup className="my-5">
            <FormControl
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-primary">Buscar</Button>
            </InputGroup.Append>
        </InputGroup>
        <InputGroup className="my-5">
            <FormControl
                placeholder="Nacionalidade"
                aria-label="Nacionalidade"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-primary">Buscar</Button>
            </InputGroup.Append>
        </InputGroup>
    </Container>
);

export default AdvancedSearch;

