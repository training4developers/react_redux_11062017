import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import * as ActionCreators from './actions/calc-actions';
import { appStore } from './app-store';
import { Calculator } from './components/calculator';

const actions = bindActionCreators({
  add: ActionCreators.addActionCreator,
  subtract: ActionCreators.subtractActionCreator,
  multiply: ActionCreators.multiplyActionCreator,
  divide: ActionCreators.divideActionCreator,
}, appStore.dispatch);

const rootElement = document.querySelector('main');


appStore.subscribe(() => {
  ReactDOM.render(<Calculator result={appStore.getState()} {...actions} />, rootElement);
});

ReactDOM.render(<Calculator result={appStore.getState()} {...actions} />, rootElement);




