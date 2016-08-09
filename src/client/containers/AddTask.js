import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


let AddTask = ({ dispatch }) => {

    let buildTaskPayload = (description, targetDate, priority) => {
        console.log('confirm closure', description, targetDate, priority);
        dispatch(addTask({
            description: description,
            targetDate: targetDate,
            priority: priority
        })).then(dispatch(push('/')));
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