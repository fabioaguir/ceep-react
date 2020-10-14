import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      const nomeCategoria = e.target.value;
      this.props.adicionarCategoria(nomeCategoria);
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          onKeyUp={this._handleEventoInput.bind(this)}
          placeholder="Adicionar Categoria"
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
