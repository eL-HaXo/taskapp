import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux'
import { toggleTask } from '../actions';
import { TaskList } from '../components/sections';

const getVisibleTasks = (tasks, filter) => {
    if (tasks === undefined)
        tasks = [];
    if (filter === undefined)
        filter = 'ALL';

    switch (filter) {
        case 'ALL':
            return tasks;
        case 'COMPLETE':
            return tasks.filter(t => t.status);
        case 'TODO':
            return tasks.filter(t => !t.status);
    }
};

const mapStateToProps = (state) => {
    return {
        taskListId: state.tasks.tasklistId,
        tasks: getVisibleTasks(state.tasks.tasks, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskToggleClick: (id, status) => {
            dispatch(toggleTask(id, status))
        },
        redirectToSelectTaskList: () => {
            dispatch(push('/'))
        }
    }
};

let VisibleTasks = (props) => {

    return (
        <TaskList
            onTaskToggleClick={props.onTaskToggleClick}
            tasks={props.tasks}
            taskListId={props.taskListId}
            visibilityFilter={props.visibilityFilter}
            redirectToSelectTaskList={props.redirectToSelectTaskList}
        />
    );
}

VisibleTasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTasks);

export default VisibleTasks;