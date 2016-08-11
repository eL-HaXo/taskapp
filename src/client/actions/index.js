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

export const POST_TASK_EDIT = 'POST_TASK_EDIT';
export const postTaskEdit = (task) => {
    return {
        type: POST_TASK_EDIT,
        id: task.id,
        status: task.status,
        description: task.description,
        priority: task.priority,
        targetDate: task.targetDate
    }
};

export const RECEIVE_TASK_EDIT = 'RECEIVE_TASK_EDIT';
export const receiveTaskEdit = (json) => {
    return {
        type: RECEIVE_TASK_EDIT,
        updatedTask: {
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

export const TASKLIST_SORT_BY = 'TASKLIST_SORT_BY';
export const taskListSortBy = (sortField) => {
    return {
        type: TASKLIST_SORT_BY,
        sortField: sortField
    };
};

export function saveTask(task) {
    return function (dispatch) {

        dispatch(postAddTask(task));

        let form = new FormData();
        form.append('id', task.id);
        form.append('status', 0);
        form.append('description', task.description);
        form.append('targetDate', (task.targetDate.toJSON()).split('T')[0]);
        form.append('priority', task.priority);

        return fetch('/task/save', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(json => dispatch(receiveAddTask(json)));
    }
};

export function editTask(task) {
    return function (dispatch) {

        dispatch(postTaskEdit(task));

        let form = new FormData();
        form.append('id', task.id);
        form.append('status', task.status);
        form.append('description', task.description);
        form.append('targetDate', (task.targetDate.toJSON()).split('T')[0]);
        form.append('priority', task.priority);

        return fetch('/task/save', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(json => dispatch(receiveTaskEdit(json)));
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

export const TASKLIST_VISIBILITY_FILTER = 'TASKLIST_VISIBILITY_FILTER';
export const taskListVisibiltyFilter = (visibilityFilter) => {
    return {
        type: TASKLIST_VISIBILITY_FILTER,
        visibilityFilter: visibilityFilter
    };
}
