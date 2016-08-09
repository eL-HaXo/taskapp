import _ from 'lodash';
import {
    POST_TASK_ADD,
    RECEIVE_TASK_ADD,
    POST_TASK_TOGGLE,
    RECEIVE_TASK_TOGGLE,
    TASKLIST_SORT_BY
} from '../actions';

const DEFAULT_SORT_ORDER = 'targetDate';
const defaultTasksState = {
    isFetching: false,
    sortField: DEFAULT_SORT_ORDER,
    tasks: []
};
const sortOrders = {
    targetDate: ['targetDate', 'priority'],
    priority: ['priority', 'targetDate'],
    description: ['description', 'targetDate', 'priority']
};

const task = (state = {}, action) => {

    if (state.id !== action.id)
        return state;

    switch (action.type) {
        case POST_TASK_TOGGLE:
            return Object.assign({}, state, {
                isFetching: true
            });


        case RECEIVE_TASK_TOGGLE:
            return Object.assign({}, state, {
                isFetching: false,
                status: action.status
            });


        default:
            return state;
    }
};

const tasks = (state = defaultTasksState , action) => {
    let sortOrder = _.get(sortOrders, action.sortField, DEFAULT_SORT_ORDER);
    switch (action.type) {
        case TASKLIST_SORT_BY:
            return Object.assign({}, state, {
                sortField: action.sortField,
                tasks: _.sortBy(tasks, sortOrder)
            });


        case POST_TASK_ADD:
            return Object.assign({}, state, {
                isFetching: true
            });


        case RECEIVE_TASK_ADD:
            return Object.assign({}, state, {
                isFetching: false,
                tasks: _.sortBy([
                    ...state.tasks,
                    action.newTask
                ], sortOrder)
            });


        case POST_TASK_TOGGLE:
            console.log('POST_TASK_TOGGLE', state);
            return Object.assign({}, state, {
                isFetching: true,
                tasks: state.tasks.map(t =>
                    task(t, action)
                )
            });


        case RECEIVE_TASK_TOGGLE:
            console.log('RECEIVE_TASK_TOGGLE', state);
            return Object.assign({}, state, {
                isFetching: false,
                tasks: state.tasks.map(t =>
                    task(t, action)
                )
            });


        default:
            return state;
    }
};

export default tasks;
