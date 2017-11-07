import { createStore } from 'redux';

import { calcReducer } from './reducers/calc-reducer';

export const appStore = createStore(calcReducer);