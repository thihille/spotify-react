import axios from "axios";

class Conectar {

  constructor(){

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    this.authorization ? request.defaults.headers.common["Authorization"] = `Bearer ${authorization.access_token}` : '';
    this.request = axios.create({
      baseURL: process.env.REACT_APP_SPOTIFY_API_BASE_URL,
    });
    
  }

  buscar(query){
    return this.request.get(`search?q=${query}&type=album`);
  }

  buscarAlbum(id){
    return this.request.get(`albums/${id}`);
  }

  buscarAudioDoAlbum(id){
    return this.request.get(`albums/${id}/tracks`);
  }
}

export default Conectar;