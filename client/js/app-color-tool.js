import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const myColors = [ 'red', 'yellow', 'blue', 'green' ];

ReactDOM.render(
  <div>
    <ColorTool colors={myColors} />
  </div>,
  document.querySelector('main'),
);

console.log(myColors);