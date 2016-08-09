import { push } from 'redux-router';

export const POST_ADD_TASK = 'POST_ADD_TASK';

export function postAddTask(inputs) {
    return {
        type: POST_ADD_TASK,
        id: 'new',
        description: inputs.description,
        priority: inputs.priority,
        targetDate: inputs.targetDate
    }
};

export const RECEIVE_ADD_TASK = 'RECEIVE_ADD_TASK';

export function receiveAddTask(json) {
    return {
        type: RECEIVE_ADD_TASK,
        newTask: {
            id: json.id,
            description: json.description,
            targetDate: new Date(json.targetDate),
            priority: json.priority
        }
    }
}

export function saveTask(inputs) {
    return function (dispatch) {

        dispatch(postAddTask(inputs))

        let form = new FormData();
        form.append('description', inputs.description);
        form.append('targetDate', (inputs.targetDate.toJSON()).split('T')[0]);
        form.append('priority', inputs.priority);

        return fetch('/task/save', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(json =>
            dispatch(receiveAddTask(json))
        ).then(() => {
            console.log('Go To Home. PUSH', push);
            dispatch(push({
                pathname: '/edit'
            }));
        });
    }
}


export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    }
}