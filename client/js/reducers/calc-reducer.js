import { createReducer } from './create-reducer';

export const calcReducer = createReducer(0, {
  [ window.actions.ADD ]: (state, action) => state + action.value,
  [ window.actions.SUBTRACT ]: (state, action) => state - action.value,
  [ window.actions.MULTIPLY ]: (state, action) => state * action.value,
  [ window.actions.DIVIDE ]: (state, action) => state / action.value,
});