import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';
import { push } from 'react-router-redux';
import { CardActions } from 'material-ui/Card';

import { ManageTask } from '../components/pages';
import { SaveButton, CancelButton } from '../components/inputs';


const getTaskToEdit = (tasks, taskId) => {
    return (tasks.filter(t => t.task_id == taskId))[0];
};


let EditTask = (props) => {
    return (
        <ManageTask
            task={props.task}
            title="Edit Task"
            subtitle="Change the fields below to update this task"
            onSubmit={props.buildTaskPayload}
            tasklistId={props.tasklistId}
            redirectToSelectTaskList={props.redirectToSelectTaskList}>
            <CardActions>
                <CancelButton onClick={props.cancelEdit} />
                <SaveButton />
            </CardActions>
        </ManageTask>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        redirectToSelectTaskList: () => {
            dispatch(push('/'));
        },
        buildTaskPayload: (task) => {
            dispatch(editTask({
                task_id: task.taskId,
                tasklist: task.tasklistId,
                description: task.description,
                target_date: task.target_date,
                priority: task.priority,
                status: task.status
            }));
        },
        cancelEdit: () => {
            dispatch(push('/'));
        }
    }
};


const mapStateToProps = (state, props) => {
    return {
        task: getTaskToEdit(state.tasks.tasks, props.params.taskId),
        tasklistId: state.tasks.tasklistId
    }
};


EditTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTask);

export default EditTask;