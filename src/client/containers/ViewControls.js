import {connect} from 'react-redux'
import {
    taskListSortBy,
    taskListVisibiltyFilter
} from '../actions';
import {ControlBar} from '../components/sections';

const getVisibleTasks = (tasks, filter) => {
    if (tasks === undefined)
        tasks = [];
    if (filter === undefined)
        filter = 'SHOW_ALL';

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
        sortField: state.tasks.sortField,
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortOrderChange: (e, sortField) => {
            dispatch(taskListSortBy(sortField));
        },
        onVisibilityFilterChange: (e, visibilityFilter) => {
            console.log('onVisibilityFilterChange', visibilityFilter);
            dispatch(taskListVisibiltyFilter(visibilityFilter));
        }
    }
};

const ViewControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlBar);

export default ViewControls;