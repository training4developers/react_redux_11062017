import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../actions/calc-actions';
import { Calculator } from '../components/calculator';

const mapStateToProps = state => {
  console.log('ran mapStateToProps');
  return ({ result: state, vijayRocks: true, });
};

const mapDispatchToProps = dispatch => {
  console.log('ran mapDispatchToProps');
  return bindActionCreators({
    add: ActionCreators.addActionCreator,
    subtract: ActionCreators.subtractActionCreator,
    multiply: ActionCreators.multiplyActionCreator,
    divide: ActionCreators.divideActionCreator,
    doIt: () => {},
  }, dispatch);
};

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);