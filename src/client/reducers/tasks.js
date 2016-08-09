import _ from 'lodash';
import {
    POST_TASK_ADD,
    RECEIVE_TASK_ADD,
    POST_TASK_TOGGLE,
    RECEIVE_TASK_TOGGLE
} from '../actions';

const defaultTasksState = {
    isFetching: false,
    tasks: []
};
const getTaskById = (tasks, id) => {
    _.find(tasks, { 'id': 1, 'active': true });
};

const task = (state = {}, action) => {
    console.log('taskaction', action, state);
    if (state.id !== action.id)
        return state;

    switch (action.type) {
        case POST_TASK_TOGGLE:
            // console.log('TOGGLE_TASK', state, action);
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TASK_TOGGLE:
            console.log(' recccc TOGGLE_TASK', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                status: action.status
            });
        default:
            return state;
    }
};

const tasks = (state = defaultTasksState , action) => {
    switch (action.type) {
        case POST_TASK_ADD:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TASK_ADD:
            return Object.assign({}, state, {
                isFetching: false,
                tasks: [
                    ...state.tasks,
                    action.newTask
                ]
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

// const task = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return {
//                 id: action.id,
//                 status: 0,
//                 description: action.description,
//                 targetDate: action.targetDate,
//                 priority: action.priority
//             };
//         case 'TOGGLE_TASK':
//             if (state.id !== action.id) {
//                 return state;
//             }

//             return Object.assign({}, state, {
//                 completed: !state.completed
//             });
//         default:
//             return state;
//     }
// };

// const tasks = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return [
//                 ...state,
//                 task(undefined, action)
//             ]
//         default:
//             return state;
//     }
// };