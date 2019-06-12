import Conectar from '../../helpers/request';

export const fetchAlbumByIdSucesso = (payload, query) => {
  return {
    type: "FETCH_ALBUM_BY_ID_SUCESSO",
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

export const fetchTrackByAlbumIdSucesso = (payload, query) => {
  return {
    type: "FETCH_TRACK_BY_ALBUM_ID_SUCESSO",
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
      .then(res => {
        // console.log(res);
        dispatch(fetchAlbumByIdSucesso(res.data, id));
      })
      .catch(erro => {
        dispatch(fetchAlbumByIdErro(erro));
      });
  };
};

export const buscarAudioDoAlbum = id => {
  return dispatch => {
    const api = new Conectar();

    if(id !== undefined){
      api
        .buscarMusicas(id)
        .then(res => {
          dispatch(fetchTrackByAlbumIdSucesso(res.data, id));
        })
        .catch(erro => {
          dispatch(fetchTrackByAlbumIdErro(erro));
        });

    }
  };
};