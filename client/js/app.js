import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { createStore, bindActionCreators } from 'redux';

const calcReducer = (state = 0, action) => {

  switch (action.type) {
    case 'ADD':
      return state + action.value;
    case 'SUBTRACT':
      return state - action.value;
    case 'MULTIPLY':
      return state - action.value;
    case 'DIVIDE':
      return state - action.value;
    default:
      return state;
  }

};

const store = createStore(calcReducer);

const addActionCreator = value => ({ type: 'ADD', value });
const subtractActionCreator = value => ({ type: 'SUBTRACT', value });
const multiplyActionCreator = value => ({ type: 'MULTIPLY', value });
const divideActionCreator = value => ({ type: 'DIVIDE', value });

const actions = bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
  multiply: multiplyActionCreator,
  divide: divideActionCreator,
}, store.dispatch);

class Calculator extends React.Component {

  static propTypes = {
    result: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    subtract: PropTypes.func.isRequired,
    multiply: PropTypes.func.isRequired,
    divide: PropTypes.func.isRequired,
  };

  render() {
    return <form>
      <label>Num:</label>
      <input type="text" defaultValue={0} ref={input => this.numInput = input} />
      <button type="button" onClick={() => this.props.add(Number(this.numInput.value))}>+</button>
      <button type="button" onClick={() => this.props.subtract(Number(this.numInput.value))}>-</button>
      <button type="button" onClick={() => this.props.multiply(Number(this.numInput.value))}>*</button>
      <button type="button" onClick={() => this.props.divide(Number(this.numInput.value))}>/</button>
      <div>Result: {this.props.result}</div>
    </form>;
  }
}

store.subscribe(() => {
  ReactDOM.render(<Calculator result={store.getState()} {...actions} />, document.querySelector('main'));
});

ReactDOM.render(<Calculator result={store.getState()} {...actions} />, document.querySelector('main'));




