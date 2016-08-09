import { combineReducers } from 'redux';
import tasks from './tasks.js';
import { routerStateReducer } from 'redux-router';
import visibilityFilter from './visibilityFilter'

const taskApp = combineReducers({
  tasks: tasks,
  visibilityFilter: visibilityFilter,
  router: routerStateReducer
});

export default taskApp;