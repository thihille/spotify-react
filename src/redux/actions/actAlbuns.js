import Conectar from '../../helpers/request';

export const fetchAlbumByIdSuccesso = (payload, query) => {
  return {
    type: "FETCH_ALBUM_BY_ID_SUCCESSO",
    payload,
    query
  };
};

export const fetchingAlbumById = () => {
  return {
    type: "FETCHING_ALBUM_BY_ID"
  };
};

export const fetchAlbumByIdErro = reason => {
  return {
    type: "FETCH_ALBUM_BY_ID_ERRO",
    reason: reason
  };
};

export const fetchTrackByAlbumIdSuccesso = (payload, query) => {
  return {
    type: "FETCH_TRACK_BY_ALBUM_ID_SUCCESSO",
    payload,
    query
  };
};

export const fetchingTrackByAlbumId = () => {
  return {
    type: "FETCHING_TRACK_BY_ALBUM_BY_ID"
  };
};

export const fetchTrackByAlbumIdErro = reason => {
  return {
    type: "FETCH_TRACK_BY_ALBUM_ID_ERRO",
    reason: reason
  };
};

export const reset = () => {
  return dispatch => {
    dispatch({
      type: 'RESET_ALBUM'
    });
  }
}

export const buscarAlbum = id => {
  return dispatch => {
    const api = new Conectar();

    dispatch(fetchingAlbumById());

    api
      .buscarAlbum(id)
      .then(result => {
        dispatch(fetchAlbumByIdSuccesso(result.data, id));
      })
      .catch(reason => {
        dispatch(fetchAlbumByIdErro(reason));
      });
  };
};

export const buscarAudioDoAlbum = id => {
  return dispatch => {
    const api = new Conectar();

    api
      .buscarAudioDoAlbum(id)
      .then(result => {
        dispatch(fetchTrackByAlbumIdSuccesso(result.data, id));
      })
      .catch(reason => {
        dispatch(fetchTrackByAlbumIdErro(reason));
      });
  };
};