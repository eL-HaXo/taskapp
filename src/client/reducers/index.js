import { combineReducers } from 'redux';
import tasks from './tasks.js';
import { routerReducer } from 'react-router-redux';
import visibilityFilter from './visibilityFilter';

const taskApp = combineReducers({
  tasks: tasks,
  visibilityFilter: visibilityFilter,
  routing: routerReducer
});

export default taskApp;