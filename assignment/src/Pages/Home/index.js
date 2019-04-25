import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import JumboLeft from "../../components/JumboLeft";
import JumboRight from "../../components/JumboRight";
import Banner from "../../components/Banner";
import planeImg from "../../images/plane.png";
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
          source={planeImg}
        />
        <JumboRight
          title="Sobre este Projeto"
          text="Esta plataforma foi desenvolvida como um trabalho integrado, para as
            disciplinas de Engenharia de Software 2 e Desenvolvimento Web.
            Durante o desenvolvimento deste trabalho, utilizamos todo nosso
            conhecimento adquirido durante o semestre, deixando nosso lado
            criativo fluir para a construção de um site simples e atrativo."
          source="http://hackncs.com/img/project.png"
        />
        <JumboLeft
          title="Nossa Equipe"
          text="Todos os integrantes do grupo fizeram parte de cada uma das
            atividades do projeto, trabalhando ao máximo para que esse projeto
            fosse algo criado por nós, deixando a marca de cada um e construindo
            algo que pudéssemos nos orgulhar."
          source="http://hackncs.com/img/team.png"
        />
      </div>
    );
  }
}