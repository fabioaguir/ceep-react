import React, { Component } from "react";
import "./estilo.css";
//import deleteSVG from './../../assets/img/delete.svg';
import {ReactComponent as DeleteSVG} from './../../assets/img/delete.svg';

class CardNote extends Component {
  
  apagar() {
    const index = this.props.index;
    this.props.apagarNota(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src={deleteSVG}/> */}
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4  >
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNote;
