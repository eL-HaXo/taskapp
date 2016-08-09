import { push } from 'redux-router';

export const POST_TASK_ADD = 'POST_TASK_ADD';
export const postAddTask = (inputs) => {
    return {
        type: POST_TASK_ADD,
        id: 'new',
        description: inputs.description,
        priority: inputs.priority,
        targetDate: inputs.targetDate
    }
};

export const RECEIVE_TASK_ADD = 'RECEIVE_TASK_ADD';
export const receiveAddTask = (json) => {
    return {
        type: RECEIVE_TASK_ADD,
        newTask: {
            id: json.id,
            description: json.description,
            targetDate: new Date(json.targetDate),
            priority: json.priority,
            status: json.status
        }
    };
};

export const POST_TASK_TOGGLE = 'POST_TASK_TOGGLE';
export const postTaskToggle = (id, status) => {
    console.log('postTaskToggle', id, status);
    return {
        type: POST_TASK_TOGGLE,
        id: id,
        status: status
    };
};

export const RECEIVE_TASK_TOGGLE = 'RECEIVE_TASK_TOGGLE';
export const receiveTaskToggle = (json) => {
    return {
        type: RECEIVE_TASK_TOGGLE,
        id: json.id,
        status: json.status
    };
};

export function saveTask(inputs) {
    return function (dispatch) {

        dispatch(postAddTask(inputs))

        let form = new FormData();
        form.append('id', 'new');
        form.append('status', 0);
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
};

export const toggleTask = (id, status) => {
    return function (dispatch) {
        dispatch(postTaskToggle(id, status))

        let form = new FormData();
        form.append('id', id);
        form.append('status', status);

        return fetch('/task/status', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(json =>
            dispatch(receiveTaskToggle(json))
        );
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}