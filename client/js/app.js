import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CalculatorContainer } from './containers/calculator-container';
import { appStore } from './app-store';


ReactDOM.render(
  <CalculatorContainer store={appStore} />,
  document.querySelector('main')
);




