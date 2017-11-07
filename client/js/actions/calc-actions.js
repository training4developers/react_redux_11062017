import { registerActions } from './register-actions';

registerActions(['ADD','SUBTRACT','MULTIPLY','DIVIDE']);


export const addActionCreator = value => ({ type: window.actions.ADD, value });
export const subtractActionCreator = value => ({ type: window.actions.SUBTRACT, value });
export const multiplyActionCreator = value => ({ type: window.actions.MULTIPLY, value });
export const divideActionCreator = value => ({ type: window.actions.DIVIDE, value });