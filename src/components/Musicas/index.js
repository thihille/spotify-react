import Musicas from "./Musicas";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { buscarAudioDoAlbum } from "../../redux/actions/actAlbuns";

const mapStateToProps = state => {
  return {
      ...state.albunsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({buscarAudioDoAlbum},dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Musicas);