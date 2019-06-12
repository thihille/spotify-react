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

const RegularLabel = styled(Label)`
  font-size: ${props => props.theme.fontSize.regular};
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 3px;
  color: white;
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
        <RegularLabel>Resultados encontrados para "{query}"</RegularLabel>
        <div className="search__list">
          {this.props.albums.items.map(item => {
            return (
              <Link to={`/album/${item.id}`} key={item.id}>
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