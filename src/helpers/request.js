import axios from "axios";

class Conectar {

  constructor(){

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    const url = process.env.REACT_APP_SPOTIFY_API_BASE_URL;
    const header = `Bearer ${authorization.access_token}`;

    this.request = axios.create({
      baseURL: url,
      headers: {'Authorization': header}
    });
    
  }

  buscar(query){
    return this.request.get(`search?q=${query}&type=album`);
  }

  buscarAlbum(id){
    return this.request.get(`albums/${id}`);
  }

  buscarMusicas(id){
    return this.request.get(`albums/${id}/tracks`);
  }
}

export default Conectar;