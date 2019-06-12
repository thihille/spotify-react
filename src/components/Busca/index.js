import Busca from './Busca';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch } from '../../redux/actions/actBuscar';

const mapStateToProps = state => {
  return {
    ...state.buscaReducer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetch
    },
    dispatch
  );
};
export default connect(mapStateToProps,mapDispatchToProps)(Busca);