import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


const getTaskToEdit = (tasks, taskId) => {
    return (tasks.filter(t => t.task_id == taskId))[0];
};


let EditTask = (props) => {
    const { dispatch } = props;

    let buildTaskPayload = (taskId, description, target_date, priority, status) => {
        dispatch(editTask({
            task_id: taskId,
            description: description,
            target_date: target_date,
            priority: priority,
            status: status
        }));
    };

    return (
        <ManageTask task={props.task} onSubmit={buildTaskPayload}>
            <CardActions>
                <CancelButton />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};

const mapStateToProps = (state, props) => {
    return {
        task: getTaskToEdit(state.tasks.tasks, props.params.taskId)
    }
};

EditTask = connect(mapStateToProps)(EditTask);

export default EditTask;