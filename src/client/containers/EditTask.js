import React from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


const getTaskToEdit = (tasks, taskId) => {
    return (tasks.filter(t => t.id == taskId))[0];
};


let EditTask = (props) => {
    const { dispatch } = props;

    let buildTaskPayload = (taskId, description, targetDate, priority) => {
        dispatch(saveTask({
            taskId: taskId,
            description: description,
            targetDate: targetDate,
            priority: priority
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