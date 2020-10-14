import React, { Component } from "react";
import CardNote from "../CardNote";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNote
                index={index}
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
