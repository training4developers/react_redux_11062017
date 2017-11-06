import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

// Reducer Functions are Pure Functions
// 1. The only data input is passed through the parameters
// 2. The parameters should be treated as immutable
// 3. No side effects
// 4. The only output is the value returned from the function
const calcReducer = (state = 0, action) => {

  console.log('state', state, 'action', action);

  switch (action.type) {
    case 'ADD':
      return state + action.value;
    case 'SUBTRACT':
      return state - action.value;
    default:
      return state;
  }

};

// const createStore = (reducer) => {

//   let currentState = undefined;
//   const callbackFns = [];

//   return {
//     getState: () => currentState,
//     dispatch: action => {
//       currentState = reducer(currentState, action);
//       callbackFns.forEach(cb => cb());
//     },
//     subscribe: cb => callbackFns.push(cb),
//   };

// };

const store = createStore(calcReducer);

store.subscribe(() => {
  console.log('new state', store.getState());
});

const addActionCreator = value => ({ type: 'ADD', value });
const subtractActionCreator = value => ({ type: 'SUBTRACT', value });

// this is produced from the bind action creators below
// const add = value => store.dispatch(addActionCreator(value));
// const subtract = value => store.dispatch(subtractActionCreator(value));
const { add, subtract } = bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
}, store.dispatch);

add(1);
subtract(2);
add(3);
subtract(4);
add(5);

class Demo extends React.Component {
  constructor(props) {
    super(props);
    console.log('ran constructor');
  }
  render() {
    return <span>{this.props.msg}</span>;
  }
}

ReactDOM.render(<Demo msg="hi" />, document.querySelector('main'));
ReactDOM.render(<Demo msg="bye" />, document.querySelector('main'));




