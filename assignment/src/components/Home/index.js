import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import "./styles.css";

const Home = () => (
  <div className="app-wrapper">
    <h1>Bem vindo ao Imigrant Song</h1>
    <Button className="primary">Prosseguir</Button>
  </div>
);

export default Home;
