import React from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


let ToggleTask = ({ dispatch }) => {

    let buildTaskPayload = (description, targetDate, priority) => {
        console.log('confirm closure', description, targetDate, priority);
        dispatch(saveTask({
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

ToggleTask = connect()(ToggleTask);

export default ToggleTask;