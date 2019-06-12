import Conectar from '../../helpers/request';

export const fetchSucesso = (payload, query) => {
  return {
    type: "BUSCA_SUCESSO",
    payload,
    query
  };
}

export const fetchErro = res => {
  return {
    type: "BUSCA_ERRO",
    res: res
  };
}

export const fetch = query => {
  return (dispatch, getState) => {
    const api = new Conectar();
    const state = getState();
    
    const cachedResult = state.buscaReducer.cache.filter(item => item.query === query)[0];
    
    if(cachedResult){
      dispatch(fetchSucesso(cachedResult.payload, cachedResult.query));
      return;
    }

    
    if(query.length === 0){
      dispatch(fetchSucesso({
        albuns: {
          items: []
        }
      }, ""));
      return;
    }
    
    api
    .buscar(query)
    .then(res => {
        // console.log(res.data);
        dispatch(fetchSucesso(res.data, query));
      })
      .catch(erro => {
        dispatch(fetchErro(erro));
      })

  }
}