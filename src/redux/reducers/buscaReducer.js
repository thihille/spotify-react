export const buscaReducer = (
  state = {
      query: '',
      cache: [],
      albums: { items: [] }
  }, action) => {
  switch (action.type) {
      case 'BUSCA_SUCCESSO':
          state.cache.push({ query: action.query, payload: action.payload });
          return {
              ...state,
              ...action.payload,
              query: action.query
          }

      case 'BUSCA_ERRO':
          return {
              ...state,
              reason: action.reason
          }
      default:
          return state;
  }
}

export default buscaReducer;