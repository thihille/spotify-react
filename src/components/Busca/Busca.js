import React, { Component } from 'react';
import styled from 'styled-components';
import Listagem from '../Listagem/Listagem';
import {Input,media} from "../../style";

export const InputBuscar = styled(Input)
  `
  font-size: ${props => props.theme.fontSize.greater};
  ${
  media.tablet`
      font-size: ${props => props.theme.fontSize.mobileGreater}
      margin: 0 5px;
      width: auto;
    `
  }
`;

class Busca extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: this.props.query
    }
  }

  buscar = evento => {
    const value = evento.target.value;
    this.setState({
      query: value
    })
    this.props.fetch(value);
  }

  render(){
    return (
      <div>
        <label>Busque por artistas, álbuns ou músicas</label>
        <InputBuscar placeholder="Comece a escrever..." onChange={this.search} type="search" value={this.state.query}/>

        {
          this.props.albums.items.length > 0 ? (
            <Listagem albums={this.props.albums} query={this.state.query} />
          ) : this.state.query === 0 ? 'Album favorito' : <p>Nenhum resultado encontrado</p>
        }

      </div>
    )
  }

}

export default Busca;