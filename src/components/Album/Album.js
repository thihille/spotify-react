import React, { Component } from "react";
import Autenticacao from "../../helpers/autenticacao";
// import AlbumTrackList from "../AlbumTrackList";
import styled from "styled-components";
import { Label, media } from "../../style";
// import BackButton from "../BackButton";
import { withRouter } from "react-router-dom";
import { resolvePath } from "../../helpers/pathHelper";
import Musicas from '../Musicas';

const notFoundPath = resolvePath('/assets/images/not-found.png');

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: end;
  width: 95%;
    ${media.tablet`
      width: 99%;
      position: absolute;
      top: 0;
      background-color: ${props => props.theme.backgroundColor};
      padding: 4%;
  `}
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  ${media.tablet`
    flex-flow: column;
  `}
`;

const AlbumLogoWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
  align-items: center;
  img {
    background-image: url(${notFoundPath});
    background-position-x: -94px;
    text-indent: -9999px;
    max-width: 400px;
  }
`;

const StyledLabel = styled(Label)`
  margin-top: 10px;
`;

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentWillMount() {
    const autenticar = new Autenticacao();
    autenticar.verificar();

    const { id } = this.props.match.params;

    this.props.buscarAlbum(id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  backButtonClick = () => {
    const { history } = this.props;

    if (window.audio) window.audio.pause();
    if (window.history.state && window.history.state.key) window.history.back();
    else history.push("/");
  };

  saveFavoriteAlbum = (id, name, artists, images) => {
    const jsonFavoriteAlbum = localStorage.getItem('favoriteAlbums');
    const favoriteAlbums = jsonFavoriteAlbum ? JSON.parse(jsonFavoriteAlbum) : [];

    const repeated = favoriteAlbums.map(item => item.id === id).filter(item => item === true);

    if (repeated.length === 0 || (repeated && repeated[0] === false)) {

      favoriteAlbums.push({
        id,
        name,
        artists,
        images
      });
      localStorage.setItem('favoriteAlbums', JSON.stringify(favoriteAlbums));
    }
  }

  render() {
    const { images, name, artists, id } = { ...this.props };

    const artist = artists !== undefined ? artists[0] : {};
    const largeImage = images !== undefined ? images[0] : {};

    // if (id && artists && images)
    //   this.saveFavoriteAlbum(id, name, artists, images);

    return (
      <div className="component-wrapper">
        <button className="back-button" onClick={this.backButtonClick}>
          Voltar
        </button>
        <div className="album-wrapper">
          <div>
            <img src={largeImage.url} width="100%" height="auto" />
            <p>{name}</p>
            <p>
              <small>
                {artist.name}
              </small>
            </p>
          </div>
          {<Musicas albumId={id} />}
        </div>
      </div>
    );
  }
}

export default withRouter(Album);