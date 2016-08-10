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
    tasks: [{
        id: 1,
        description: "High Priority Task.",
        priority: 1,
        status: 0,
        targetDate: new Date()
    },{
        id: 2,
        description: "Medium Priority Task.",
        priority: 2,
        status: 0,
        targetDate: new Date()
    },{
        id: 3,
        description: "Low Priority Task.",
        priority: 3,
        status: 1,
        targetDate: new Date()
    }]
};
const SORT_ORDERS = {
    targetDate: ['targetDate', 'priority', 'status'],
    priority: ['priority', 'targetDate', 'status'],
    description: ['description', 'targetDate', 'priority', 'status']
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
    let sortOrder = _.get(SORT_ORDERS, [action.sortField], SORT_ORDERS[DEFAULT_SORT_ORDER]);
    switch (action.type) {
        case TASKLIST_SORT_BY:
            return Object.assign({}, state, {
                sortField: action.sortField,
                tasks: _.sortBy(state.tasks, sortOrder)
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
            return Object.assign({}, state, {
                isFetching: true,
                tasks: state.tasks.map(t =>
                    task(t, action)
                )
            });


        case RECEIVE_TASK_TOGGLE:
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
