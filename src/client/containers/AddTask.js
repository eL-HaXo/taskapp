import React from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


let AddTask = ({ dispatch }) => {

    let buildTaskPayload = (taskId, description, targetDate, priority) => {
        dispatch(saveTask({
            id: taskId,
            status: status,
            description: description,
            targetDate: targetDate,
            priority: priority
        }));
    };

    return (
        <ManageTask onSubmit={buildTaskPayload}>
            <CardActions>
                <CancelButton />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};

AddTask = connect()(AddTask);

export default AddTask;