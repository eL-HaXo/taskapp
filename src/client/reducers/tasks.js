import {
    POST_ADD_TASK,
    RECEIVE_ADD_TASK
} from '../actions'

const defaultTasksState = {
    isFetching: false,
    tasks: []
};

const tasks = (state = defaultTasksState , action) => {
    switch (action.type) {
        case POST_ADD_TASK:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ADD_TASK:
            let newState = Object.assign({}, state, {
                isFetching: false,
                tasks: [
                    ...state.tasks,
                    action.newTask
                ]
            });
            return newState;
        default:
            return state;
    }
}
export default tasks;

// export function task(state = {}, action) {
//     switch (action.type) {
//         case TOGGLE_TASK:
//             if (state.id !== action.id)
//                 return state;
//             return Object.assign({}, state, {
//                 status: !state.status
//             });
//         default:
//             return state;
//     }
// }

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