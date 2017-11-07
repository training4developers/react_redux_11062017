import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from './actions/calc-actions';
import { Calculator } from './components/calculator';

const mapStateToProps = state => ({ result: state });
const mapDispatchToProps = dispatch => bindActionCreators({
  add: ActionCreators.addActionCreator,
  subtract: ActionCreators.subtractActionCreator,
  multiply: ActionCreators.multiplyActionCreator,
  divide: ActionCreators.divideActionCreator,
}, dispatch);

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);