import Album from "./Album";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { buscarAlbum, reset } from "../../redux/actions/actAlbuns";

const mapStateToProps = state => {
  return {
      ...state.albunsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({buscarAlbum,reset},dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);