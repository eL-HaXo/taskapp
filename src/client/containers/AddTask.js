import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import { push } from 'redux-router';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


const mapStateToProps = (state) => {
    return {
        tasklistId: state.tasks.tasklistId
    }
};

let AddTask = (props) => {
    let { dispatch } = props;
    let buildTaskPayload = (task) => {
        dispatch(createTask({
            tasklistId: task.tasklistId,
            status: task.status,
            description: task.description,
            target_date: task.target_date,
            priority: task.priority
        }));
    };

    return (
        <ManageTask
            title="Add Task"
            subtitle="Fill out the fields below to create a new task"
            onSubmit={buildTaskPayload}
            tasklistId={props.tasklistId}>
            <CardActions>
                <CancelButton />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};

AddTask = connect(
    mapStateToProps
)(AddTask);

export default AddTask;