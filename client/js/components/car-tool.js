import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.number,
      color: PropTypes.string,
      price: PropTypes.number,
    })).isRequired,
  };

  static defaultProps = {
    cars: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
    };
  }

  deleteCar = carId => {
    this.setState({
      cars: this.state.cars.filter(c => c.id !== carId),
    });
  }

  saveCar = car => {
    this.setState({
      cars: this.state.cars.concat({
        id: Math.max(...this.state.cars.map(c => c.id)) + 1,
        ...car,
      }),
    });
  };

  render() {
    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar}  />
      <CarForm onSubmitCar={this.saveCar} />
    </div>;
  }
}


