import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import {TaskList} from '../components/sections';

const getVisibleTasks = (tasks, filter) => {
    if (tasks === undefined)
        tasks = [];
    if (filter === undefined)
        filter = 'SHOW_ALL';

    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
        case 'SHOW_COMPLETE':
            return tasks.filter(t => t.status);
        case 'SHOW_ACTIVE':
            return tasks.filter(t => !t.status);
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick: (id) => {
            dispatch(toggleTask(id))
        }
    }
};

const VisibleTasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default VisibleTasks;