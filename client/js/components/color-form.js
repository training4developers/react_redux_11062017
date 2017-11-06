import * as React from 'react';

export class ColorForm extends React.Component {

  static defaultProps = {
    color: '',
    buttonText: 'Submit Color',
  };

  constructor(props) {
    super(props);

    this.state = {
      color: props.color,
    };
  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  submitColor = () => {
    this.props.onSubmitColor({ name: this.state.color });

    this.setState({
      color: '',
    });
  }

  componentDidMount() {
    if (this.colorInput) {
      this.colorInput.focus();
    }
  }

  render() {
    return <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color" ref={ input => this.colorInput = input }
          value={this.state.color} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.submitColor}>{this.props.buttonText}</button>
    </form>;
  }


}

// ColorForm.defaultProps = {
//   color: '',
// };