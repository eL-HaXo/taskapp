require('es6-promise').polyfill();
require('isomorphic-fetch');
import { push } from 'react-router-redux';

export const POST_LOGIN = 'LOGIN';
export const postLogin = () => {
    return {
        type: POST_LOGIN
    };
};

export const RECEIVE_TASK_LIST = 'RECEIVE_TASK_LIST';
export const receiveTaskList = (json) => {
    return {
        type: RECEIVE_TASK_LIST,
        taskList: json.tasklist,
        taskListId: json.tasklist_id,
        taskListName: json.tasklist_name
    };
}

export const POST_TASK_ADD = 'POST_TASK_ADD';
export const postAddTask = (inputs) => {
    return {
        type: POST_TASK_ADD,
        task_id: 'new',
        description: inputs.description,
        priority: inputs.priority,
        target_date: inputs.target_date
    }
};

export const RECEIVE_TASK_ADD = 'RECEIVE_TASK_ADD';
export const receiveAddTask = (json) => {
    return {
        type: RECEIVE_TASK_ADD,
        newTask: {
            task_id: json.task_id,
            description: json.description,
            target_date: json.target_date,
            priority: json.priority,
            status: json.status
        }
    };
};

export const POST_TASK_EDIT = 'POST_TASK_EDIT';
export const postTaskEdit = (task) => {
    return {
        type: POST_TASK_EDIT,
        task_id: task.task_id,
        status: task.status,
        description: task.description,
        priority: task.priority,
        target_date: task.target_date
    }
};

export const RECEIVE_TASK_EDIT = 'RECEIVE_TASK_EDIT';
export const receiveTaskEdit = (json) => {
    return {
        type: RECEIVE_TASK_EDIT,
        updatedTask: {
            task_id: json.task_id,
            description: json.description,
            target_date: json.target_date,
            priority: json.priority,
            status: json.status
        }
    };
};

export const POST_TASK_TOGGLE = 'POST_TASK_TOGGLE';
export const postTaskToggle = (id, status) => {
    return {
        type: POST_TASK_TOGGLE,
        task_id: id,
        status: status
    };
};

export const RECEIVE_TASK_TOGGLE = 'RECEIVE_TASK_TOGGLE';
export const receiveTaskToggle = (json) => {
    return {
        type: RECEIVE_TASK_TOGGLE,
        task_id: json.task_id,
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

export function login(credentials) {
    return function (dispatch) {

        dispatch(postLogin());

        let form = new FormData();
        form.append('tasklist_name', credentials.username);
        form.append('tasklist_password', credentials.password);

        return fetch('/get_or_create_tasklist', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then((json) => {
            if (json.success) {
                dispatch(receiveTaskList(json));
            }
            else {
                alert('Login failed');
            }
        })
        .then((a) => {
            dispatch(push('/tasklist'))
        });
    }
};

export function createTask(task) {
    return function (dispatch) {

        dispatch(postAddTask(task));

        let form = new FormData();
        form.append('tasklist', task.tasklistId);
        // form.append('status', false);
        form.append('description', task.description);
        form.append('target_date', task.target_date);
        form.append('priority', task.priority);

        return fetch('/task/create', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveAddTask(json));
            dispatch(push('/tasklist'));
        });
    }
};

export function editTask(task) {
    return function (dispatch) {

        dispatch(postTaskEdit(task));

        let form = new FormData();
        form.append('id', task.task_id);
        form.append('tasklist', task.tasklist)
        form.append('status', task.status);
        form.append('description', task.description);
        form.append('target_date', task.target_date);
        form.append('priority', task.priority);

        return fetch('/task/update', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveTaskEdit(json));
            dispatch(push('/tasklist'));
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

export const TASKLIST_VISIBILITY_FILTER = 'TASKLIST_VISIBILITY_FILTER';
export const taskListVisibiltyFilter = (visibilityFilter) => {
    return {
        type: TASKLIST_VISIBILITY_FILTER,
        visibilityFilter: visibilityFilter
    };
}
