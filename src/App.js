import React, { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ['Games', 'Música'],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novaArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novaArrayNotas,
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novaArraycCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state.categorias, categorias: novaArraycCategoria};
    this.setState(novoEstado);
  }

  deletarNota(index) {
    const arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} categorias={this.state.categorias}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
