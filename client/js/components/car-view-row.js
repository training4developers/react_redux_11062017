import * as React from 'react';
import * as PropTypes from 'prop-types';

export const CarViewRow = props => <tr>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
  <td>
    <button type="button" onClick={ () => props.onDelete(props.car.id) }>Delete</button>
  </td>
</tr>;

CarViewRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  }),
  onDelete: PropTypes.func.isRequired,
};

// export const CarViewRow = props => {
  
//     const deleteCar = () => props.onDelete(props.car.id);
  
//     return <tr>
//       <td>{props.car.make}</td>
//       <td>{props.car.model}</td>
//       <td>{props.car.year}</td>
//       <td>{props.car.color}</td>
//       <td>{props.car.price}</td>
//       <td>
//         <button type="button" onClick={deleteCar}>Delete</button>
//       </td>
//     </tr>;
//   };
