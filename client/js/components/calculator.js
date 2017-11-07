import * as React from 'react';
import * as PropTypes from 'prop-types';

export class Calculator extends React.Component {

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