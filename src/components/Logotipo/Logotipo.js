import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../../assets/img/spotify.png";
import { media } from "../../style";

const LogoSpotifyWrapper = styled.aside`
  width: 15%;
  max-width: 130px;
  padding: 5px;
  display: inline-flex;
  flex-flow: column;
  vertical-align: top;
  ${media.tablet`
    flex-flow: row;
    display:flex;
    width: auto;
  `}
`;

class LogoSpotify extends Component {
  render() {
    return (
      <LogoSpotifyWrapper>
        <img src={Icon} width="85" height="85" />
      </LogoSpotifyWrapper>
    );
  }
}

export default LogoSpotify;