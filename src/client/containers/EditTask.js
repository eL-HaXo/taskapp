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

    let buildTaskPayload = (task) => {
        dispatch(editTask({
            task_id: task.taskId,
            tasklist: task.tasklistId,
            description: task.description,
            target_date: task.target_date,
            priority: task.priority,
            status: task.status
        }));
    };

    let cancelEdit = () => {
        dispatch(push('/'));
    };

    return (
        <ManageTask
            task={props.task}
            title="Edit Task"
            subtitle="Change the fields below to update this task"
            onSubmit={buildTaskPayload}
            tasklistId={props.tasklistId}>
            <CardActions>
                <CancelButton onClick={cancelEdit} />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};


const mapStateToProps = (state, props) => {
    return {
        task: getTaskToEdit(state.tasks.tasks, props.params.taskId),
        tasklistId: state.tasks.tasklistId
    }
};


EditTask = connect(mapStateToProps)(EditTask);

export default EditTask;