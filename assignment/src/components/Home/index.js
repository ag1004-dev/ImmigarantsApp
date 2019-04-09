import React, { Component } from "react";
import TopBar from "../TopBar";
import JumboLeft from "../JumboLeft";
import JumboRight from "../JumboRight";
import Banner from "../Banner";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Banner />
        <JumboLeft
          title="Sobre Immigrant Song"
          text="Aqui você pode encontrar diversas informações sobre um estrangeiro no
            país, como data de entrada e saída, número de seu passaporte,
            nacionalidade, entre outras."
          source="https://png2.kisspng.com/sh/30d3cc4fb4dafe5de8481a30c459fe34/L0KzQYm3UsE5N5x8iZH0aYP2gLBuTflvbpDsitN5aHnmPbr6jB1mfKNue595cnBtdbT7if9vNZRteeR9LYboc8X2kr11aZNxfeY2NXG7SYi3U8c2a2I1Tqk3N0m1RoK9WcgyPWI9UacBNUm8Q4iAUb5xdpg=/kisspng-infographic-isometric-projection-chart-vector-tablet-5a8970375c1067.7926169815189565993771.png"
        />
        <JumboRight
          title="Sobre este Projeto"
          text="Esta plataforma foi desenvolvida como um trabalho integrado, para as
            disciplinas de Engenharia de Software 2 e Desenvolvimento Web.
            Durante o desenvolvimento deste trabalho, utilizamos todo nosso
            conhecimento adquirido durante o semestre, deixando nosso lado
            criativo fluir para a construção de um site simples e atrativo."
          source="https://png2.kisspng.com/sh/e149439ca9b26b8bffa5ad148c61d692/L0KzQYm3VcExN6h9fZH0aYP2gLBuTgN1d5RwReJxb4Tyd8PokPh6NZR0heJAdHX1PbT2kwBwepJ5fZ9yZHXxhLr7mb1mdJZyfdD9LYP3ccXwjB5meqoyTdNvM3TncrPoUcQ5PGQzUKs5OUa1QIK4VcI2QWQ2TKc6NkazRnB3jvc=/kisspng-stock-photography-computer-corporate-identity-element-stationery-5af3ddbba14843.8909620115259314516606.png"
        />
        <JumboLeft
          title="Nossa Equipe"
          text="Todos os integrantes do grupo fizeram parte de cada uma das
            atividades do projeto, trabalhando ao máximo para que esse projeto
            fosse algo criado por nós, deixando a marca de cada um e construindo
            algo que pudéssemos nos orgulhar."
          source="https://png2.kisspng.com/sh/d34c2f4ed6a6b607d2e879c218c79811/L0KzQYm3WMEzN6t8e5H0aYP2gLBuTfh2dZJzReRuc3B4grTsTf1idpJsfd9uboSwdMPwgvJjdJYygdDtdYP3gsq0gB9ueJJzRdp4bXWwgLFAhgJib5ZzjJ8AYkbpdoSBVMUybGc4TZC6NkO2R4SCVME2O2U1TqU9OUK2Q4a5TwBvbz==/kisspng-human-resource-management-dribbble-industry-compan-home-poweragent-5b6ff38451d635.1633739415340634923352.png"
        />
      </div>
    );
  }
}