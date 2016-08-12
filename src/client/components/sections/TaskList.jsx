import React from 'react';
import _ from 'lodash';

import Task from './Task.jsx';

class TaskList extends React.Component{
    componentWillMount() {
          if (!_.get(this.props, 'taskListId', false))
                return this.props.redirectToSelectTaskList()
    }

    render() {
        let {
            tasks,
            visibilityFilter
        } = this.props;

        let noTasksMessage = 'You don\'t have any tasks';
        if (visibilityFilter === 'COMPLETE')
            noTasksMessage = 'You don\'t have any completed tasks';
        else if (visibilityFilter === 'TODO')
            noTasksMessage = 'You don\'t have any active tasks';

        return (
            <div>
                {tasks.length ?
                    _.map(tasks, (task, i) => {
                        return (
                            <Task key={i} task={task} onTaskToggleClick={this.props.onTaskToggleClick} />
                        );
                    })
                :
                    <p>{noTasksMessage}</p>
                }
            </div>
        );
    }
};

export default TaskList;