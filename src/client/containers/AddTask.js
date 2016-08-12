import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import { CardActions } from 'material-ui/Card';
import { push } from 'react-router-redux';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


const mapStateToProps = (state) => {
    return {
        tasklistId: state.tasks.tasklistId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        redirectToSelectTaskList: () => {
            console.log('Dispatch');
            dispatch(push('/'));
        },
        buildTaskPayload: (task) => {
            dispatch(createTask({
                tasklistId: task.tasklistId,
                status: task.status,
                description: task.description,
                target_date: task.target_date,
                priority: task.priority
            }));
        }
    }
};

let AddTask = (props) => {
    return (
        <ManageTask
            title="Add Task"
            subtitle="Fill out the fields below to create a new task"
            onSubmit={props.buildTaskPayload}
            tasklistId={props.tasklistId}
            redirectToSelectTaskList={props.redirectToSelectTaskList}>
            <CardActions>
                <CancelButton />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};

AddTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);

export default AddTask;