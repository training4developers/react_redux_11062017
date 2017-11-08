import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

import { registerActions } from './actions/register-actions';
import { createReducer } from './reducers/create-reducer';

registerActions([
  'ADD_TODO_REQUEST',
  'ADD_TODO_DONE',
  'REMOVE_TODO_REQUEST',
  'REMOVE_TODO_DONE',
  'TOGGLE_TODO_REQUEST',
  'TOGGLE_TODO_DONE',
  'REFRESH_TODOS_REQUEST',
  'REFRESH_TODOS_DONE',
]);

const addTodoRequest = todo => ({ type: window.actions.ADD_TODO_REQUEST, todo });
const addTodoDone = todo => ({ type: window.actions.ADD_TODO_DONE, todo });

const addTodo = todo => {

  return dispatch => {

    dispatch(addTodoRequest(todo));

    return fetch('http://localhost:3050/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo, completed: false }),
    })
      .then(() => fetch('http://localhost:3050/todos'))
      .then(res => res.json())
      .then(todos => dispatch(refreshTodoDone(todos)));
  };

};

const removeTodoRequest = todoId => ({ type: window.actions.REMOVE_TODO_REQUEST, todoId });
const removeTodoDone = todo => ({ type: window.actions.REMOVE_TODO_DONE, todo });

const toggleTodoRequest = todo => ({ type: window.actions.TOGGLE_TODO_REQUEST, todo });
const toggleTodoDone = todo => ({ type: window.actions.TOGGLE_TODO_DONE, todo });

const refreshTodoRequest = () => ({ type: window.actions.REFRESH_TODOS_REQUEST });
const refreshTodoDone = todos => ({ type: window.actions.REFRESH_TODOS_DONE, todos });

const refreshTodos = () => {

  return dispatch => {

    // this action would display the spinner
    dispatch(refreshTodoRequest());

    return fetch('http://localhost:3050/todos')
      .then(res => res.json())
      // this action would remove the spinner and display the todos
      .then(todos => dispatch(refreshTodoDone(todos)));

  };

};

const initialState = {
  todos: [],
  showSpinner: false,
};

const todoReducer = createReducer(initialState, {
  [ window.actions.REFRESH_TODOS_REQUEST ]: (state, action) => {
    return { ...state, todos: [], showSpinner: true };
  },
  [ window.actions.REFRESH_TODOS_DONE ]: (state, action) => {
    return { ...state, todos: action.todos, showSpinner: false };
  },
  [ window.actions.ADD_TODO_REQUEST ]: (state, action) => {
    return { ...state, showSpinner: true };
  },
});

const appStore = createStore(todoReducer, applyMiddleware(thunk));

class TodoTool extends React.Component {

  static propTypes = {
    myTodos: PropTypes.array.isRequired,
    showLoadingMessage: PropTypes.bool.isRequired,
    onRefreshTodos: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onRefreshTodos();
  }

  addToDo = () => {
    this.props.onAddTodo(this.newToDoInput.value).then(() => {
      this.newToDoInput.value = '';
    });
  };

  render() {
    return <div>
      <h1>Todos</h1>
      {this.props.showLoadingMessage ? <div>Loading...</div> : null}
      <ul>
        {this.props.myTodos.map(todo => <li key={todo.id}>{todo.todo}</li>)}
      </ul>
      <form>
        <label>New To Do:</label>
        <input type="text" defaultValue="" ref={input => this.newToDoInput = input} />
        <button type="button" onClick={this.addToDo}>Add</button>
      </form>
    </div>;
  }

}

// Example of TodoTool
// <TodoTool myTodos={[]} showLoadingMessage={false} onRefreshTodos={this.refreshTodos} /> 

const mapStateToProps = state => {

  // produce an object with the props for TodoTool
  return {
    myTodos: state.todos,
    showLoadingMessage: state.showSpinner,
  };

};

const mapDispatchToProps = dispatch => bindActionCreators({
  onRefreshTodos: refreshTodos,
  onAddTodo: addTodo,
}, dispatch);

const createTodoToolContainer = connect(mapStateToProps, mapDispatchToProps);
const TodoToolContainer = createTodoToolContainer(TodoTool);

ReactDOM.render(
  <TodoToolContainer store={appStore} />,
  document.querySelector('main'),
);
