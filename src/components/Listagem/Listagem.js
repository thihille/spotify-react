import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Label, media } from "../../style";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  ${media.tablet`
    justify-content: space-around;
  `}
`;

const Rotulo = styled.span`
  ${props => props.theme.fontesProjeto.resultadoBusca}
  padding:10px 0;
  display:block;
  ${media.tablet`
    margin-top: 20px;
    margin-bottom: 0;
  `}
`;

class Listagem extends Component {
  render() {
    const { albums, query } = this.props;

    return albums.items.length > 0 ? (
      <div>
        <Rotulo>Resultados encontrados para "{query}"</Rotulo>
        <div className="search__list">
          {this.props.albums.items.map(item => {
            return (
              <Link to={`/album/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                <div>
                  <img src={item.images[1].url} width={200} height={200} />
                  <h4>
                    {item.name}
                  </h4>
                  <p>
                    {item.artists[0].name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    ) : (
      <span />
    );
  }
}

export default Listagem;