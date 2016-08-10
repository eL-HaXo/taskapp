import {connect} from 'react-redux'
import {toggleTask} from '../actions';
import {TaskList} from '../components/sections';

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
        tasks: getVisibleTasks(state.tasks.tasks, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskToggleClick: (id, status) => {
            dispatch(toggleTask(id, status))
        }
    }
};

const VisibleTasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default VisibleTasks;