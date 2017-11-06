import * as React from 'react';
import * as PropTypes from 'prop-types';

export const ColorList = props => <ul>
  {props.colors.map(color => <li key={color.id}>{color.id} {color.name}
    <button type="button" onClick={() => props.onDeleteColor(color.id)}>Delete</button></li>)}
</ul>;

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

ColorList.defaultProps = {
  colors: [],
};