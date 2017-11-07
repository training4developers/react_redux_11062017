import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CalculatorContainer } from './containers/calculator-container';
import { appStore } from './app-store';

ReactDOM.render(
  <Provider store={appStore}>
    <div>
      <CalculatorContainer />
      <CalculatorContainer />
      <CalculatorContainer />
    </div>
  </Provider>,
  document.querySelector('main')
);




