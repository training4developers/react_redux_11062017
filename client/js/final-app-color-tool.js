import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../scss/styles.scss';

import { ColorTool } from './components/color-tool';
import { refreshColors, insertColor, deleteColor } from './database';

// const myColors = [ 'red', 'yellow', 'blue', 'green' ];

class ColorToolContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      showLoading: false,
    };
  }

  componentDidMount() {
    
    this.setState({
      showLoading: true,
    });
    
    refreshColors().then(colors => {
      setTimeout(() => {
        this.setState({
          colors,
          showLoading: false,
        });
      }, 4000);
    });
  }

  insertColor = color => {

    this.setState({
      showLoading: true,
    });

    insertColor(color)
      .then(() => refreshColors())
      .then(colors => {
        this.setState({
          colors,
          showLoading: false,
        });
      });
  };

  deleteColor = colorId => {

    // dispatching the request action
    this.setState({
      showLoading: true,
    });
    
    deleteColor(colorId)
      .then(() => refreshColors())
      .then(colors => {
        // dispatching the done action
        this.setState({
          colors,
          showLoading: false,
        });
      });

  };

  render() {
    return <ColorTool {...this.state}
      insertColor={this.insertColor} deleteColor={this.deleteColor} />;
  }

}

ReactDOM.render(
  <ColorToolContainer />,
  document.querySelector('main'),
);



// import { CarTool } from './components/car-tool';

// const carData = [
//   { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
//   { id: 2, make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
// ];

// ReactDOM.render(
//   <CarTool cars={carData} />,
//   document.querySelector('main')
// );