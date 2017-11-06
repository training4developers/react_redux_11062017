import * as React from 'react';
import * as PropTypes from 'prop-types';

import { CarViewRow } from './car-view-row';

export const CarTable = props => <table>
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {props.cars.map(car => <CarViewRow key={car.id} car={car} onDelete={props.onDeleteCar} />)}
  </tbody>
</table>;

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  onDeleteCar: PropTypes.func.isRequired,  
};

CarTable.defaultProps = {
  cars: [],
};