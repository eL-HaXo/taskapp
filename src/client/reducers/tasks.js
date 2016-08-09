const task = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                id: action.id,
                status: 0,
                description: action.description,
                targetDate: action.targetDate,
                priority: action.priority
            };
        case 'TOGGLE_TASK':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                task(undefined, action)
            ]
        default:
            return state;
    }
};

// const testAddTask = () => {
//     const stateBefore = [];
//     const action = {
//         type: 'ADD_TASK',
//         id: 0,
//         description: 'Adding a task'
//     }
// }

// const tasks = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return [
//                 ...state,
//                 task(undefined, action)
//             ];
//         case 'TOGGLE_TASK':
//             return state.map(t =>
//                 task(t, action)
//             );
//         default:
//             return state;
//     }
// };

export default tasks;