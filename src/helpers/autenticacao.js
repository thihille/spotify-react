import { extractQueryString } from './utils';

class Autenticacao {
  constructor() {}
  verificar = () => {
    const recuperarToken = this.tentativaRecuperacao();
    if (!recuperarToken) {
      this.spotifyWebsite();
    } else {
      const validade = this.expiracaoDoToken(recuperarToken);

      this.limparToken();

      if (!recuperarToken.authorizationTime) {
        const now = new Date();
        now.setSeconds(now.getSeconds() + parseInt(recuperarToken.expires_in));

        localStorage.setItem(
          "authorization",
          JSON.stringify({
            ...recuperarToken,
            authorizationTime: now
          })
        );
      }

      if (!validade) {
        this.spotifyWebsite();
      }
    }
  };

  expiracaoDoToken = recuperarToken => {
    const now = new Date();
    const expire = new Date();

    expire.setSeconds(expire.getSeconds() + parseInt(recuperarToken.expires_in));
    
    const expireDate = recuperarToken.authorizationTime ? new Date(new Date(new Date(recuperarToken.authorizationTime))) : expire;

    const validade = now <= expireDate;
    return validade;
  };

  spotifyWebsite = () => {
    const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNTS_BASE_URL;
    const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;

    window.location.href = `${baseUrl}authorize?client_id=${clientId}&response_type=token&redirect_uri=${
      process.env.PUBLIC_URL
    }`;
  };

  limparToken = () => {
    if (window.location.href.split("#").length > 1) {
      history.pushState(
        "initial",
        document.title,
        window.location.href.split("#")[0]
      );
    }
  };

  tentativaRecuperacao = () => {
    let buscarToken = window.location.hash.split("#")[1];

    if (buscarToken){

      return extractQueryString(buscarToken);
    }else{
      const authorization = localStorage.getItem("authorization");
      if (typeof authorization !== 'undefined' && authorization !== null){
        return JSON.parse(authorization);
      }else{
        return 0;
      }
    }
  };
}
export default Autenticacao;