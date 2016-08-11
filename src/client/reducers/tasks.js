import _ from 'lodash';
import {
    POST_TASK_ADD,
    RECEIVE_TASK_ADD,
    POST_TASK_TOGGLE,
    RECEIVE_TASK_TOGGLE,
    TASKLIST_SORT_BY,
    POST_TASK_EDIT,
    RECEIVE_TASK_EDIT,
    POST_LOGIN,
    RECEIVE_TASK_LIST
} from '../actions';

const DEFAULT_SORT_ORDER = 'target_date';
const defaultTasksState = {
    isFetching: false,
    sortField: DEFAULT_SORT_ORDER,
    tasklistId: null,
    tasks: [{
        task_id: 1,
        description: "High Priority Task.",
        priority: 1,
        status: 0,
        target_date: new Date()
    },{
        task_id: 2,
        description: "Medium Priority Task.",
        priority: 2,
        status: 0,
        target_date: new Date()
    },{
        task_id: 3,
        description: "Low Priority Task.",
        priority: 3,
        status: 1,
        target_date: new Date()
    }]
};
const SORT_ORDERS = {
    target_date: ['target_date', 'priority', 'status'],
    priority: ['priority', 'target_date', 'status'],
    description: ['description', 'target_date', 'priority', 'status']
};

const task = (state = {}, action) => {

    if (state.task_id !== action.task_id)
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

        case POST_TASK_EDIT:
            return Object.assign({}, state, {
                isFetching: true
            });


        case RECEIVE_TASK_EDIT:
            return Object.assign({}, state, {
                isFetching: false,
                tasks: _.sortBy([
                    ..._.filter(state.tasks, (t) => { return t.task_id !== action.updatedTask.task_id }),
                    action.updatedTask
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

        case POST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true
            });

        case RECEIVE_TASK_LIST:
            console.log('RECEIVE_TASK_LIST', action);
            return Object.assign({}, state, {
                isFetching: false,
                tasklistId: action.taskListId,
                tasklistName: action.taskListName,
                tasks: action.taskList
            });

        default:
            return state;
    }
};

export default tasks;
