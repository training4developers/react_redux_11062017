import * as React from 'react';
import * as PropTypes from 'prop-types';

export class CarForm extends React.Component {

  static propTypes = {
    buttonText: PropTypes.string,
    onSubmitCar: PropTypes.func.isRequired,
  };

  static defaultProps = {
    buttonText: 'Save Car',
  };

  constructor(props) {
    super(props);

    this.state = this.initState();
  }

  initState() {
    return {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  onChange = e => this.setState({
    [ e.currentTarget.name ]: e.currentTarget.type === 'number'
      ? Number(e.currentTarget.value)
      : e.currentTarget.value, 
  });

  componentDidMount() {
    if (this.makeInput) {
      this.makeInput.focus();
    }
  }

  render() {
    return <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make" ref={ input => this.makeInput = input }
          value={this.state.make} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.onChange} />
      </div>
      <button type="button" onClick={() => { this.props.onSubmitCar({ ...this.state }), this.setState(this.initState()); }}>{this.props.buttonText}</button>
    </form>;
  }
}


