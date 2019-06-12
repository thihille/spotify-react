import React, { Component } from "react";
import styled from "styled-components";
import { resolvePath } from "../../helpers/pathHelper";

const playSvgPath = resolvePath('/assets/images/play.svg');
const pauseSvgPath = resolvePath('/assets/images/pause.svg')



class Musicas extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.buscarAudioDoAlbum(this.props.albumId);
  }

  play = file => {
    if (window.audio === undefined || window.audio.src !== file) {
      window.audio = new Audio(file);
    }

    window.audio.play();
  };

  pause = () => {
    if (window.audio) window.audio.pause();
  };

  playAndPause = (item, evt) => {
    const target = evt.target.classList.contains("sound_track")
      ? evt.target
      : evt.target.closest(".sound_track");
    const isPlaying = target.classList.contains("active");

    document.querySelectorAll(".sound_track").forEach(item => {
      item.classList.remove("active");
    });

    this.pause();

    if (!isPlaying) {
      target.classList.add("active");
      this.play(item.preview_url);

      window.audio.onended = () => {
        target.classList.remove("active");
        window.audio = undefined;
      };
    }
  };

  render() {
    const { tracks } = { ...this.props };
    const listaObject = typeof tracks;
    return (
      <div>
        <ul>
          {
            listaObject === 'object' ? (
              tracks.items.map(item => (
              <li key={item.id} className="sound_track" onClick={() => this.playAndPause(item, event)} >
                <p>{item.name}</p>
                <p><small>
                  {item.duration_ms}
                </small></p>
              </li>
             ))
            ) : ''
        }
        </ul>
      </div>
    );
  }
}

export default Musicas;